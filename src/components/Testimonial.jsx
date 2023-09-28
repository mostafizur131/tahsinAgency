async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/TestimonialList");

  return res.json();
}

const Testimonial = async () => {
  const data = await getData();
  return (
    <div>
      <section>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-lg mb-16 ">
              <h3 className="text-primary font-semibold uppercase text-xl">
                Testimonial List
              </h3>
              <h2 className="text-3xl text-black font-bold font-heading">
                Better Agency/SEO Solution At Your Fingertips
              </h2>
            </div>

            <div className="flex flex-wrap">
              {data.map((item, i) => {
                return (
                  <div key={i} className="w-full md:w-1/3 py-5 md:px-5">
                    <div
                      className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200"
                      data-wow-delay=".1s"
                    >
                      <div className="flex items-center justify-center mb-6">
                        <img
                          className="h-16 w-16 rounded-xl object-cover"
                          src={item["image"]}
                          alt="Monst"
                        />
                      </div>
                      <p className="leading-[26px] text-base text-[#9D9D9D] mb-5 text-center">
                        {item["msg"]}
                      </p>
                      <div className="pl-4 text-center">
                        <h3 className="mt-6 font-bold text-2xl text-black">
                          {item["name"]}
                        </h3>
                        <p className="text-base text-black ">
                          {item["designation"]}
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
    </div>
  );
};

export default Testimonial;
