import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Helmet } from 'react-helmet-async'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
// import { toast } from 'sonner'


const signUpForm = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting }} = useForm<SignUpForm>()

    async function handleSignUp(data: SignUpForm) {
        console.log(data)
        await new Promise((resolve) => setTimeout(resolve, 2000))

        try {
             toast.success('Usuário cadastrado com sucesso!', {
            action: {
                label: 'Login',
                onClick: () => navigate('/sign-in')
            }
        })
        } catch (error) {
            toast.error('Error ao cadastrar usuario')
        }
    }

    return (
        <>
            <Helmet title="Cadastrar usuários"/>
            <div className="p-8">
            <Button variant={'ghost'} asChild className="absolute right-8 top-8">
                <Link to="/sign-in">
                    Fazer login
                </Link>
             </Button>
              <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tighter">
                        Criar conta usuário
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        Acompanhe suas urls pela plataforma de rastreamento
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Seu nome</Label>
                        <Input id="name" type="name"  {...register('name')}/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu e-mail</Label>
                        <Input id="email" type="email"  {...register('email')}/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" type="password" {...register('password')}/>
                    </div>

                    <Button disabled={isSubmitting} className="w-full" type="submit">
                        Finalizar cadastro
                    </Button>

                    <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                        Ao continuar, você concorda com nossos <a className="underline underline-offset-4" href="">termos de serviços</a> e{' '} 
                         <a href="" className="underline underline-offset-4">políticas de privacidades</a> 
                    </p>
                </form>
              </div>
            </div>
        </>
    )
}