import React, { useEffect, useState } from "react";
import Header from "./Header";
import DogContainer from "./DogContainer";

function App() {

  const [dogs, setDogs] = useState([])
  const [goodDogFilter, setGoodDogFilter] = useState(false)
  const [selectedDog, setSelectedDog] = useState({       
  id: 1,
  name: "Mr. Bonkers",
  isGoodDog: true,
  image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
})
  
  
  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((resp) => resp.json())
    .then((dogData) => {
      setDogs(dogData)
    })
  }, [])
  
  
  console.log(selectedDog)
  function filterDogs(){
    if(goodDogFilter){
      return dogs.filter((d) => d.isGoodDog)
    } else {return dogs}
  }
  
  
  return (
    <div className="App">
      <Header setSelectedDog={setSelectedDog} dogs={filterDogs()} goodDogFilter={goodDogFilter} setGoodDogFilter={setGoodDogFilter} />
      <DogContainer setSelectedDog={setSelectedDog} setDogs={setDogs} selectedDog={selectedDog} />

      

    </div>
  );
}

export default App;
