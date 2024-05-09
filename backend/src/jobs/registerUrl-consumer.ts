import {
  OnQueueActive,
  OnQueueCompleted,
  Process,
  Processor,
} from '@nestjs/bull'
import { Job } from 'bull'
import { IntervalMonitorUrlService } from './interval-monitor-url-service'
import { dataMonitoringDTO } from './registerUrl-producer-service'

@Processor('url-monitor-queue')
export class registerUrlConsumer {
  constructor(private monitor: IntervalMonitorUrlService) {}

  @Process('url-monitor-job')
  handleUrlMonitoring(job: Job<dataMonitoringDTO>) {
    if (job.data) {
      this.monitor.handleInterval(job.data)
    }
  }

  @OnQueueCompleted()
  oncCompleted(job: Job) {
    console.log(`On Completed ${job.data}`)
  }

  @OnQueueActive()
  onQueueActive(job: Job) {
    console.log(`On active ${job.data}`)
  }
}
