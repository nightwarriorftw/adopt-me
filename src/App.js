import React from "react";
import { render } from "react-dom";
import SearchParams from './SearchParams';
import Details from './Details';
import { Router, Link } from '@reach/router';

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt me</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
