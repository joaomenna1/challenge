import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { z } from 'zod'
import { RegisterUrlProducerSerivce } from 'src/jobs/registerUrl-producer-service'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { UserPayload } from 'src/auth/jwt.strategy'

const createUrlBodySchema = z.object({
  url: z.string().url(),
})

const bodyValidationPipe = new ZodValidationPipe(createUrlBodySchema)

type CreateUrlBodySchema = z.infer<typeof createUrlBodySchema>

@Controller('/monitor')
@UseGuards(JwtAuthGuard)
export class UrlMonitoringController {
  constructor(private readonly service: RegisterUrlProducerSerivce) {}

  @Post()
  async addUrl(
    @Body(bodyValidationPipe) body: CreateUrlBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const response = {
      ...body,
      userId: user.sub,
    }
    await this.service.registerUrlMonitor(response)

    return { message: `URL ${body.url} esta sendo monitorada` }
  }
}
