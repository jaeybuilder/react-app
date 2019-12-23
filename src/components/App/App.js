import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

/** Views components */
import HomePage from "../../pages/Home/Home";
import GamesPage from "../../pages/Games/Games";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route component={HomePage} exact path="/" name="Home" />
          <Route component={GamesPage} exact path="/games" name="Games" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
