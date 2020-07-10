import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../util/data";

import styles from "./charts.module.css";

const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchDataAPI = async () => {
      const initialData = await fetchDailyData();
      setDailyData(initialData);
    };
    fetchDataAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(204,0,0)",
              "rgb(51,174,139)",
              "rgb(37,37,37)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current numbers in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#cc0000",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "#252525",
            backgroundColor: "##363636",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className={styles.container}>
      <span className={styles.countryIcon}>
        {country ? (
          <img
            src={`https://www.countryflags.io/${country}/flat/64.png`}
            alt="countryIcon"
          />
        ) : <img className={styles.globe} src="https://img.icons8.com/fluent/64/000000/globe.png" alt="globe" />}
      </span>
      {country ? barChart : lineChart}
    </div>
  );
};
export default Charts;
