'use client'

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

import { ArrowRight } from 'lucide-react'

import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { AuthCredentialsValidator, TAuthCredentialsValidator } from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'

const page = () => {

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator)
    })

    const { data } = trpc.anyApiRoute.useQuery()
    console.log(data)

    const onSubmit = ({
        email,
        password
    }: TAuthCredentialsValidator) => {
        //send data to the server
    }

  return (
    <>
        <div className="container mx-auto relative flex pt-20 flex-col  items-center justify-center md:max-w-lg lg:px-0">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:[350px]">

                <div className="flex flex-col items-center space-y-2 text-center">
                    <Icons.logo className="h-20 w-20" />
                    <h1 className="text-2xl font-bold">
                        Créez un compte
                    </h1>

                    <Link
                        href="/sign-in"
                        className={buttonVariants({
                            variant: 'link',
                            className: 'gap-1.5'
                        })}
                    >
                        Vous avez déjà un compte? Connectez-vous
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="grid gap-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-2">

                            <div className=" grid gap-1 py-2">
                                <Label htmlFor='email' >Email</Label>
                                <Input 
                                    {...register("email")}
                                    className={cn({
                                        "focus-visible:ring-red-500": 
                                            errors.email,
                                    })} 
                                    placeholder='ton@exemple.com'
                                />
                            </div>

                            <div className=" grid gap-1 py-2">
                                <Label htmlFor='password' >Mot de passe</Label>
                                <Input 
                                    {...register("password")}
                                    className={cn({
                                        "focus-visible:ring-red-500": 
                                            errors.password,
                                    })} 
                                    placeholder='ton mot de passe...'
                                />
                            </div>

                            <Button>S'incrire</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default page