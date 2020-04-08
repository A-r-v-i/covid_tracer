import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import States from "./components/India/States.jsx";
import About from "./components/Helper/About.jsx";
import coronaimage from "./images/image.png";
import styles from "./app.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Global Data</Link>
          <Link to="/states">India Data</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar />
        <img className={styles.image} src={coronaimage} alt="COVID" />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/states" component={States} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}
