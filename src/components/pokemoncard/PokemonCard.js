import React from 'react';
import PokemonDetails from '../pokemondetails/PokemonDetails';
import {Link, Route, Switch} from 'react-router-dom';
import './pokemoncard.css';

class PokemonCard extends React.Component {
	render() {
		const pokemon = this.props.list;
		return (
			<div className="pokemon__card">
				<Link className="link" to={`/pokemoncard/${pokemon.id}`}>
					<p className="pokemon__id">#{pokemon.id.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
					<img className="pokemon__picture" src={pokemon.sprites.front_default}
						alt={pokemon.name}/>
					<p className="pokemon__name">{pokemon.name}</p>
					<div className="pokemon__type">
						{pokemon.types.map((type, i) =>
							<span className={`box box--${pokemon.types[i].type.name.toLowerCase()}`} key={i}> {pokemon.types[i].type.name} </span>
						)}
					</div>
					<div className="pokemon__evolution" >
						<span className="evolution__title">{pokemon.evolutionPokemon? `Evolves from: `: ''}  </span>
						<span className="evolution">{pokemon.evolutionPokemon? `${pokemon.evolutionPokemon}`: ''}  </span>
					</div>
				</Link>

				<Switch>
					<Route exact path={`/pokemoncard/${pokemon.id}`} render = {() =>
						<PokemonDetails
							pokemon = {pokemon}
						/> } />
				</Switch>

			</div>
		);
	}
}

export default PokemonCard;
