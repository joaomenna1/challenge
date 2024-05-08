import { Injectable } from '@nestjs/common'
import {
  InjectQueue,
  OnQueueActive,
  OnQueueCompleted,
  OnQueueProgress,
} from '@nestjs/bull'
import { Job, Queue } from 'bull'

@Injectable()
export class RegisterUrlProducerSerivce {
  constructor(@InjectQueue('url-monitor-queue') private queue: Queue) {}

  async registerUrlMonitor(url: string) {
    const jobData = { url }
    await this.queue.add('url-monitor-job', jobData)
  }

  @OnQueueCompleted()
  oncCompleted(job: Job) {
    console.log(`On Completed ${job.data}`)
  }

  @OnQueueProgress()
  onQueueProgress(job: Job) {
    console.log(`On Progress ${job.data}`)
  }

  @OnQueueActive()
  onQueueActive(job: Job) {
    console.log(`On active ${job.data}`)
  }
}
