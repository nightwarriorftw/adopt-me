import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No results found !!</h1>
      ) : (
        pets.map(pet => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            breed={pet.breed}
            name={pet.name}
            media={pet.photos}
            location={`${pet.contact.city} ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
