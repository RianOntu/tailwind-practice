import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";

function Banner() {
  return (
    <>
      <div className="relative w-[100vw] h-[858.8px] ">
        <img
          className="absolute w-full h-full object-cover object-center"
          src="/assets/bg-image.jpg"
          alt=""
        />
        <div className="absolute overlay inset-0 bg-black/70">
          <div className="relative ">
            <div className="absolute w-full">
              <Navbar />
             

            </div>
          </div>
        </div>
        <BannerContent/>
      </div>
    </>
  );
}

export default Banner;
