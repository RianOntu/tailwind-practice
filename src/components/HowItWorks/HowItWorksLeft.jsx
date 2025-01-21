import React from "react";

function HowItWorksLeft() {
  return (
    <>
      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-[600px]">
        <img
          className="col-span-2 h-[250px] rounded-[24px]"
          src="/assets/howitworks.jpg"
          alt=""
        />
        <div className="col-span-1 rounded-[24px]"></div>
        <img
          className="col-span-1 rounded-[24px]"
          src="/assets/howitworks1.jpg"
          alt=""
        />
        <img
          className="col-span-2 h-[250px] rounded-[24px]"
          src="/assets/howitworks2.jpg"
          alt=""
        />
        <div className="absolute bg-white rounded-[10px] flex items-center p-3 left-[107px] top-[217px]">
          <div className="relative h-[50px] w-[50px] bg-[#204B42] rounded-full flex right-[5px] top-[3px]">
            <i className="absolute fa-solid fa-building-columns h-full w-full flex items-center justify-center text-white"></i>
          </div>
          <div>
            <p className="text-sm font-extralight">Properties For Sale</p>
            <p className="text-lg font-black">14K</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorksLeft;
