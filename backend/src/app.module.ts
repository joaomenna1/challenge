import { Module } from '@nestjs/common'
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

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    BullModule.registerQueue({
      name: 'url-monitoring',
    }),
  ],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateUrlController,
    FetchRecentUrlsController,
    GetProfileController,
    DeleteUrlControllerController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
