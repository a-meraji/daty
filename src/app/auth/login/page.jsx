"use client";

import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "@/hooks/useLogin";
import pb from "@/libs/pocketbase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const { login } = useLogin();

  const router = useRouter()
  
  async function onSubmit(data) {
    const authData = await login({ email: data.email, password: data.password });
    if(authData?.record){
      reset(); //to reset form
      const isLogedIn = pb.authStore.isValid;
      if (isLogedIn){
        router.push("/set_time")
      }
    }
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-primary rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-accent1 uppercase">
          ورود به حساب کاربری
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-primary"
              >
              ایمیل
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="username"
              id="username"
              {...register("email")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-primary"
            >
              گذرواژه
            </label>
            <input
              type="password"
              name="password"
              placeholder="******"
              id="password"
              {...register("password")}
              className="block w-full px-4 py-2 mt-2 text-accent1 bg-primary border rounded-md focus:border-accent1sh1 focus:outline-none"
            />
          </div>
          <a href="#" className="text-xs text-accent1 hover:underline">
            رمزتان را فراموش کرده اید؟
          </a>
          <div className="mt-6">
            <button type="submit" className="w-full px-4 py-2 tracking-wide text-contPrimary transition-colors duration-200 transform bg-accent1 rounded-md hover:bg-accent1sh1 focus:outline-none focus:bg-accent1sh1">
              ورود
            </button>
          </div>
        </form>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t ">
          <div className="absolute px-5 bg-primary">یا</div>
        </div>
        <div className="flex mt-4 gap-x-2">
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 border border-secondary rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-secondary">
          {" "}
          حساب ندارید?{" "}
          <Link href="/auth/signup"
         className="font-medium text-accent1 hover:underline">
            ثبت نام کنید
          
          </Link>
        </p>
      </div>
    </div>
  );
}
