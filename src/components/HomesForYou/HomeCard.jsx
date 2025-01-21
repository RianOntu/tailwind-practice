import React from "react";

function HomeCard() {
  return (
    <>
      <div className="card bg-white rounded-[24px] h-[453px] w-[447px]">
        <div className="relative">
        <img className="rounded-[24px] p-2 " src="/assets/kitchen.jpg" alt="" />
        <p className="bg-[#1F4B43] absolute left-[28px] top-[28px] rounded-[20px] p-1 px-3 text-white">
           FOR SALE
        </p>
        </div>
       
        <div className="flex justify-between items-center mx-2">
          <h3 className="text-lg font-bold">Skyper Pool Apartment</h3>
          <h3 className="text-lg font-bold text-[#ED7964]">280,000</h3>
        </div>
        <div className="ml-2 flex items-center mt-2">
          <i className="fa-solid fa-location-dot  mr-2"></i>
          <p className="text-md font-thin">1020 Bloomingdale Ave</p>
        </div>
        <div className="flex items-center mx-2 mt-2">
          <div className="flex items-center">
          <i class="fa-solid fa-bed mr-1"></i>
          <p className="text-lg ml-1 mr-2">4 Beds</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-solid fa-bath mr-1"></i>
          <p className="text-lg ml-1 mr-2">2 Baths</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-regular fa-square mr-1"></i>
          <p className="text-lg ml-1 mr-2">450 squarefit</p>
          </div>
        </div>
      </div>
      <div className="card bg-white rounded-[24px] h-[453px] w-[447px]">
        <img className="rounded-[24px] p-2" src="/assets/kitchen.jpg" alt="" />
        <div className="flex justify-between items-center mx-2">
          <h3 className="text-lg font-bold">Skyper Pool Apartment</h3>
          <h3 className="text-lg font-bold text-[#ED7964]">280,000</h3>
        </div>
        <div className="ml-2 flex items-center mt-2">
          <i className="fa-solid fa-location-dot  mr-2"></i>
          <p className="text-md font-thin">1020 Bloomingdale Ave</p>
        </div>
        <div className="flex items-center mx-2 mt-2">
          <div className="flex items-center">
          <i class="fa-solid fa-bed mr-1"></i>
          <p className="text-lg ml-1 mr-2">4 Beds</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-solid fa-bath mr-1"></i>
          <p className="text-lg ml-1 mr-2">2 Baths</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-regular fa-square mr-1"></i>
          <p className="text-lg ml-1 mr-2">450 squarefit</p>
          </div>
        </div>
      </div>
      <div className="card bg-white rounded-[24px] h-[453px] w-[447px]">
        <img className="rounded-[24px] p-2" src="/assets/kitchen.jpg" alt="" />
        <div className="flex justify-between items-center mx-2">
          <h3 className="text-lg font-bold">Skyper Pool Apartment</h3>
          <h3 className="text-lg font-bold text-[#ED7964]">280,000</h3>
        </div>
        <div className="ml-2 flex items-center mt-2">
          <i className="fa-solid fa-location-dot  mr-2"></i>
          <p className="text-md font-thin">1020 Bloomingdale Ave</p>
        </div>
        <div className="flex items-center mx-2 mt-2">
          <div className="flex items-center">
          <i class="fa-solid fa-bed mr-1"></i>
          <p className="text-lg ml-1 mr-2">4 Beds</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-solid fa-bath mr-1"></i>
          <p className="text-lg ml-1 mr-2">2 Baths</p>
          </div>
          <p>|</p>
          <div className="flex items-center ml-2">
          <i class="fa-regular fa-square mr-1"></i>
          <p className="text-lg ml-1 mr-2">450 squarefit</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCard;
