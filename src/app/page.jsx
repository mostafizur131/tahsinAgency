import Featured from "@/components/Featured";
import HeroBg from "@/components/HeroBg";
import Stats from "@/components/Stats";
import WorkList from "@/components/WorkList";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroBg />
      <WorkList />
      <Stats />
      <Featured />
    </div>
  );
};

export default Home;
