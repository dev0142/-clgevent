import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
