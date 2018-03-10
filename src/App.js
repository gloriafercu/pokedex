import React from 'react'
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
		for (let i=1; i<= 3 ; i++) {
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
		const valueToShow = e.target.value;
		this.setState({
			valueInput: valueToShow.toLowerCase()
		});
	}

	printPokemons() {
		const listPokemons = this.state.pokemonArray.filter(item =>
      item.name.toLowerCase().includes(this.state.valueInput)
    );;

		return (
			<ul className="pokemon__list">
				{ listPokemons.map((list, index) =>
					<li className="pokemon__list--li" key = {index}>
						<div className="pokemon__card">
							<p className="pokemon__name">{list.name}</p>
							<p className="pokemon__id">{list.id}</p>
							<img src={list.sprites.front_default} alt="pokemon"/>
							<div className="pokemon__type">
								{list.types.map((type, i) =>
									<span key={i}> {list.types[i].type.name} </span>
								)}
							</div>
						</div>
					</li>)
				}
			</ul>

		);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Pokémon Pokédex</h1>
				</header>

				<div className="input__search">
					<input type="text" className="input__name" placeholder="Search pokémons by name" onChange = { this.handleOnChange }/>
				</div>

				{ this.printPokemons() }

			</div>
		);
	}
}

export default App;
