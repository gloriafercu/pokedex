import React from 'react';
import App from './../../app/App';
import {Link, Route, Switch} from 'react-router-dom';
import './pokemondetails.css';

class PokemonDetails extends React.Component{
	render() {
		const pokemon = this.props.pokemon;
		return (
			<section className="pokemon__details">
				<div className="pokemon__details__background">
					<div className="pokemon__details__card">
						<Link className="link btn" to='/'>
							<div className="button--close"><span className="btn-x">X</span></div>
						</Link>
						<Switch>
							<Route exact path="/" component={App} />
						</Switch>

						<div className="info">
							<div className="cover">
								<img className="front_default" src={pokemon.sprites.front_default} alt={pokemon.name} />
								<span className="details__id">#{pokemon.id.toLocaleString('en-US', {minimumIntegerDigits: 2})}</span>
							</div>

							<div className="picture">
								<img className=" back_default" src={pokemon.sprites.back_default} alt={pokemon.name} />
							</div>
							<div className="picture">
								<img className="front_shiny" src={pokemon.sprites.front_shiny} alt={pokemon.name} />
							</div>
							<div className="picture">
								<img className="back_shiny" src={pokemon.sprites.back_shiny} alt={pokemon.name} />
							</div>
							<div className="info__details">
								<p className="pokemon__name__details">{pokemon.name}</p>
								<div className="pokemon__type__details">
									{pokemon.types.map((type, i) =>
										<span className={`box__details box--${pokemon.types[i].type.name.toLowerCase()}`} key={i}> {pokemon.types[i].type.name} </span>
									)}
								</div>
								<div className="info__card">
									<div className="pokemon__abilities">
										<span className="abilities__title">Abilities: </span>
										{pokemon.abilities.map((ability, i) =>
											<span className="ability" key={i}>{pokemon.abilities[i].ability.name} </span>)}
									</div>
									<div className="pokemon__weight">
										<span className="weight__title">Weight: </span>
										<span className="weight__detail">{pokemon.weight/10} kg</span>
									</div>
									<div className="pokemon__height">
										<span className="height__title">Height: </span>
										<span className="height__detail">
											{pokemon.height/10} m
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PokemonDetails;
