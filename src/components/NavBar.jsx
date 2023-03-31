import React from 'react';

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
  const decrement = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const increment = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={decrement}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={increment}>Suivant</button>
      ) : null}
    </div>
  );
}

export default NavBar;
