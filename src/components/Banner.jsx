import React from "react";
import Navbar from "./Navbar";
import BannerContent from "./BannerContent";

function Banner() {
  return (
    <>
      <div className="relative w-[98%] mx-auto rounded-[20px] h-[400px] md:h-[858.8px] mt-5">
        <img
          className="absolute w-[100vw] md:w-full h-full md:h-full rounded-[20px] md:object-cover object-*  object-center"
          src="/assets/bg-image.jpg"
          alt=""
        />
        <div className="absolute overlay  inset-0 rounded-[20px] bg-black/70">
          <div className="relative ">
            <div className="absolute w-full">
              <Navbar />
            </div>
          </div>
        </div>
        <BannerContent />
      </div>
    </>
  );
}

export default Banner;
