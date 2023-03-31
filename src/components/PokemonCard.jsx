import PropTypes from 'prop-types';
import React from 'react';

function PokemonCard({ name, imgSrc }) {
  return imgSrc ? (
    <figure className="card">
      <img src={imgSrc} alt={name} className="card-img" />
      <figcaption>{name}</figcaption>
    </figure>
  ) : (
    <div>
      <p>???</p>
      <figcaption>{name}</figcaption>
    </div>
  );
}

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

export default PokemonCard;
