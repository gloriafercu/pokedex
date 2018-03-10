import React from 'react';

class PokemonCard extends React.Component{
	render() {
		return (
			<div className="pokemon__card">

				<p className="pokemon__id">#Id. {this.props.idPokemon}</p>
				<img className="pokemon__picture" src={this.props.picture} alt="pokemon"/>
				<p className="pokemon__name">{this.props.namePokemon}</p>
				<div className="pokemon__type">
					{this.props.attack.map((type, i) =>
						<span className={`box box--${this.props.attack[i].type.name.toLowerCase()}`} key={i}> {this.props.attack[i].type.name} </span>
					)}
				</div>
			</div>
		);
	}
}

 export default PokemonCard;
