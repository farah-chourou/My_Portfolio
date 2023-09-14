import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Tooltip from "@mui/material/Tooltip"; // Import Tooltip from MUI
import spring from "../../images/skills/spring.png";
import node from "../../images/skills/node.png";
import reactImg from "../../images/skills/react.png";
import reduxImg from "../../images/skills/redux.png";
import flutterImg from "../../images/skills/flutter.png";
import androidImg from "../../images/skills/android.png";
import jsImg from "../../images/skills/js.png";
import javaImg from "../../images/skills/java.png";
import mongoImg from "../../images/skills/mongo.png";
import firebaseImg from "../../images/skills/fireBase.png";
import mysqlImg from "../../images/skills/mysql.png";
import docker from "../../images/skills/docker.png";
import github from "../../images/skills/github.png";
import Next from "../../images/skills/Nextjs.png";

const SkillImage = styled(motion.img)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "" : "",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  //  color: theme.palette.text.secondary,
  width: "100%", // Set a fixed width for the skills
  height: "auto", // Maintain aspect ratio
  cursor: "pointer", // Add a pointer cursor on hover
  transition: "filter 0.3s", // Add transition for the filter property
  "&:hover": {
    filter: "drop-shadow(0px 0px 10px rgba(0, 0, 255, 0.5))", // Blue shadow on hover
  },
}));

const skills = [
  { imgSrc: spring, altText: "Spring Boot" },
  { imgSrc: node, altText: "Node.js" },
  { imgSrc: reactImg, altText: "React" },
  { imgSrc: Next, altText: "Next.js" },
  { imgSrc: reduxImg, altText: "Redux" },
  { imgSrc: flutterImg, altText: "Flutter" },
  { imgSrc: androidImg, altText: "Android" },
  { imgSrc: jsImg, altText: "JavaScript" },
  { imgSrc: javaImg, altText: "Java" },
  { imgSrc: mongoImg, altText: "MongoDB" },
  { imgSrc: firebaseImg, altText: "Firebase" },
  { imgSrc: mysqlImg, altText: "MySQL" },
  { imgSrc: docker, altText: "Docker" },
  { imgSrc: github, altText: "GitHub" },
];

function AppSkills() {
  const skillVariants = {
    hover: {
      scale: 1.2,
    },
  };

  return (
    <div className="justify-center ">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-primary-light dark:border-secondary-dark">
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5 section-title">
            My Skills
          </p>

          <Grid container spacing={2} justify="center" alignItems="center">
            {skills.map((skill, index) => (
              <Grid item key={index} xs={2} sm={2} md={1}>
                <motion.div
                  variants={skillVariants}
                  whileHover="hover"
                  initial="rest"
                >
                  <Tooltip title={skill.altText} arrow>
                    <SkillImage
                      src={skill.imgSrc}
                      alt={skill.altText}
                      whileHover="hover"
                      initial="rest"
                      loading="lazy"
                    />
                  </Tooltip>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AppSkills;
