import React from 'react';
import PokemonList from './components/PokemonList';
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
		let pokemonArray = [];
		for (let i=1; i<= 5 ; i++) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
			.then(response => response.json())
			.then(json => {
				const pokemonObject = json;
				pokemonArray.push(pokemonObject);
				console.log('pokemonObject: ', pokemonObject);
				this.setState({
					pokemonArray: pokemonArray
				});
			});
		};
		console.log('pokemonArray: ', pokemonArray);
	}

	handleOnChange(e) {
		const valueToShow = e.target.value.toLowerCase();
		this.setState({
			valueInput: valueToShow
		});
	}

	printPokemons() {
		const listPokemons = this.state.pokemonArray.sort((a,b) => a.id-b.id).filter(item =>
      item.name.toLowerCase().includes(this.state.valueInput)
    );

		return (
			<PokemonList monster = {listPokemons}/>
		);
	}

	render() {
		return (
			<div className="App">

				<header className="App-header">
					<h1 className="App-title">Pokémon Pokédex</h1>
				</header>

				<main className="wrapper">
					<Search changeInput = {this.handleOnChange}/>
					{ this.printPokemons() }
				</main>

			</div>
		);
	}
}

export default App;
