import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/baseball2.png"
        alt="Card background"
        fill
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-transparent to-[#002C69] pt-[2.5rem] pb-[1rem] px-6">
        <h3 className="text-white text-start text-lg font-semibold">
          Video Title
        </h3>
      </div>
    </div>
  );
};

export default Card;
