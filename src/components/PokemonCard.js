import React from 'react';
import PokemonDetails from './PokemonDetails';
import {Link, Route, Switch} from 'react-router-dom';

class PokemonCard extends React.Component {
	render() {
		return (
			<div className="pokemon__card">
				<Link className="link" to={`/pokemoncard/${this.props.idPokemon}`}>
					<p className="pokemon__id">#{this.props.idPokemon.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
					<img className="pokemon__picture" src={this.props.picture1}
						alt={this.props.namePokemon}/>
					<p className="pokemon__name">{this.props.namePokemon}</p>
					<div className="pokemon__type">
						{this.props.attack.map((type, i) =>
							<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
						)}
					</div>
					<div className="pokemon__evolution" >
						<span className="evolution__title">{this.props.evolutionPokemon? `Evolves from: `: ''}  </span>
						<span className="evolution">{this.props.evolutionPokemon? `${this.props.evolutionPokemon}`: ''}  </span>
					</div>
				</Link>

				<Switch>
					<Route exact path={`/pokemoncard/${this.props.idPokemon}`} render = {() =>
						<PokemonDetails
							nameDetails={this.props.namePokemon}
							idDetails={this.props.idPokemon}
							imgFrontD={this.props.picture1}
							imgBackD={this.props.picture2}
							imgFrontS={this.props.picture3}
							imgBackS={this.props.picture4}
							attackDetails={this.props.attack}
							weightDetails={this.props.weightPokemon}
							heightDetails={this.props.heightPokemon}
							skillsDetails={this.props.skills}
						/> } />
				</Switch>

			</div>
		);
	}
}

export default PokemonCard;
