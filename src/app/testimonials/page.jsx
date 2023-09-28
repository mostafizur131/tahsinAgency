import Slug from "@/components/Slug";
import Subscribe from "@/components/Subscribe";
import Testimonial from "@/components/Testimonial";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <Slug title={"Testimonial List"} />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Testimonials;
