import { z } from "zod"

const Schema = z.object({
    email: z.string().email({ message: "email is not valid" }),
    password: z
        .string()
        .min(8, {
            message: "Password must be more than 8 characters",
        })
        .max(32, {
            message: "Password must not be more than 32 characters",
        })
        .regex(/[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/, {
            message:
                "Password must inculde 1 uppercase letter, 1lowercase letter, must contain 1 number and 1 special character",
        }),
    rememberPassword: z.boolean(),
})

export default Schema
export type SchemaType = z.infer<typeof Schema>
