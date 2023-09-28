import React from "react";

const Slug = ({ title }) => {
  return (
    <>
      <section className="-mt-24 pt-40 pb-12 bg-[#F8F9FC]">
        <div className="container mx-auto">
          <h1 className="text-[40px] font-semibold mb-5 text-[#101A29]">
            {title}
          </h1>
          <ul className="flex text-[#101A29] text-sm lg:text-sm pb-12 ">
            <li className="inline-flex items-center">
              <a href="#" className="text-[#101A29]">
                Home
              </a>
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="h-5 w-auto text-[#101A29]"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="inline-flex items-center">
              <a href="#" className="text-primary">
                {title}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Slug;
