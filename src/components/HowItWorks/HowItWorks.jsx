import React from "react";
import Layout from "../../layout";
import HowItWorksLeft from "./HowItWorksLeft";
import HowItWorksRight from "./HowItWorksRight";

function HowItWorks() {
  return (
    <>
      <Layout>
        <div className="flex flex-col-reverse md:flex-row mt-[50px] mb-[150px] justify-center items-start gap-[40px]">
          <HowItWorksLeft />
          <HowItWorksRight />
        </div>
      </Layout>
    </>
  );
}

export default HowItWorks;
