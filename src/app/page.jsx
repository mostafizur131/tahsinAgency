import Featured from "@/components/Featured";
import HeroBg from "@/components/HeroBg";
import Stats from "@/components/Stats";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroBg />
      <WorkList />
      <Stats />
      <Featured />
      <Subscribe />
    </div>
  );
};

export default Home;
