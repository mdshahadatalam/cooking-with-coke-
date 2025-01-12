import * as Yup from 'yup';

export const signUp = Yup.object({
    fullName:Yup.string().required("Please enter your Full name"),
    email:Yup.string().email().required("Enter your Email"),
    password: Yup.string().min(8).matches( /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,'Enter 1 special character').required("Enter your password"),
})


export const SignIn = Yup.object({
    email:Yup.string().email().required("Enter your Email"),
    password: Yup.string().min(8).required("Enter your password"),
})