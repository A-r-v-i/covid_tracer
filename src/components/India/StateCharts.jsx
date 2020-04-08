import React from "react";

import { Bar } from "react-chartjs-2";
import styles from "./statespicker.module.css";

const StateCharts = ({ stateData }) => {
  //console.log(stateData);

  const details = stateData ? (
    <>
      <h5>
        Total active cases in {stateData.state}:{stateData.active}
      </h5>
      <code>Last Updated on: {stateData.lastupdatedtime}</code>
    </>
  ) : null;
  //to display state datas
  const barChart = stateData ? (
    <Bar
      data={{
        labels: ["Infected", "Active", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(204,0,0)",
              "rgb(51,174,139)",
              "rgb(52,152,219)",
              "rgb(37,37,37)",
            ],
            data: [
              stateData.confirmed,
              stateData.active,
              stateData.recovered,
              stateData.deaths,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current numbers in ${stateData.state}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.stateChartContainer}>
      {stateData ? <div className={styles.stateDetails}>{details}</div> : null}
      {stateData ? barChart : null}
    </div>
  );
};

export default StateCharts;
