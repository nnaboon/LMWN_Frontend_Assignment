/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { css, jsx } from "@emotion/react";
import { LandingPage } from "./pages/Landing";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
