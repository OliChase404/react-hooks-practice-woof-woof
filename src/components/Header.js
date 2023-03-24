import React from "react";

function Header({setGoodDogFilter, goodDogFilter, dogs, setSelectedDog}){

  const displayDogNames = dogs.map((d) => <span key={d.id} onClick={() => setSelectedDog(d)}>{d.name}</span> )

    return(
      <div>
        <div id="filter-div">
          <button onClick={() => setGoodDogFilter((prev) => !prev)} id="good-dog-filter">Filter good dogs: {goodDogFilter ? 'On' : 'OFF'}</button>
        </div>
          <div id="dog-bar">{displayDogNames}</div>
      </div>
    )
}

export default Header