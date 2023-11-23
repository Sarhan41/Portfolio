import { projects } from "@/constants";
import Card from "./Card";
import { useState } from "react";



const ProjectCards = () => {
  return (
    <div className="mt-20 flex flex-wrap gap-7"
    >
      {projects.map((project, index) => (
        <Card key={`project-${index}`} index={index} {...project} />
      ))}
     
    </div>
  );
};

export default ProjectCards;
