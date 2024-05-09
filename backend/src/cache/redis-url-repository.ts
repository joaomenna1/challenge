import { Injectable } from '@nestjs/common'
import { RedisServices } from 'src/config/redis'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RedisUrlRepository {
  constructor(
    private readonly redis: RedisServices,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * Preciso do AuthorId, esse dado vem pelo currentUser()
   *
   */
  async findMany(userId: string) {
    const cachedUrls = await this.redis.get('urls')

    if (!cachedUrls) {
      const urls = await this.prisma.url.findMany({
        where: {
          authorId: userId,
        },
      })

      return urls
    }

    return JSON.parse(cachedUrls)
  }
}
