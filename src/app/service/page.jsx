import Services from "@/components/Services";
import Slug from "@/components/Slug";
import Subscribe from "@/components/Subscribe";
import React from "react";

const Service = () => {
  return (
    <div>
      <Slug title={"Our Services"} />
      <Services />
      <Subscribe />
    </div>
  );
};

export default Service;
