import {
  FacebookFilled,
  InstagramFilled,
  InstagramOutlined,
  MailOutlined,
  PhoneFilled,
  TikTokOutlined,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { MapIcon, MapPinned, PhoneCall } from "lucide-react";
import React from "react";

const CardMobileFooter = () => {
  return (
    <div className="bg-primaryYellow flex flex-col px-6 py-6 gap-10 pb-12 rounded-t-2xl">
      <div>
        <h2 className="font-bold text-black text-center">channelName</h2>
      </div>
      <div>
        <h4 className="text-black font-bold">Follow Us</h4>
        <div className="flex mt-6 gap-6">
          <FacebookFilled
            className="text-[28px] !bg-transparent !text-[#BB6002]"
            color="#BB6002 !rounded-full"
            width={42}
            height={42}
          />

          <InstagramOutlined
            className="text-[28px] !text-[#BB6002]"
            width={42}
            height={42}
          />
          <TikTokOutlined
            className="text-[28px] !text-[#BB6002]"
            width={42}
            height={42}
          />
          <TwitterOutlined
            className="text-[28px] !text-[#BB6002]"
            width={42}
            height={42}
          />
          <YoutubeFilled
            className="text-[28px] !text-[#BB6002]"
            width={42}
            height={42}
          />
        </div>
      </div>
      <div>
        <h4 className="text-black font-bold">Contact us</h4>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center gap-4">
            <MailOutlined className="text-[24px]" />
            <span className="text-[#BB6002]">Email to user@mail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <PhoneFilled className="text-[24px]" />
            <span className="text-[#BB6002]">Call 082143215678</span>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-black font-bold">Address</h4>
        <div className="mt-6 flex items-center gap-4">
          <MapPinned />
          <span className="text-[#BB6002]">Address</span>
        </div>
      </div>
    </div>
  );
};

export default CardMobileFooter;
