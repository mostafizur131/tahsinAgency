import AllProjects from "@/components/AllProjects";
import Slug from "@/components/Slug";
import Subscribe from "@/components/Subscribe";
import React from "react";

const Projects = () => {
  return (
    <div>
      <Slug title={"All Project"} />
      <AllProjects />
      <Subscribe />
    </div>
  );
};

export default Projects;
