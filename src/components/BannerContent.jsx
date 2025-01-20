import React from "react";

function BannerContent() {
  return (
    <>
      <div className="absolute flex flex-col  items-center justify-center mx-auto h-full w-full text-white">
        <button className="border rounded-[20px] px-2 p-1">
          LET US GUIDE YOUR HOME
        </button>
        <div className="w-[592.92px]  ">
          <h1 className="mt-3 text-7xl text-center">
            Discover a place you'll love to live
          </h1>
        </div>
        <div className="flex mt-3">
          <p className="text-lg underline">Sell</p>
          <p className="text-lg ml-8">Rent</p>
        </div>
        <div className="search_bar mt-3 relative">
          <input
            className="w-[690px] p-4 rounded-[30px]"
            type="text"
            name=""
            id=""
            placeholder="Enter name,keywords..."
          />
          <div className="absolute h-[50px] w-[50px] bg-[#E7C873] rounded-full flex right-[5px] top-[3px]">
            <div className="relative">
            <i className="absolute left-[24px] text-black fa-solid fa-magnifying-glass  h-full w-full flex items-center justify-center"></i>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerContent;
