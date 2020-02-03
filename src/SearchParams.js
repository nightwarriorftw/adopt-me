import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';
import Pet from "./Pet";

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animals", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds);
    const [pets, setPets] = useState([])

    // Always return an promise
    // Its like wait for the response and give me back the data
    async function requestPet() {

        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        });

        setPets(animals || []);
    }



    // This runs after the page renders the first time.
    // Its like a Promise()
    // With useEffect you have to declare your dependencies
    useEffect(() => {

        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedString = apiBreeds.map(({ name }) => name);
            setBreeds(breedString);
        }, console.error);
    }, [animal, setBreeds, setBreed]);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={ (e) => {
                e.preventDefault();
                requestPet();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location}
                        placeholder="location" onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Search</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;
