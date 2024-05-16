import {
  Controller,
  Delete,
  NotFoundException,
  Query,
  UseGuards,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/delete-url')
@UseGuards(JwtAuthGuard)
@ApiTags('url')
export class DeleteUrlControllerController {
  constructor(private prisma: PrismaService) {}

  @Delete()
  async handle(
    @Query('id') id: string,
    @CurrentUser()
    user: UserPayload,
  ) {
    const userId = user.sub

    const url = await this.prisma.url.findUnique({
      where: { authorId: userId, id },
    })

    if (!url) {
      throw new NotFoundException('Not found URL')
    }

    await this.prisma.url.delete({
      where: { id: url.id },
    })
  }
}
