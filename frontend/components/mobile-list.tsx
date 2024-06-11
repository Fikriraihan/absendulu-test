"use client";

import { Card } from "antd";
import React from "react";

const CardANTD = () => {
  return (
    <Card className="col-span-6 card-mobile !rounded-none flex items-end">
      <Card.Meta
        description={
          <div className="flex items-center gap-2">
            <p className="!text-white font-bold text-[10.67px]">Video Title</p>
            <div className="p-1 bg-primaryYellow rounded-sm">
              <p className="text-black text-[10.67px]">Exclusive</p>
            </div>
          </div>
        }
      />
    </Card>
  );
};

const MobileList = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="font-bold leading-[19.2px]">Category 2</h2>
          <div className="grid grid-cols-12 gap-3 mt-4">
            <CardANTD />
            <CardANTD />
          </div>
        </div>
        <div>
          <h2 className="font-bold leading-[19.2px]">Category 2</h2>
          <div className="grid grid-cols-12 gap-3 mt-4">
            <CardANTD />
            <CardANTD />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileList;
