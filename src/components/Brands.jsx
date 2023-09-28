import React from "react";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/BrandList");

  return res.json();
}
const Brands = async () => {
  const data = await getData();
  return (
    <>
      <section className="py-10 bg-white mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            {data.map((item, i) => {
              return (
                <div
                  key={i}
                  className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/4 px-2"
                >
                  <div>
                    <img
                      className="mx-auto h-8"
                      src={item["image"]}
                      alt={item["name"]}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Brands;
