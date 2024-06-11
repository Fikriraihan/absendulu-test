"use client";

import React from "react";
import { Button } from "antd";
import { CaretRightOutlined, ShareAltOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getAllFilms } from "@/service/film-service";
import { useJWT } from "@/app/provider";

const Hero = () => {
  const { data: films, isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: getAllFilms,
  });

  return (
    <>
      <div className="overlay h-[70vh] md:w-full w-[90%] mx-auto md:rounded-none rounded-xl">
        <div className="w-full md:rounded-none rounded-xl h-full md:bg-gradient-to-r bg-gradient-to-t from-[#023880] from-40% to-60% to-transparent">
          <div className="flex md:items-center items-end h-full px-16 md:py-0 py-10">
            <div className="flex flex-col md:max-w-[418px] max-w-full gap-4">
              <h1>{isLoading ? "Loading title..." : films?.[0]?.title}</h1>
              <p className="opacity-[66%] md:block hidden">2022 | 2H 23M</p>
              <div className="md:hidden flex gap-3">
                <div className="bg-[#0249A6] p-[6px] rounded-[2.4px]">
                  <p className="text-secondaryYellow">2022</p>
                </div>
                <div className="bg-[#0249A6] p-[6px] rounded-[2.4px]">
                  <p className="text-secondaryYellow">2H 33M</p>
                </div>
                <div className="bg-[#0249A6] p-[6px] rounded-[2.4px]">
                  <p className="text-secondaryYellow">Action</p>
                </div>
              </div>
              <p className="md:opacity-[66%] opacity-[50%] md:text-base text-xs">
                {isLoading
                  ? "Loading description..."
                  : films?.[0]?.description.slice(0, 157) + "..."}
              </p>
              <div className="flex gap-4">
                <Button
                  icon={
                    <CaretRightOutlined
                      width={16}
                      height={16}
                      className="!text-black"
                    />
                  }
                  type="primary"
                  className="w-[138px] h-[40px] !font-semibold !rounded-full !text-black"
                >
                  Play
                </Button>
                <div className="md:hidden block">
                  <Button
                    icon={
                      <ShareAltOutlined
                        width={16}
                        height={16}
                        className="!text-primaryYellow"
                      />
                    }
                    type="default"
                    className="w-[138px] h-[40px] !font-semibold !rounded-full !bg-transparent !border-primaryYellow !text-primaryYellow"
                  >
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
