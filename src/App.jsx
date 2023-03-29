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
  const handleClick = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Précédent</button>
      <PokemonCard name={pokemonList[0].name} imgSrc={pokemonList[0].imgSrc} />
      <button onClick={handleClick}>Suivant</button>
    </div>
  );
}

export default App;

// const [count, setCount] = useState(0);

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   return (<div>
//     <p>{count}</p>
//     <button onClick={handleClick}>Click</button>
//   </div>);
