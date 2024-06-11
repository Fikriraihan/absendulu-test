"use client";

import { loginUser } from "@/service/auth-service";
import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onValuesChange = (_: any, allValues: { [key: string]: any }) => {
    const hasEmptyFields = Object.values(allValues).some((value) => !value);
    setIsFormValid(!hasEmptyFields);
  };

  const mutateLogin = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: loginUser,
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (error) => {
      toast.error(error.message);
      console.error("Login failed:", error);
    },
  });
  const onFinish = (values: any) => {
    mutateLogin.mutate(values);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="formCard md:w-[612px] md:h-[789px] h-[589px] sm:w-[522px] w-[362px]">
      <h3>Sign in</h3>
      <div className="mt-6">
        <Form
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { whitespace: true },
            ]}
          >
            <Input
              placeholder="Enter email"
              className="!rounded-full !py-2 !px-4"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              { whitespace: true },
              { min: 3, message: "Password must be at least 3 characters" },
            ]}
          >
            <Input.Password
              placeholder="Enter password"
              className="!rounded-full !py-2 !px-4"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="!rounded-full w-full disabled:!bg-[#666666] disabled:!border-none disabled:!text-[#888888] !h-[40px] !font-semibold leading-6"
              disabled={!isFormValid}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="flex justify-center flex-col items-center">
        <Link href="/" className="text-[#0249A6]">
          Forgot password?
        </Link>
        <p className="mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-[#0249A6]">
            Sign up
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default LoginForm;
