import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import theme from "./Theme/themeConfig";
import { ConfigProvider } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "@/components/navbar";
import { headers } from "next/headers";
import Provider from "./provider";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const pathname = headersList.get("x-current-path");
  const rootClassName =
    pathname === "/signin" || pathname === "/signup"
      ? "bg-[#01449C]"
      : "bg-[#051836]";
  const cookieStore = cookies();
  const jwt = cookieStore.get("jwt");

  return (
    <html lang="en">
      <body className={`${inter.className} ${rootClassName}`}>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <Provider token={jwt?.value}>
              <Navbar />
              {children}
              <ToastContainer />
            </Provider>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
