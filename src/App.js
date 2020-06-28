import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Navbar from './Navbar';
import {Provider } from 'react-redux';
import store from './store';

// Dynamic import with lazy
const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

const App = () => {
  const themeHook = useState("blue");
  return (
    <Provider store={store}>
        <div>
          <Navbar />
          <Suspense fallback={<h1>Loading routes ...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
