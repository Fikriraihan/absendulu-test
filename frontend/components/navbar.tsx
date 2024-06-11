"use client";

import { useJWT } from "@/app/provider";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/service/auth-service";
import { useMutation } from "@tanstack/react-query";
import { Button as ButtonAntd } from "antd";
import Link from "next/link";

export function Navbar() {
  const { payload } = useJWT();

  const logoutMutate = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      window.location.href = "/signin";
    },
  });

  return (
    <div className="md:absolute block top-[30px] w-full mb-4 mt-2 px-6 z-50">
      <header className=" bg-[#051836] flex h-16 md:w-[95%] w-[100%] rounded-lg mx-auto items-center justify-between px-6">
        <div className="md:hidden">
          <Button
            size="icon"
            variant="outline"
            className="!bg-transparent border-none"
          >
            <MenuIcon className="h-6 w-6 !bg-transparent" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex-1 text-center md:flex-initial md:text-left">
            <a className="text-lg font-semibold text-primaryYellow" href="/">
              Channel Name
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link
              className="text-sm font-medium hover:underline text-primaryYellow"
              href="#"
            >
              Home
            </Link>
          </div>
        </div>
        {payload ? (
          <ButtonAntd
            type="primary"
            className="!rounded-full !w-[81px] !h-[40px]  !text-[#111111] !font-semibold"
            onClick={() => logoutMutate.mutate()}
          >
            Sign Out
          </ButtonAntd>
        ) : (
          <a href="/signin">
            <ButtonAntd
              type="primary"
              className="!rounded-full !w-[81px] !h-[40px]  !text-[#111111] !font-semibold"
            >
              Sign In
            </ButtonAntd>
          </a>
        )}
      </header>
    </div>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
