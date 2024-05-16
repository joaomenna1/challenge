import { INestApplication, Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './prisma/prisma.service'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateUrlController } from './controllers/create-url.controller'
import { envSchema } from './env'
import { AuthModule } from './auth/auth.module'
import { FetchRecentUrlsController } from './controllers/fetch-recent-urls.controller'
import { GetProfileController } from './controllers/get-profile'
import { BullModule } from '@nestjs/bull'
import { DeleteUrlControllerController } from './controllers/delete-url.controller.controller'
import { UrlMonitoringController } from './controllers/url-monitoring.controller'
import { RegisterUrlProducerSerivce } from './jobs/registerUrl-producer-service'
import { registerUrlConsumer } from './jobs/registerUrl-consumer'
import { IntervalMonitorUrlService } from './jobs/interval-monitor-url-service'
import { RedisServices } from './config/redis'
import { RedisUrlRepository } from './cache/redis-url-repository'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'url-monitor-queue',
    }),
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateUrlController,
    FetchRecentUrlsController,
    GetProfileController,
    DeleteUrlControllerController,
    UrlMonitoringController,
  ],
  providers: [
    PrismaService,
    RedisServices,
    RegisterUrlProducerSerivce,
    registerUrlConsumer,
    IntervalMonitorUrlService,
    RedisUrlRepository,
  ],
})
export class AppModule {
  static configureSwagger(app: INestApplication) {
    const options = new DocumentBuilder()
      .setTitle('Sistema de rastreamento')
      .setDescription(
        'O sistema é um sistema de rastreamento de status de websites',
      )
      .setVersion('1.0')
      .build()

    const document = SwaggerModule.createDocument(app, options)

    SwaggerModule.setup('api', app, document)
  }
}
