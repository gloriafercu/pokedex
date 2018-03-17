import React from 'react';

class PokemonCard extends React.Component{
	render() {
		return (
			<article className="pokemon__card">
				<p className="pokemon__id">#{this.props.idPokemon.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
				<img className="pokemon__picture" src={this.props.picture}
					alt={this.props.namePokemon}/>
				<p className="pokemon__name">{this.props.namePokemon}</p>
				<div className="pokemon__type">
					{this.props.attack.map((type, i) =>
						<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
					)}
				</div>
			</article>
		);
	}
}

export default PokemonCard;
