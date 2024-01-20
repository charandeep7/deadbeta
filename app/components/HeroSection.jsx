import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center text-center sm:text-left mt-56 items-center">
          <Image
            src="/images/classic-car2.svg"
            width={20000}
            height={20000}
            className="h-32 w-48"
          />
          <h1 className=" text-black text-4xl sm:text-5xl lg:text-6xl font-extrabold relative">
            Dead Beta
          </h1>
          <p className="text-center">Help to connect people</p>
          <br />
        </div>
        <div className="">
            
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
