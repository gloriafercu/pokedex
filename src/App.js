import React from 'react';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import Search from './components/Search';

import './main.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			pokemonArray: [],
			valueInput: ''
		};
	}
	componentDidMount() {
		let totalPokemon = [];
		for (let i=1; i<= 25; i++) {
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
		// console.log('pokemonArray: ', totalPokemon);
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
			<div className="App">
				<Header />
				<main className="wrapper">
					<Search changeInput = {this.handleOnChange}/>
					{ this.printPokemons() }
				</main>
			</div>
		);
	}
}

export default App;
