function PokemonCard() {
  const pokemon = pokemonList[0];
  if (pokemon)
    return (
      <figure className="card">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="bulbasaur"
          className="card-img"
        />
        <figcaption>Bulbasaur</figcaption>
      </figure>
    );
}

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'mew',
  },
];

export default PokemonCard;
