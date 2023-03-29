function PokemonCard({ name, imgSrc }) {
  // const pokemon = pokemonList[0];
  if (imgSrc) {
    return (
      <figure className="card">
        <img src={imgSrc} alt={name} className="card-img" />
        <figcaption>{name}</figcaption>
      </figure>
    );
  } else {
    return (
      <div>
        <p>???</p>
        <figcaption>{name}</figcaption>
      </div>
    );
  }
}

export default PokemonCard;
