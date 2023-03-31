import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

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
    imgSrc:
      'https://archives.bulbagarden.net/media/upload/thumb/9/9a/0151Mew.png/375px-0151Mew.png',
  },
];

function pokemon(name) {
  <div> {pokemonList.map((pokemon) => (
          <button>{pokemonList[pokemonIndex].name}</button>)
  </div>
}

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div>
      <PokemonCard
        name={pokemonList[pokemonIndex].name}
        imgSrc={pokemonList[pokemonIndex].imgSrc}
      />
    </div>
  );
}

export default App;
