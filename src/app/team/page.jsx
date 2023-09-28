import React from "react";
import Slug from "@/components/Slug";
import Subscribe from "@/components/Subscribe";
import TeamList from "@/components/TeamList";

const Team = () => {
  return (
    <>
      <Slug title={"Team"} />
      <TeamList />
      <Subscribe />
    </>
  );
};

export default Team;
