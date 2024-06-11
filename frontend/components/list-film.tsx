import React from "react";
import MobileList from "./mobile-list";
import CarouselComponent from "./carousel";

const ListFilm = () => {
  return (
    <div className="flex flex-col gap-20 md:px-16 py-8 px-6">
      <div className="md:flex md:flex-col md:gap-12 hidden">
        <CarouselComponent />
        <CarouselComponent />
      </div>
      <div className="md:hidden block ">
        <MobileList />
      </div>
    </div>
  );
};

export default ListFilm;
