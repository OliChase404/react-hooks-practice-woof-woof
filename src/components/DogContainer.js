import React from "react";
import DogCard from "./DogCard";

function DogContainer({ selectedDog, setDogs, setSelectedDog }) {


  function toggleDogGoodness(dog) {
    fetch(`http://localhost:3001/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        isGoodDog: !dog.isGoodDog,
      }),
    })
      .then((resp) => resp.json())
      .then((dogData) => {
        setDogs((prev) => prev.map((d) => (d.id === dogData.id ? dogData : d)))
        setSelectedDog(dogData)
      }
      );
  }

  if (selectedDog !== undefined) {
    return (
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogCard key={selectedDog.id} dog={selectedDog} />
        <button onClick={() => toggleDogGoodness(selectedDog)}>
          {selectedDog.isGoodDog ? "Bad Dog!" : "Good Dog!"}
        </button>

        <div id="dog-info"></div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DogContainer;
