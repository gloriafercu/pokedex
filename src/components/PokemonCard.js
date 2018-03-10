import React from 'react';

class PokemonCard extends React.Component{
	render() {
		return (

			<div className="pokemon__card">
				<p className="pokemon__name">{this.props.namePokemon}</p>
				<p className="pokemon__id">{this.props.idPokemon}</p>
				<img src={this.props.picture} alt="pokemon"/>
				<div className="pokemon__type">
					{this.props.attack.map((type, i) =>
						<span key={i}> {this.props.attack[i].type.name} </span>
					)}
				</div>
			</div>



		);
	}
}

 export default PokemonCard;
