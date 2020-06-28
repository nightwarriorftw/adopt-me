import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import { connect } from 'react-redux';
import changeLocation from './actions/locations';
import changeTheme from './actions/theme';

const SearchComponent = (props) => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropDown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedsDropDown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useState('blue')

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }
  // Handling async class in react
  // It will run after the render happens

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    }, console.error);
  }, [animal]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>

        <AnimalDropDown />
        <BreedsDropDown />

        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="violet">Violet</option>
            <option value="red">Red</option>
            <option value="peru">Peru</option>
            <option value="blue">Blue</option>
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchComponent;

// const mapStateToProps = ({theme, location}) => ({
//   theme,
//   location,
// });

// const mapDispatchToProps = dispatch => ({
//   setLocation: location =>  dispatch(changeLocation(location)),
//   setTheme: theme => dispatch(changeTheme(theme))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);
