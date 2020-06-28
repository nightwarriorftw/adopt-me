import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet';
import SearchParams from '../SearchParams';

afterEach(cleanup);

test("SearchParams", async () => {
    const { container, getByTestId, getByText } = render(<SearchParams />)

    const animalDropdown = getByTestId("use-dropdown-animal");
    expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);

    // expect(pet.breeds).toHaveBeenCalled();
    // const breedDropDown = getByTestId('use-dropdown-breed');
    // expect(breedDropDown.children.length).toEqual(_breeds.length+1); 

    const searchResults = getByTestId('search-results');
    expect(searchResult.textContent).toEqual('No Pets Found');
    fireEvent(getByText("Submit"), new MouseEvent("click"));
    expect(pet.animals).toHaveBeenCalled();
    expect(searchResults.children.length).toEqual(_dogs.length);
});
 