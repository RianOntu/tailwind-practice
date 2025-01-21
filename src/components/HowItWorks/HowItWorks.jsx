import React from "react";
import Layout from "../../layout";
import HowItWorksLeft from "./HowItWorksLeft";
import HowItWorksRight from "./HowItWorksRight";

function HowItWorks() {
  return (
    <>
      <Layout>
        <div className="flex mt-[50px] mb-[50px] justify-center items-start gap-[40px]">
          <HowItWorksLeft />
          <HowItWorksRight />
        </div>
      </Layout>
    </>
  );
}

export default HowItWorks;
