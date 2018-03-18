import React from 'react';

class PokemonCard extends React.Component {
	render() {
		return (
			<div className="pokemon__card">
				<p className="pokemon__id">#{this.props.idPokemon.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
				<img className="pokemon__picture" src={this.props.picture1}
					alt={this.props.namePokemon}/>

				<img className="pokemon__picture" src={this.props.picture2}
					alt={this.props.namePokemon}/>

				<img className="pokemon__picture" src={this.props.picture3}
					alt={this.props.namePokemon}/>

				<img className="pokemon__picture" src={this.props.picture4}
					alt={this.props.namePokemon}/>

				<p className="pokemon__name">{this.props.namePokemon}</p>
				<div className="pokemon__type">
					{this.props.attack.map((type, i) =>
						<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
					)}
				</div>
				<p className="pokemon__weight">Weitht: {this.props.weightPokemon}</p>
				<p className="pokemon__height">Height: {this.props.heightPokemon}</p>
				<div className="pokemon__abilities">
					{this.props.skills.map((ability, i) =>
						<span className="ability" key={i}>Abilities: {this.props.skills[i].ability.name} </span>)}
				</div>
				<div className="pokemon__evolution" >
					<span className="evolution">{this.props.evolutionPokemon? `Evolves from: ${this.props.evolutionPokemon}`: ''}  </span>
				</div>
			</div>
		);
	}
}

export default PokemonCard;
