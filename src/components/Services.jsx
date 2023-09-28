async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/AllService");

  return res.json();
}

const Services = async () => {
  const data = await getData();
  return (
    <div>
      <section>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mb-16 ">
              <h3 className="text-primary font-semibold uppercase text-xl">
                Our All Services
              </h3>
              <h2 className="text-3xl text-black font-bold font-heading">
                We Provide BestWeb design services
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {data.map((item, i) => {
                return (
                  <div key={i} className="py-10 ">
                    <div className="flex flex-wrap items-center -mx-4">
                      <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                        <div className="max-w-md">
                          <span className="text-primary font-bold">
                            {item["tag"]}
                          </span>
                          <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                            {item["title"]}
                          </h2>
                          <div className="mb-6 max-w-sm">
                            <p className="text-gray-500 leading-loose">
                              {item["des"]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div className="mb-4 flex flex-wrap items-end">
                          <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                            <img
                              className="w-full h-32 lg:h-48 object-cover rounded"
                              src={item["image1"]}
                            />
                          </div>
                          <div className="w-full lg:w-1/3 px-3">
                            <img
                              className="w-full h-32 object-cover rounded"
                              src={item["image2"]}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap items-start">
                          <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                            <img
                              className="w-full h-32 object-cover rounded"
                              src={item["image3"]}
                              alt=""
                            />
                          </div>
                          <div className="w-full lg:w-2/3 px-3">
                            <img
                              className="w-full h-32 lg:h-48 object-cover rounded"
                              src={item["image4"]}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="skew skew-bottom mr-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10" />
          </svg>
        </div>
        <div className="skew skew-bottom ml-for-radius">
          <svg
            className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
            viewBox="0 0 10 10"
            preserveAspectRatio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Services;
