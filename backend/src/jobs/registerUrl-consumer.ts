import { Process, Processor } from '@nestjs/bull'
import { Job } from 'bull'
import axios from 'axios'

@Processor('url-monitor-queue')
export class registerUrlConsumer {
  constructor() {}

  @Process('url-monitor-job')
  async handleUrlMonitoring(job: Job) {
    const { data } = job
    setInterval(async () => {
      try {
        const response = await axios.get(data)
        console.log(response)
      } catch (error) {
        console.log(`Failed to monitor URL ${data}`, error)
      }
    }, 3000)
  }
}
