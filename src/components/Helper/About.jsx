import React from "react";
import styles from "./helper.module.css";

const gitUrl = "https://github.com/A-r-v-i/covid_tracer";

const About = () => {
  return (
    <div className={styles.about_wrapper}>
      <div className={styles.about}>
        <p>Hi Connections, this site is an open-source project.</p>
        <p>
          Its an unofficial project, so all the datas are collected from
          crowd-sourced team and external secured API.
        </p>
        <hr />
        <p>
          If you wanna join and enhance this project, you are always welcome.
        </p>
        <hr />
        <p>
          Since the API datas are unofficial from various developers around the
          world, <br />
          so there is slight variations in the data. Forgive us for that.
        </p>
        <code>
          All States and Districts data updated now. You can check that in
          "India Data"
        </code>
        <p>Thank you.</p>
        <code>
          <strong>
            #stay_home{" "}
            <img
              className={styles.love}
              src="https://img.icons8.com/fluent/30/000000/filled-like.png"
              alt="love"
            />{" "}
            #stay_safe{" "}
          </strong>
        </code>
        <hr />
        <br />
        <code>
          Check the link to access the GitHub Repo:{" "}
          <a href={gitUrl}>Git Here!</a>
        </code>
        <hr />
        <code>API credits to</code>
        <br /> <cite>https://api.covid19india.org/</cite> &{" "}
        <cite>https://covid19.mathdro.id/</cite>
      </div>
    </div>
  );
};

export default About;
