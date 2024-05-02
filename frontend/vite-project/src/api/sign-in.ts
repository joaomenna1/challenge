import { api } from "@/lib/axios";

export interface SignInBody {
    email: string,
    password: string
}

export interface SignInResponse {
    access_token: string
}

export async function signIn({ email, password }: SignInBody): Promise<SignInResponse> {
    const response = await api.post('/sessions',{ email, password })
    if (response.data && response.data.access_token) {
        return { access_token: response.data.access_token };
    } else {
        throw new Error('Access token não encontrado na resposta');
    }
}