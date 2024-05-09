import axios from 'axios'
import { dataMonitoringDTO } from 'src/jobs/registerUrl-producer-service'

export async function getUrlMonitor(jobData: dataMonitoringDTO) {
  const response = await axios.get(jobData.url)
  console.log(response.status)

  return response
}
