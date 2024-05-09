import { Injectable } from '@nestjs/common'
import { getUrlMonitor } from 'src/api/get-url-monitor'
import { dataMonitoringDTO } from './registerUrl-producer-service'

@Injectable()
export class IntervalMonitorUrlService {
  handleInterval(jobData: dataMonitoringDTO) {
    setInterval(() => {
      const response = getUrlMonitor(jobData)
      console.log(response)
    }, 3000)
  }
}

/**
 * 1- Preciso de uma funçao para buscar os dados no cache (redis) caso esteja monitorando em intervalos de 3s.
 * 2 - Se for a primeira url a para ser monitorada ira buscar do banco e em seguida irar monitorar este url.
 *   - Essa função sera chamada de findMany e irar receber um userId, para retornar uma lista url daquele usuario logado
 * 3 - Agora tenho um array de urls em maos...faço um FOR para percorrer toda essa lista que eu tenho
 *   - Ira fazer uma requisição no axios de todas a urls e ira gravar no banco e no cache
 *   - Feitas todas as requisiçoes da lista, agora no prox intervalo
 *   - Tenho que procurar as urls no cache e fazer as requisições novamente
 * 4 - Neste retorno eu faço a verificação da requisição anterior para atual se mudou o status
 *   - Qualquer mudança de status, ira armazenar este dado no banco de dados, se nao permance no cache
 *   - E assim voltar todo processo novamente
 */
