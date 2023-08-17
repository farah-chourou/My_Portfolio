import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function AppSkills() {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            My Skills
          </p>

          <Grid container spacing={6} justify="center" alignItems="center">
            <Grid item xs={3} sm={3} md={1.5}>
              <img src={spring} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={node} alt="spring boot" />{" "}
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={reactImg} alt="spring boot" />{" "}
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={reduxImg} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={flutterImg} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={androidImg} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={jsImg} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={javaImg} alt="spring boot" />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={mongoImg} alt="spring boot" />
            </Grid>
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={firebaseImg} alt="FireBase" />
            </Grid>{" "}
            <Grid item xs={3} sm={1} md={1.5}>
              <img src={mysqlImg} alt="Mysql" />
            </Grid>
            <Grid item xs={false} />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AppSkills;
