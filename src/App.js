import React, { useState, lazy, Suspense } from "react";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Navbar from './Navbar';

import Details from './Details';
import SearchParams from './SearchParams';

const App = () => {
  const themeHook = useState("blue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
