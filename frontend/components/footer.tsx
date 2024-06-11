import React from "react";
import CardMobileFooter from "./card-mobile-footer";

const Footer = () => {
  return (
    <div>
      <div className="md:hidden block">
        <CardMobileFooter />
      </div>
      <div className="px-12 py-6 bg-[#0249A6] md:mx-10 mx-0 md:rounded-b-none rounded-b-2xl">
        <div className="w-full flex items-center justify-center">
          <h4 className="font-normal">Copyright @Mocaas.tv</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
