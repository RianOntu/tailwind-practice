import React from "react";
import Layout from "../../layout";

function FindProperties() {
  return (
    <>
      <Layout>
        <div className="mt-[50px] mb-[50px]">
          <h2 className="text-5xl font-black text-center">
            Find Properties In These Cities
          </h2>
          <p className="text-sm  text-center mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-[50px]">
            <div className="relative col-span-2 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>
            <div className="relative col-span-1 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>
            <div className="relative col-span-1 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>


            <div className="relative col-span-1 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>
            <div className="relative col-span-1 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>
            <div className="relative col-span-2 h-[400px]">
              <img src="/assets/property.jpg" className="h-[400px] w-full object-cover object-center rounded-[24px]" alt="" />
              <div className="overlay absolute inset-0 rounded-[24px] bg-black/50"></div>
              <div className="absolute left-[24px] top-[34px]">
                <p className="text-white text-sm ">8 Properties</p>
                <p className="text-white text-lg mt-2">New York</p>

              </div>
              
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default FindProperties;
