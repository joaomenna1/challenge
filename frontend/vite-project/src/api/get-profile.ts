import { api } from "@/lib/axios"

export interface GetProfileUserResponse {
    name: string,
    email: string,
}

export async function getprofileUser() {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await api.get<GetProfileUserResponse>('/profile/me', config)

    return response.data
}