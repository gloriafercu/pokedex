import React from 'react';
import App from './../App';
import {Link, Route, Switch} from 'react-router-dom';

class PokemonDetails extends React.Component{
	render() {
		return (
			<section className="pokemon__details">

				<div className="pokemon__details__background">
					<div className="pokemon__details__card">

						<Link className="link" to='/'>
							<div className="button--close">X</div>
						</Link>

						<Switch>
							<Route exact path="/" component={App} />
						</Switch>

						<p className="pokemon__id">#</p>

						<img className="picture__front_default" src="" alt="" />
						<img className="picture__back_default" src="" alt="" />
						<img className="picture__front_shiny" src="" alt="" />
						<img className="picture__back_shiny" src="" alt="" />

						<p className="pokemon__name">Nombre</p>

						<div className="pokemon__type">
							<span className="tipos">Agua</span>
						</div>

						<div className="pokemon__abilities">
							<span className="tipos">Fumar</span>
						</div>

						<p className="pokemon__weight">40/10<span>kg</span></p>

						<p className="pokemon__height">50/10<span>cm</span></p>

					</div>
				</div>

			</section>
		);
	}
}

export default PokemonDetails;
