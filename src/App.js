import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import NavBar from "./components/Reusable/Navbar";
import States from "./components/India/States.jsx";
import About from "./components/Helper/About.jsx";
import coronaimage from "./images/image.png";
import styles from "./app.module.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar />
        <div className={styles.main_container}>
          <img className={styles.image} src={coronaimage} alt="COVID" />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/states" component={States} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    );
  }
}
