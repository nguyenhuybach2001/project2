import React from "react";
import "./index.style.scss";
import Carousel from "react-material-ui-carousel";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto ">
        <div className="grid grid-cols-3 gap-x-4 ">
          <Carousel className="col-span-2 bg-black"></Carousel>
          <div className="col-span-1 bg-red-400"></div>
        </div>
        <div className="grid grid-cols-5 gap-x-4 mt-5">
          <Carousel className="col-span-3 bg-black"></Carousel>
          <div className="col-span-2 bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}
