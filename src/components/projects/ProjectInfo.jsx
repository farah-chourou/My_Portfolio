import { useContext } from "react";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectInfo = () => {
  const { singleProjectData } = useContext(SingleProjectContext);

  return (
    <div>
      {singleProjectData.map((item) => (
        <div className="block sm:flex gap-0 sm:gap-10 mt-14">
          <div className="w-full sm:w-1/3 text-left">
            {/* Single project client details */}
            <div className="mb-7">
              <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
                About Project
              </p>
              <ul className="leading-loose">
                <li className="font-general-regular text-ternary-dark dark:text-ternary-light">
                  <span>Type: </span>
                  <span
                    /*className={
                          info.title === "Website" || info.title === "Phone"
                            ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                            : ""
      }*/
                    aria-label="Project Website and Phone"
                  >
                    {item.about.type}
                  </span>
                </li>
                <li className="font-general-regular text-ternary-dark dark:text-ternary-light">
                  <span>Services : </span>
                  <span>{item.about.services}</span>
                </li>{" "}
                {item.about.demo && item.about.demo != "" ? (
                  <li className="font-general-regular text-ternary-dark dark:text-ternary-light">
                    <span>Demo : </span>
                    <span className="underline decoration-blue-500 decoration-2 text-indigo-500 hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300">
                      {item.about.demo}
                    </span>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>

            {/* Single project objectives */}
            {/*  <div className="mb-7">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Objective
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {item.objective}
              </p>
            </div>
    */}
            {/* Single project technologies */}
            <div className="mb-7">
              <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
                Tools & Technologies
              </p>
              <p className="font-general-regular text-primary-dark dark:text-ternary-light">
                {item.about.technologiesDetails.map((tech) => tech).join(", ")}
              </p>
            </div>
          </div>

          {/*  Single project right section */}
          <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
            <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
              Objective
            </p>
            {item.description.map((details) => {
              return (
                <p
                  key={details}
                  className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
                >
                  {details}
                </p>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectInfo;
