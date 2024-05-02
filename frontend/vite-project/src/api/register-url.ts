import { api } from "@/lib/axios"

export interface RegisterUrlBody {
    url: string,
}

export async function registerUrl({ url }: RegisterUrlBody) {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    await api.post('/create-url', { url }, config)
}