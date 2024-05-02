import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { toast } from 'sonner'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'


const signInForm = z.object({
    email: z.string().email(),
    password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignInForm>({
        defaultValues: {
            email: searchParams.get('email') ?? ''
        }
    })

    const {mutateAsync: authenticate} = useMutation({
        mutationFn: signIn
    })

    async function handleSignIn(data: SignInForm) {
        try {
            const response = await authenticate({email: data.email, password: data.password })

        // Verifique se o token está definido antes de usá-lo
        if (response && response.access_token) {
            localStorage.setItem('access_token', response.access_token);
            toast.success('Autenticação bem-sucedida!');
            // Redirecionar para a página do dashboard após o sucesso
            navigate('/');
            } else {
                throw new Error('Token de acesso não recebido');
            }
        } catch (error) {
            console.log(error)
            toast.error('Credenciais inválidas')
        }
    }

    return (
        <>
            <Helmet title="Login"/>
            <div className="p-8">
             <Button variant={'ghost'} asChild className="absolute right-8 top-8">
                <Link to="/sign-up">
                    Novo usuário
                </Link>
             </Button>
                
              <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Acessar painel
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Acompanhe suas urls pela plataforma de rastreamento
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu e-mail</Label>
                        <Input id="email" type="email"  {...register('email')}/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" {...register('password')}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full" type="submit">
                        Acessar Painel
                    </Button>

                </form>
              </div>
            </div>
        </>
    )
}