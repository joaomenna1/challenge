import { Injectable } from '@nestjs/common'
import { InjectQueue } from '@nestjs/bull'
import { Queue } from 'bull'

export interface dataMonitoringDTO {
  url: string
  userId: string
}

@Injectable()
export class RegisterUrlProducerSerivce {
  constructor(@InjectQueue('url-monitor-queue') private queue: Queue) {}

  async registerUrlMonitor(data: dataMonitoringDTO) {
    const jobData = data
    await this.queue.add('url-monitor-job', jobData)
  }
}
