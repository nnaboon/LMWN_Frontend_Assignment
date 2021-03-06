/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { jsx } from "@emotion/react";
import { LandingPage } from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
