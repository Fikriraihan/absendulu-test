import React from "react";
import { Carousel } from "antd";
import Card from "./card";
import { ArrowBigLeftDash } from "lucide-react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselContent = () => {
  return (
    <>
      <div className="carousel-slide">
        <div className="carousel-item" style={contentStyle}>
          <Card />
        </div>
        <div className="carousel-item" style={contentStyle}>
          <Card />
        </div>
        <div className="carousel-item" style={contentStyle}>
          <Card />
        </div>
      </div>
    </>
  );
};

const CarouselComponent: React.FC = () => (
  <div className="">
    <Carousel
      arrows
      infinite={false}
      cssEase="linear"
      dots={false}
      // prevArrow={<LeftOutlined />}
      // nextArrow={<RightOutlined />}
    >
      {[0, 1, 2, 3].map((item) => (
        <CarouselContent key={item} />
      ))}
    </Carousel>
  </div>
);

export default CarouselComponent;
