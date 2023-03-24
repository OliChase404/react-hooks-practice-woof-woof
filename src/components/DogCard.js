import React from "react";

function DogCard({dog}){

    return(
        <div>
            <h2>{dog.name}</h2>
            <img alt={dog.name} src={dog.image}></img>
            <p>{dog.name} {dog.isGoodDog ? 'is' : 'is not'} a good dog.</p>
        </div>
    )
}

export default DogCard