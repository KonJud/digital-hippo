import { z } from "zod"

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8, {
            message: 
                "Le mot de passe doit être d'au moins 8 caractères.",
        })
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>