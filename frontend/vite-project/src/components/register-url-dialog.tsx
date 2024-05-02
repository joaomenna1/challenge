import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { z } from "zod";
import { toast } from 'sonner'
import { useMutation } from "@tanstack/react-query";
import { registerUrl } from "@/api/register-url";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const registerUrlForm = z.object({
    url: z.string().url()
})

type RegisterUrlForm = z.infer<typeof registerUrlForm>


export function RegisterUrlDialog() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { isSubmitting}  } = useForm<RegisterUrlForm>()
    const { mutateAsync: registerUrlFn } = useMutation({
        mutationFn: registerUrl
    })

    async function handleRegisterUrl(data:RegisterUrlForm ) {
        try {
            await registerUrlFn({
                url: data.url
            })

            toast.success('Url cadastrada com sucesso', {
                action: {
                    label: 'Urls List',
                    onClick: () => navigate("/urls")
                }
            })
        } catch  {
            toast.error('Error ao cadastrar url')
        }
    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Cadastrar Url</DialogTitle>
                <DialogDescription>
                    Cadastrar uma Url para rastreamento
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(handleRegisterUrl)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Endereço (Url)
                        </Label>
                        <Input className="col-span-3" id="name" placeholder="ex: https://www.indt.org.br/" {...register('url')}/>
                    </div>
                </div>
            <DialogFooter>
                <Button disabled={isSubmitting} type="submit" variant="success">Salvar</Button>
            </DialogFooter>
            </form>
        </DialogContent>
    )
}