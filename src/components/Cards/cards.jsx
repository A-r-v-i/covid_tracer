import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cNames from "classnames";

import styles from "./cards.module.css";

const countUp = (endValue) => {
  return <CountUp start={0} end={endValue} separator="," />;
};

const updatedDate = (lastDate) => {
  return new Date(lastDate).toDateString();
};

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading.....";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cNames(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Confirmed
            </Typography>
            <Typography variant="h5">{countUp(confirmed.value)}</Typography>
            <Typography color="textSecondary">
              {updatedDate(lastUpdate)}
            </Typography>
            <Typography variant="body2">
              Total confirmed cases for COVID-19
            </Typography>
            <img className={styles.card_icon} src="https://img.icons8.com/plasticine/60/000000/hospital-room.png" alt="confirmed"  />
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cNames(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">{countUp(recovered.value)}</Typography>
            <Typography color="textSecondary">
              {updatedDate(lastUpdate)}
            </Typography>
            <Typography variant="body2">
              Total recovered lives for COVID-19
            </Typography>
            <img className={styles.card_icon} src="https://img.icons8.com/doodle/60/000000/man-with-flower.png" alt="recovered" />
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cNames(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">{countUp(deaths.value)}</Typography>
            <Typography color="textSecondary">
              {updatedDate(lastUpdate)}
            </Typography>
            <Typography variant="body2">
              Total no. of deaths for COVID-19
            </Typography>
            <img className={styles.card_icon} src="https://img.icons8.com/color/60/000000/death.png" alt="died" />
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
