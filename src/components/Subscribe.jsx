import React from "react";

function Subscribe() {
  return (
    <>
      <section>
        <div className="py-24 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="mb-5 text-xl text-primary font-semibold uppercase text-center">
                {" "}
                SUBSCRIBE
              </h3>
              <h2 className="mb-2 text-3xl font-bold text-center w-[450px] mx-auto ">
                Subscribe to get the latest news about us
              </h2>
              <p className="mb-10 text-[#8B8B8B] text-base text-center">
                Please drop your email below to get daily update about what we
                do
              </p>
              <form className="mx-auto">
                <div className="max-w-[596px] flex items-center justify-between border border-black rounded-xl p-[2px]">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="text-base w-64 px-2 py-2 mr-2 focus:outline-none bg-transparent"
                  />
                  <button className="text-base px-4 py-2 bg-secondary text-white rounded-xl  focus:outline-none">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
