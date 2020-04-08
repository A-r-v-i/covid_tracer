import React from 'react';
import styles from './helper.module.css';

const gitUrl = "https://github.com/A-r-v-i/covid_tracer";

const About = () => {
  return (
    <div className={styles.about}>
      <h4>Hi Connections, this site is an open-source project.</h4>
      <h3>Its an unofficial project, so all the datas are collected from <br />
      crowd-sourced team and external secured API.</h3><hr />
      <h3>If you wanna join and enhance this project, you are always welcome.</h3>
      <hr />
      <h3>Since the API datas are unofficial from various developers around the world, <br />
      so there is slight variations in the data. Forgive us for that.</h3>

      <code>All States and Districts data updated now. You can check that in "India Data"</code>
      <h4>Thank you.</h4>

      <code><strong>#stay_home | #stay_safe </strong></code>
      <hr />
      <br />
      <code>Check the link to access the GitHub Repo: <a href={gitUrl}>Git Here!</a></code>
      <hr />
      <code>API credits to</code><br /> <cite>https://api.covid19india.org/</cite> & <cite>https://covid19.mathdro.id/</cite>
    </div>
  )
}

export default About;