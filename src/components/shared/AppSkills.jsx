import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
            <Grid item xs={1.5}>
              <img src="images/skills/spring.png" alt="spring boot" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/node.png" alt="spring boot" />{" "}
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/react.png" alt="spring boot" />{" "}
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/redux.png" alt="spring boot" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/flutter.png" alt="spring boot" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/android.png" alt="spring boot" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/js.png" alt="spring boot" />
            </Grid>
            <Grid item xs={1.5}>
              <img src="images/skills/java.png" alt="spring boot" />
            </Grid>
          </Grid>
          <Grid container spacing={6} justify="center" alignItems="center">
            <Grid item xs={2}>
              <img src="images/skills/mongo.png" alt="spring boot" />
            </Grid>
            <Grid item xs={2}>
              <img src="images/skills/fireBase.png" alt="FireBase" />
            </Grid>{" "}
            <Grid item xs={2}>
              <img src="images/skills/mysql.png" alt="Mysql" />
            </Grid>
            <Grid item xs={false} />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default AppSkills;
