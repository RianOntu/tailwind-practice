import React from "react";
import Layout from "../../layout";
import HomeCard from "./HomeCard";

function HomesForYou() {
  return (
    <>
      <div className="bg-[#F6F8FA] mt-5 p-[10px] w-[98%] mx-auto rounded-[20px] mb-[50px]">
        <Layout>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <div className="h-full w-full flex flex-col justify-center items-center">
              <h1 className="text-3xl md:text-5xl text-center font-semibold mt-[50px]">
                Homes For You
              </h1>
              <p className="text-sm text-center mt-3">
                Based on your view history
              </p>
            </div>
            <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-5 mb-[75px]">
              <HomeCard/>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default HomesForYou;
