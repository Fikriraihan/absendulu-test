"use client";

import { registerUser } from "@/service/auth-service";
import { useMutation } from "@tanstack/react-query";
import { Button, Card, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onValuesChange = (_: any, allValues: string[]) => {
    const hasEmptyFields = Object.values(allValues).some((value) => !value);
    setIsFormValid(!hasEmptyFields);
  };

  const mutateCreateUser = useMutation({
    mutationKey: ["createUser"],
    mutationFn: registerUser,
    onSuccess: () => {
      router.push("/signin");
    },
    onError: (error: any) => {
      toast.error(error.message);
      console.error("Login failed:", error);
    },
  });

  const onFinish = (values: any) => {
    mutateCreateUser.mutate(values);
  };

  if (!isClient) {
    return <div>Loading</div>;
  }

  return (
    <Card className="formCard" style={{ width: 612, height: 789 }}>
      <h3>Sign Up</h3>
      <div className="mt-6">
        <Form
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onValuesChange={onValuesChange}
          layout="vertical"
        >
          <div className="grid grid-cols-12 gap-x-4">
            <Form.Item
              label="Username"
              name="username"
              className="col-span-6"
              rules={[
                { required: true, message: "Please input your username!" },
                { whitespace: true },
              ]}
            >
              <Input
                placeholder="Enter username"
                className="!rounded-full !py-2 !px-4"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              className="col-span-6"
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
              className="col-span-12"
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                { whitespace: true },
              ]}
            >
              <Input.Password
                placeholder="Enter password"
                className="!rounded-full !py-2 !px-4"
              />
            </Form.Item>

            <Form.Item className="col-span-12">
              <Button
                type="primary"
                htmlType="submit"
                className="!rounded-full w-full disabled:!bg-[#666666] disabled:!border-none disabled:!text-[#888888] !h-[40px] !font-semibold leading-6"
                disabled={!isFormValid}
              >
                Sign in
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <div className="flex justify-center flex-col items-center">
        <Link href="/" className="text-[#0249A6]">
          Forgot password?
        </Link>
        <p className="mt-4">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#0249A6]">
            Sign In
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default RegisterForm;
