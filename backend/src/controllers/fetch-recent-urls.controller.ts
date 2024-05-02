import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { z } from 'zod'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageQueryParamsSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/urls')
@UseGuards(JwtAuthGuard)
export class FetchRecentUrlsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageQueryParamsSchema,
    // @CurrentUser() user: UserPayload,
  ) {
    // usar where: {userId: user.sub } para filtrar por url relacionando o user que a cadastrou
    const perpage = 1
    const totalCount = await this.prisma.url.count()
    const urls = await this.prisma.url.findMany({
      take: 10,
      skip: (page - 1) * perpage,
      orderBy: {
        createdAt: 'desc',
      },
    })

    const result = {
      list_urls: urls,
      meta: {
        pageIndex: page,
        perpage: 10,
        totalCount,
      },
    }

    return result
  }
}
