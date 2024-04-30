import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const createUrlBodySchema = z.object({
  url: z.string().url(),
})

const bodyValidationPipe = new ZodValidationPipe(createUrlBodySchema)

type CreateUrlBodySchema = z.infer<typeof createUrlBodySchema>

@Controller('/create-url')
@UseGuards(JwtAuthGuard)
export class CreateUrlController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateUrlBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { url } = body
    const userId = user.sub

    await this.prisma.url.create({
      data: {
        authorId: userId,
        urlName: url,
      },
    })
  }
}
