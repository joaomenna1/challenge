import { Injectable } from '@nestjs/common'
import { getUrlMonitor } from 'src/api/get-url-monitor'
import { dataMonitoringDTO } from './registerUrl-producer-service'
import { RedisUrlRepository } from 'src/cache/redis-url-repository'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class IntervalMonitorUrlService {
  constructor(
    private prisma: PrismaService,
    private repository: RedisUrlRepository,
  ) {}

  handleInterval(jobData: dataMonitoringDTO) {
    setInterval(async () => {
      try {
        const existUrl = await this.repository.find(jobData.url)

        if (existUrl) {
          const urls = await this.repository.findMany(jobData.userId)
          console.log(urls)

          for (const url of urls.items) {
            try {
              const responseStatus = await getUrlMonitor(url.urlName)

              if (url.status !== responseStatus.toString()) {
                // Atualiza o banco de dados
                await this.prisma.url.update({
                  where: {
                    id: url.id,
                  },
                  data: {
                    status: responseStatus.toString(),
                  },
                })

                // Atualiza o cache com o status atualizado
                await this.repository.updateCache(
                  url.id,
                  responseStatus.toString(),
                )
              } else {
                console.log('Sem alteração no cache')
              }
            } catch (error) {
              console.error(`Erro ao acessar ${url.urlName}:`, error)
            }
          }
        } else {
          console.log('URL não existe no banco de dados ou cache')
        }
      } catch (error) {
        console.error('Erro durante o intervalo de monitoramento:', error)
      }
    }, 5000)
  }
}
