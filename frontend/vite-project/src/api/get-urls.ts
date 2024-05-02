import { api } from "@/lib/axios"

export interface GetUrlsQuery {
    pageIndex?: number | null
}

export interface GetUrlsResponse {
    list_urls: {
        id: string
        urlName: string
        status:  | 'Success'| 'Bad_Request'| 'off'| 'Not_Found'
        createdAt: Date
        updateAt: Date
        authorId: string
    }[]
    meta: {
        pageIndex: number
        perPage: number
        totalCount: number
    }
}

export async function getUrls({ pageIndex }: GetUrlsQuery) {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            pageIndex
        }

    }
    
    const response = await api.get<GetUrlsResponse>('/urls', config)

    return response.data
}