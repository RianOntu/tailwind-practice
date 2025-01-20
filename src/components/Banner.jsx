import React from "react";

function Banner() {
  return (
    <>
     <div
      className="relative w-[100vw] h-[858.8px] "
      
    >
        <img className="absolute w-full h-full object-cover object-center" src="/assets/bg-image.jpg" alt="" />
        <div className="absolute overlay inset-0 bg-black/70">
            <div className="relative">
                <div className="absolute">
                  <div className="container w-[80%] mx-auto">
                     
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Banner;
