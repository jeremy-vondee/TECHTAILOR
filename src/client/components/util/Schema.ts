import { z } from "zod"

const Schema = z
    .object({
        email: z.string().email({ message: "email is not valid" }),
        password: z.string().min(8),
        rememberPassword: z.boolean(),
    })
    // .superRefine(({ password }, checkPassComplexity) => {
    //     const containsUppercase = (ch: string) => /[A-Z]/.test(ch)
    //     const containsLowercase = (ch: string) => /[a-z]/.test(ch)
    //     const containsSpecialChar = (ch: string) =>
    //         /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch)
    //     let countOfUpperCase = 0,
    //         countOfLowerCase = 0,
    //         countOfNumbers = 0,
    //         countOfSpecialChar = 0

    //     for (let i = 0; i < password.length; i++) {
    //         let ch = password.charAt(i)
    //         if (!isNaN(+ch)) countOfNumbers++
    //         else if (containsUppercase(ch)) countOfUpperCase++
    //         else if (containsLowercase(ch)) countOfLowerCase++
    //         else if (containsSpecialChar(ch)) countOfSpecialChar++
    //     }

    //     let errObj = {
    //         upperCase: { pass: true, message: "add upper case." },
    //         lowerCase: { pass: true, message: "add lower case." },
    //         specialCh: { pass: true, message: "add special ch." },
    //         totalNumber: { pass: true, message: "add number." },
    //     }

    //     if (countOfLowerCase < 1) {
    //         errObj = {
    //             ...errObj,
    //             lowerCase: { ...errObj.lowerCase, pass: false },
    //         }
    //     }
    //     if (countOfNumbers < 1) {
    //         errObj = {
    //             ...errObj,
    //             totalNumber: { ...errObj.totalNumber, pass: false },
    //         }
    //     }
    //     if (countOfUpperCase < 1) {
    //         errObj = {
    //             ...errObj,
    //             upperCase: { ...errObj.upperCase, pass: false },
    //         }
    //     }
    //     if (countOfSpecialChar < 1) {
    //         errObj = {
    //             ...errObj,
    //             specialCh: { ...errObj.specialCh, pass: false },
    //         }
    //     }

    //     if (
    //         countOfLowerCase < 1 ||
    //         countOfUpperCase < 1 ||
    //         countOfSpecialChar < 1 ||
    //         countOfNumbers < 1
    //     ) {
    //         checkPassComplexity.addIssue({
    //             code: "custom",
    //             path: ["password"],
    //             message: errObj,
    //         })
    //     }
    // })
    .superRefine(({ password }, checkPassComplexity) => {
        const containsUppercase = (ch: string) => /[A-Z]/.test(ch)
        const containsLowercase = (ch: string) => /[a-z]/.test(ch)
        const containsSpecialChar = (ch: string) =>
            /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch)
        let countOfUpperCase = 0,
            countOfLowerCase = 0,
            countOfNumbers = 0,
            countOfSpecialChar = 0
        for (let i = 0; i < password.length; i++) {
            let ch = password.charAt(i)
            if (!isNaN(+ch)) countOfNumbers++
            else if (containsUppercase(ch)) countOfUpperCase++
            else if (containsLowercase(ch)) countOfLowerCase++
            else if (containsSpecialChar(ch)) countOfSpecialChar++
        }
        if (
            countOfLowerCase < 1 ||
            countOfUpperCase < 1 ||
            countOfSpecialChar < 1 ||
            countOfNumbers < 1
        ) {
            checkPassComplexity.addIssue({
                code: "custom",
                message: "password does not meet complexity requirements",
            })
        }
    })

export default Schema
