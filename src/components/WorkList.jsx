import React from "react";
async function getData() {
  const res = await fetch("https://agency.teamrabbil.com/api/WorkList");

  return res.json();
}
const WorkList = async () => {
  const data = await getData();
  return (
    <>
      <section>
        <div className="py-20 bg-white radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-[480px] mx-auto text-center lg:mx-0 lg:text-left">
              <p className="text-primary text-xl uppercase mb-4">Work List</p>
              <h2 className="text-[30px] font-semibold leading-normal">
                We provide the Perfect Solution to your business growth
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {data.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4"
                  >
                    <span className="mb-4 md:mb-6 inline-block bg-primaryLight p-7 text-[#130F26] rounded-[20px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M29.0027 8.64207C30.7556 8.64206 32.3355 7.58769 33.005 5.97125C33.6744 4.35481 33.3012 2.49513 32.0596 1.26051C30.818 0.0258826 28.953 -0.340165 27.3352 0.333273C25.7175 1.00671 24.6662 2.5868 24.6722 4.33579C24.6803 6.71646 26.6167 8.64208 29.0027 8.64207ZM29.0027 2.46925C30.0358 2.46925 30.8734 3.30493 30.8734 4.33579C30.8734 5.36666 30.0358 6.20234 29.0027 6.20234C27.9696 6.20234 27.132 5.36666 27.132 4.33579C27.132 3.30493 27.9696 2.46925 29.0027 2.46925ZM2.45985 23.3246C2.45985 28.204 5.15538 30.8789 10.0309 30.8789C10.7109 30.8868 11.2602 31.435 11.2682 32.1135C11.2601 32.7896 10.7085 33.3334 10.0309 33.3333C3.84444 33.3333 0 29.4974 0 23.3246V11.317C0 5.12944 3.84444 1.29348 10.0309 1.29348H20.8719C21.5495 1.30153 22.0945 1.85191 22.0945 2.52804C22.0945 2.85413 21.9637 3.16666 21.7312 3.39585C21.4988 3.62505 21.184 3.75184 20.8572 3.74791H10.0309C5.15538 3.74791 2.45985 6.43749 2.45985 11.317V23.3246ZM19.7819 20.1206C19.5756 20.3747 19.2813 20.5425 18.9571 20.5909C18.6344 20.6236 18.3117 20.5286 18.0586 20.3263L13.5366 16.7843L9.47117 22.0606C9.27732 22.3238 8.9858 22.4984 8.66188 22.5453C8.33796 22.5923 8.0087 22.5077 7.7478 22.3104C7.21536 21.8939 7.11694 21.1279 7.52686 20.5909L12.3435 14.3299C12.5444 14.0703 12.8406 13.9012 13.1667 13.8598C13.4928 13.8184 13.8219 13.9083 14.0816 14.1094L18.6036 17.6514L22.5806 12.5809C23.0171 12.1668 23.6909 12.1316 24.1684 12.4981C24.6459 12.8645 24.7846 13.5234 24.4954 14.0506L19.7819 20.1206ZM30.9323 11.317C30.2571 11.317 29.7097 11.8631 29.7097 12.5368V23.3246C29.6655 28.204 26.97 30.8789 22.0945 30.8789H17.1748C16.4948 30.8868 15.9455 31.4349 15.9375 32.1135C15.9456 32.7896 16.4972 33.3334 17.1748 33.3333H22.0945C28.281 33.3333 32.1401 29.4974 32.1401 23.3246V12.5368C32.1402 11.8688 31.6017 11.325 30.9323 11.317Z"
                          fill="#130F26"
                        />
                      </svg>
                    </span>
                    <h4 className="mb-4 text-2xl font-bold font-heading">
                      {item["title"]} {i + 1}
                    </h4>
                    <p className="text-gray-500 leading-loose">{item["des"]}</p>
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

export default WorkList;
