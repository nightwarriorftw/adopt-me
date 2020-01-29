import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="something">Adopt me</h1>
      <Pet name="Luna" animal="Dog" breed="Mixed" />
      <Pet name="Peeper" animal="Bird" breed="Stanlee" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  )
};

render(<App />, document.getElementById("root"));
