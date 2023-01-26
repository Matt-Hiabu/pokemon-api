import React,{ useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(()=> {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => response.json())
      
    .then(response => setPokemon(response.results))
    .catch((err) => {
      console.log(err);
    })
  },[])

  return (
    <div className="App" style={{ width: "200px", margin: "auto" }}>
      <ul>
      {
          pokemon.map((pokemonList, index)=>{
            return (<li key={index}>{pokemonList.name}</li>)
          })
        }
      </ul>
    </div>
  );
}
export default App;
