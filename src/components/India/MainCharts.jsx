import React from "react";
import { Doughnut } from "react-chartjs-2";
import styles from "./statespicker.module.css";

const MainCharts = ({
  data: { active, confirmed, deaths, recovered },
  stateData,
}) => {
  // console.log(active, confirmed, deaths, recovered);
  // console.log(stateData);

  //for showing INDIA'S total cases
  const doughnut = (
    <Doughnut
      data={{
        labels: [
          `Active`,
          `Confimred`,
          `Deaths`,
          `Recovered`,
        ],
        datasets: [
          {
            label: "CoVid_India",
            backgroundColor: [
              "rgb(204,0,0)",
              "rgb(51,174,139)",
              "rgb(37,37,37)",
              "rgb(52,152,219)",
            ],
            data: [active, confirmed, deaths, recovered],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: `Total Cases in India: ${confirmed}`,
          fontSize: 15,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );

  return (
    <div className={styles.chartContainer}>
      <div className={styles.indiaChart}>{active ? doughnut : null}</div>
    </div>
  );
};

export default MainCharts;
