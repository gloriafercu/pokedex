import React from 'react';
import PokemonList from './PokemonList';
import Search from './Search';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			pokemonArray: [],
			valueInput: '',
		};
	}
	componentDidMount() {
		let totalPokemon = [];
		for (let i=1; i<= 3; i++) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
			.then(response => response.json())
			.then(details => {
				fetch(details.species.url)
				.then(response => response.json())
				.then((evolution)=> {
					if (evolution.evolves_from_species != null) {
						details.evolutionName = evolution.evolves_from_species.name;
					}
					totalPokemon.push(details);
					this.setState({
						pokemonArray: totalPokemon
					});
				});
			})
		}
		console.log('pokemonArray: ', totalPokemon);
	}

	handleOnChange(e) {
		const valueToShow = e.target.value.toLowerCase();
		this.setState({
			valueInput: valueToShow
		});
	}

	printPokemons() {
		const listPokemons = this.state.pokemonArray.filter(item => item.name.toLowerCase().includes(this.state.valueInput)).sort((a,b) => a.id-b.id);
		return (
			<div>
				<PokemonList
					monster = {listPokemons}
				/>
			</div>
		);
	}

	render() {
		return (
			<section className="search">
				<Search changeInput = {this.handleOnChange}/>
				{ this.printPokemons() }
			</section>
		);
	}
}

export default Home;
