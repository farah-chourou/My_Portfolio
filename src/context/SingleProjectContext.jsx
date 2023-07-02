import { useState, createContext } from "react";
import { singleProjectData as singleProjectDataJson } from "../data/singleProjectData";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projects";

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
  const { id } = useParams();
  const filtredData = projectsData.filter((item) => item.id === parseInt(id));

  const [singleProjectData, setSingleProjectData] = useState(filtredData);

  return (
    <SingleProjectContext.Provider
      value={{ singleProjectData, setSingleProjectData }}
    >
      {children} {console.log(filtredData)}
    </SingleProjectContext.Provider>
  );
};

export default SingleProjectContext;
