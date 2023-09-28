import React from "react";
async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TeamList");

  return res.json();
}
const TeamList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mb-16 ">
              <h3 className="text-primary font-semibold uppercase text-xl">
                Our Team Member
              </h3>
              <h2 className="text-3xl text-black font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="mb-6 w-full md:w-1/3 px-4">
                    <div className=" bg-white rounded shadow overflow-hidden">
                      <div className="relative">
                        <img
                          className="w-full h-80 "
                          src={item["image"]}
                          alt=""
                        />
                        <div className="flex items-center justify-between bg-white rounded-4xl py-3 px-4 absolute bottom-[30px] right-1/2 transform translate-x-1/2">
                          <a className="mr-3" href={item["facebook"]}>
                            <img src="assets/social/facebook.svg" alt="" />
                          </a>
                          <hr className="mr-3 w-[2px] h-4 bg-[#E3E3E3]" />
                          <a className="mr-3" href={item["twitter"]}>
                            <img src="assets/social/twitter.svg" alt="" />
                          </a>
                          <hr className="mr-3 w-[2px] h-4 bg-[#E3E3E3]" />
                          <a href={item["instagram"]}>
                            <img src="assets/social/instagram.svg" alt="" />
                          </a>
                        </div>
                      </div>

                      <div className="p-4">
                        <h4 className="mb-2 text-2xl font-bold font-heading">
                          {item["name"]}
                        </h4>
                        <p className="mb-4 text-gray-500 leading-loose">
                          {item["bio"]}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamList;
