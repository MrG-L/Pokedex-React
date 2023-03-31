import React from 'react';

function NavBar({ nomDuPokemon, indexDuPokemon, setStateDuPokemon }) {
  // const decrement = () => {
  //   setPokemonIndex(pokemonIndex - 1);
  // };

  const nomTab = () => {
    setStateDuPokemon(indexDuPokemon);
  };

  return (
    <div className="bouton">
      {/* {pokemonIndex > 0 ? <button onClick={decrement}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={increment}>Suivant</button>
      ) : null} */}
      <button onClick={nomTab}> {nomDuPokemon}</button>
    </div>
  );
}

export default NavBar;
