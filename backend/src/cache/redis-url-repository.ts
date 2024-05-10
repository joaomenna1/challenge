import { Injectable } from '@nestjs/common'
import { RedisServices } from 'src/config/redis'
import { PrismaService } from 'src/prisma/prisma.service'

export interface Url {
  id: string
  urlName: string
  status: string | null
}

export interface ListUrl {
  items: Url[]
}

@Injectable()
export class RedisUrlRepository {
  constructor(
    private readonly redis: RedisServices,
    private readonly prisma: PrismaService,
  ) {}

  async find(urlName: string) {
    const existUrl = await this.redis.get('urls')

    if (existUrl) {
      const listUrl = JSON.parse(existUrl) as ListUrl

      const foundUrl = listUrl.items.find((url) => url.urlName === urlName)

      if (foundUrl) {
        console.log('encontrei o elemento no cache')
        return foundUrl
      }
    }

    const isUrlExistInDatabase = await this.prisma.url.findFirst({
      where: {
        urlName: urlName.trim(),
      },
      select: {
        id: true,
        status: true,
        urlName: true,
      },
    })

    if (isUrlExistInDatabase) {
      console.log('existe no banco de dados')
      return isUrlExistInDatabase
    }
  }

  async findMany(userId: string): Promise<ListUrl> {
    const existUrl = await this.redis.get('urls')

    if (existUrl) {
      const listUrl = JSON.parse(existUrl) as ListUrl

      if (Array.isArray(listUrl.items) && listUrl.items.length > 0) {
        return listUrl
      }
    }

    const urlsFromDatabase = await this.prisma.url.findMany({
      where: {
        authorId: userId,
      },
      select: {
        id: true,
        urlName: true,
        status: true,
      },
    })

    await this.redis.set('urls', JSON.stringify({ items: urlsFromDatabase }))
    return { items: urlsFromDatabase }
  }

  async updateCache(urlId: string, newStatus: string): Promise<void> {
    const existUrl = await this.redis.get('urls')

    if (existUrl) {
      const listUrl = JSON.parse(existUrl) as ListUrl

      listUrl.items = listUrl.items.map((url) => {
        if (url.id === urlId) {
          url.status = newStatus
        }
        return url
      })

      await this.redis.set('urls', JSON.stringify(listUrl))
    }
  }
}
