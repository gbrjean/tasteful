"use client"

import { AuthIllustration } from "@public/assets/icons/AuthIllustration"
import { Tasteful } from "@public/assets/icons/Tasteful"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { LoginValidation } from "@lib/validations/auth"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { useState } from "react"


const LoginPage = () => {
  
  const router = useRouter()

  const [error, setError] = useState("");

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(LoginValidation),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = async (values: z.infer<typeof LoginValidation>) => {

    const res = await signIn('credential', {
      redirect: false,
      email: values.email,
      password: values.password,
    });
  

    if (res?.ok) {
      router.push('/');
    } else if (res?.error) {
      setError(res.error)
    }

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
          <h1>Let’s have you signed in</h1>
          <img src="/assets/icons/emoji.svg" alt="" />
        </div>

        <div className="actions">
          <div className="btn-auth" onClick={() => signIn("google", {callbackUrl: "/"})}>
            <img src="/assets/icons/Google.svg" alt="" />
            <span>Login with Google</span>
          </div>

          <div className="btn-auth" onClick={() => signIn("facebook", {callbackUrl: "/"})}>
            <img src="/assets/icons/Facebook.svg" alt="" />
            <span>Login with Facebook</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} >

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

          <input type="submit" className="btn-full btn-colorful" value="Sign in" />

          { error && <p className="error">{error}</p>  }
        
        </form>

        <Link className="link" href="/auth/register">Want an account? Create one here</Link>

      </div>

    </>
  )
}

export default LoginPage