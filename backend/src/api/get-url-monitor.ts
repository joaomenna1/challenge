import axios from 'axios'

export async function getUrlMonitor(jobData: string) {
  const response = await axios.get(jobData)
  console.log(response.status)

  return response.status.toString()
}
