import React from 'react';
import Pokeball from './images/pokeball.svg';
import './main.css';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Pokédex</h1>
					<img className="pokeball" src={Pokeball} alt="pokédex" />
				</header>
				<main className="wrapper">
					<Switch>
						<Route exact path='/' component={ Home } />
						<Route path='/pokemondetails' component={ PokemonDetails } />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;
