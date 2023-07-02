import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectGallery = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleProjectData &&
        singleProjectData.map((project) =>
          project.img.map((item) => (
            <div className="mb-10 sm:mb-0" key={project.id}>
              <img
                src={item}
                className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                alt={item}
              />
            </div>
          ))
        )}
    </div>
  );
};

export default ProjectGallery;
