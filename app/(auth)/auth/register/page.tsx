"use client"

import { AuthIllustration } from "@public/assets/icons/AuthIllustration"
import { Tasteful } from "@public/assets/icons/Tasteful"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { RegisterValidation } from "@lib/validations/auth"
import { useRouter } from "next/navigation"
import { ClassicRegister } from "@lib/actions/user.actions"

const LoginPage = () => {

  const router = useRouter()

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(RegisterValidation),
    defaultValues: {
      fullname: "",
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: z.infer<typeof RegisterValidation>) => {
   await ClassicRegister({
    fullname: values.fullname,
    email: values.email,
    password: values.password
   })

   router.push("/")
  }

  return (
    <>
      <div className="column">
        <img src="/assets/images/post.jpg" alt="" />
        <div className="box">
          <AuthIllustration />
        </div>
      </div>

      <div className="column">

        <Tasteful />
        <div className="h1">
          <h1>Let’s have you set up</h1>
          <img src="/assets/icons/emoji.svg" alt="" />
        </div>


        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="input">
            <label htmlFor="title">Full name</label>
            <input type="text" id="fullname" {...register("fullname")} placeholder="John Matt" />
            <p className="error">{errors.fullname?.message}</p>
          </div>

          <div className="input">
            <label htmlFor="title">E-mail</label>
            <input type="text" id="email" {...register("email")} />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div className="input">
            <label htmlFor="title">Password</label>
            <input type="password" id="password" {...register("password")} />
            <p className="error">{errors.password?.message}</p>
          </div>

          <input type="submit" className="btn-full btn-colorful" value="Register now" />

        </form>

        <Link className="link" href="/auth/login">Have an account? Sign in here</Link>

      </div>

    </>
  )
}

export default LoginPage