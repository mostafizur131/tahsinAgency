import React from "react";

async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/HeroList");

  return res.json();
}
const Hero = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0 flex items-center">
          <div className="w-full text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h1 className="mb-3 text-4xl lg:text-5xl font-bold leading-[65px] font-heading ">
                Increase Your Customers Loyalty and Satisfaction
              </h1>
            </div>
            <div className="max-w-sm mx-auto lg:mx-0">
              <p className="mb-6 text-black text-[20px]">
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
              <div>
                <button
                  className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-primary text-white border border-primary hover:bg-transparent hover:text-black font-semibold rounded-xl  transition duration-200"
                  href="#"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <div className="flex flex-wrap lg:mb-4 lg:ml-6">
            <img
              className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
              src={data["image1"]}
              alt={data["title"]}
            />
            <img
              className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
              src={data["image2"]}
              alt={data["title"]}
            />
          </div>
          <div className="flex flex-wrap lg:mb-4 lg:mr-6">
            <img
              className="w-full md:w-1/2 lg:w-2/3 h-64 p-2 object-cover rounded-4xl lg:rounded-br-none"
              src={data["image3"]}
              alt={data["title"]}
            />
            <img
              className="w-full md:w-1/2 lg:w-1/3 h-64 p-2 object-cover rounded-4xl lg:rounded-bl-none"
              src={data["image4"]}
              alt={data["title"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
