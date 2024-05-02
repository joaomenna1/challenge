import { Controller, Get, NotFoundException, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/profile/me')
@UseGuards(JwtAuthGuard)
export class GetProfileController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(@CurrentUser() user: UserPayload) {
    const userId = user.sub

    const userExist = await this.prisma.user.findFirst({
      where: { id: userId },
      select: {
        name: true,
        email: true,
      },
    })

    if (!userExist) {
      throw new NotFoundException('User not Found')
    }

    return userExist
  }
}
