import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { publicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPlayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            const { email, password } = input
            const payload = await getPayloadClient()

            // check if user already exists
            const { docs: users } = await payload.find({
                collection: 'user',
                where: {
                    email: {
                        equals: email,
                    }
                }
            })

            if (users.length !== 0)
                throw new TRPCError({ code: 'CONFLICT' })

            await payload.create({
                collection: 'users',
                data: {}
            })
        })
})