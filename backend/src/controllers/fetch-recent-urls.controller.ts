import { Controller, Get, Query, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CurrentUser } from 'src/auth/current-user-decoretor'
import { JwtAuthGuard } from 'src/auth/jwt-authGuard'
import { UserPayload } from 'src/auth/jwt.strategy'
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
@ApiTags('url')
export class FetchRecentUrlsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageQueryParamsSchema,
    @CurrentUser() user: UserPayload,
  ) {
    const perpage = 10
    const totalCount = await this.prisma.url.count({
      where: { authorId: user.sub },
    })
    const urls = await this.prisma.url.findMany({
      where: { authorId: user.sub },
      take: 10,
      skip: (page - 1) * perpage,
      orderBy: {
        createdAt: 'desc',
      },
    })

    // eslint-disable-next-line camelcase
    const list_urls = urls.map((url) => ({
      id: url.id,
      urlName: url.urlName,
      status: url.status,
      createdAt: url.createdAt,
    }))

    const result = {
      // eslint-disable-next-line camelcase
      list_urls,
      meta: {
        pageIndex: page,
        perPage: 10,
        totalCount,
      },
    }

    return result
  }
}
