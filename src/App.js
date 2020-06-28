import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import Navbar from './Navbar';


// Dynamic import with lazy
const Details = lazy(() => import('./Details'));

const App = () => {
  const themeHook = useState("blue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Navbar />
          <Suspense fallback={<h1>Loading routes ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
