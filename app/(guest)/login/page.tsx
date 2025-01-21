"use client";

import React from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/components/forms/FormInput";
import Brand from "@/components/ui/Brand";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { AuthedResponse, LoginSchema, loginSchema } from "@/features/auth";
import client from "@/lib/axios";
import { APIFailResponse, APISuccessResponse } from "@/types/apiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const onSubmit = async (formData: LoginSchema) => {
    try {
      const response = await client.post<APISuccessResponse<AuthedResponse>>(
        "api/auth/login",
        formData,
      );

      const data = response.data.data;

      localStorage.setItem("name", data.user.name);
      localStorage.setItem("role", data.user.role);

      if (data.user.role === "admin") {
        router.push("/dashboard");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError<APIFailResponse>(error)) {
        if (error.response?.data && error.response.data.data) {
          const data = error.response.data.data;
          loginForm.setError("email", {
            message: data.message as string,
            type: "manual",
          });
        }
      }
    }
  };

  return (
    <div className="m-auto flex w-[32rem] flex-col items-center rounded-xl bg-zinc-900 p-4 shadow-md">
      <Brand />

      <Form {...loginForm}>
        <form
          onSubmit={loginForm.handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-2"
        >
          <FormInput
            control={loginForm.control}
            type="email"
            name="email"
            label="Email"
          />
          <FormInput
            control={loginForm.control}
            type="password"
            name="password"
            label="Password"
          />
          <Button type="submit" className="mt-4 w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginPage;
