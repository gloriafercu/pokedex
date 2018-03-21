import React from 'react';
import PokemonCard from '../pokemoncard/PokemonCard';
import './pokemonlist.css';

class PokemonList extends React.Component{
	render() {
		return (
			<section className="pokedex">
				<ul className="pokemon__list">
					{ this.props.monster.map((list, index) =>
						<li className="pokemon__list--li" key={index}>
							<PokemonCard
								list = {list}
							/>
						</li>)
					}
				</ul>
			</section>
		);
	}
}

export default PokemonList;
