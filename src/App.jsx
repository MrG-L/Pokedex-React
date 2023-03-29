import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'charmander',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'squirtle',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    name: 'pikachu',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    name: 'mew',
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const decrement = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };
  const increment = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
      <button onClick={decrement}>Précédent</button>
      <button onClick={increment}>Suivant</button>
    </div>
  );
}

export default App;

// function App() {
//   const [user, setUser] = useState({name: "Bob"});

//   const handleClick = () => {
//     setUser({name: "Alice"})
//   }

//   return (<div>
//     <p>{user.name}</p>
//     <button onClick={handleClick}>Click</button>
//   </div>);
