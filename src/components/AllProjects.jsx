async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllProject");

  return res.json();
}

const AllProjects = async () => {
  const data = await getData();
  return (
    <div>
      <section>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mb-16 ">
              <h3 className="text-primary font-semibold uppercase text-xl">
                All Project
              </h3>
              <h2 className="text-3xl text-black font-bold font-heading">
                Better Agency/SEO Solution At Your Fingertips
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                    <div className=" bg-white shadow-xl rounded-2xl p-5 mr-4">
                      {" "}
                      <a target="_blank" href={item["live"]}>
                        <img
                          className="h-80 w-full mx-auto object-cover rounded"
                          src={item["image"]}
                          alt=""
                        />
                      </a>
                      <h3 className="text-black font-bold text-xl mt-2">
                        {item["title"]}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
