import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";

const ProjectSingle = ({ title, category, image, technologies, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      {" "}
      {console.log(id)}
      <Link to={`/projects/${id}/single-project`} aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image[0]}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
            <br></br>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {technologies &&
                technologies.map((item) => (
                  <Chip
                    className="text-lg text-ternary-dark dark:text-ternary-light"
                    label={item}
                    size="small"
                    variant="outlined"
                    sx={{ marginRight: 1, marginTop: 2 }}
                  />
                ))}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
