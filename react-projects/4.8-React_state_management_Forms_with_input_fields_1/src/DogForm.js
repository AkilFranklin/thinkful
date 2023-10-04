import React, { useState } from "react";

function DogForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const handleNameChange = (event) => setName(event.target.value);
    const handleBreedChange = (event) => setBreed(event.target.value);
    const handleAgeChange = (event) => setAge(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, breed, age);
        setName("");
        setBreed("");
        setAge("");
      };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Dog Name:
                <input name="name" type="text" id="name" onChange={handleNameChange} value={name}></input>
            </label>
            <label htmlFor="breed">
                Breed:
                <input name="breed" type="text" id="breed" onChange={handleBreedChange} value={breed}></input>
            </label>
            <label htmlFor="age">
                Age:
            <input name="age" type="text" id="age" onChange={handleAgeChange} value={age}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default DogForm;
