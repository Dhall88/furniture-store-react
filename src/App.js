import React, { useReducer, createContext, useEffect, useContext, Component } from 'react'
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import ProductView from "./views/product-view";
// import { ProductContext } from "./context/product-context";
import Home from "./views/home";
import Bedroom from "./views/bedroom";
import Bathroom from "./views/bathroom";
import LivingRoom from "./views/living-room";
import Storage from "./views/storage";
import Outdoor from "./views/outdoor";
import { render } from '@testing-library/react';

export default class MainRouter extends Component{

	state = {
		products:[]
	}
	
	componentDidMount() {

		fetch('http://localhost:3000/products')
			.then(response => response.json())
			.then(data => {   
				this.setState({
					products:data
				}
				)})
	}	

	render() {
		return (
			<React.Fragment>
			<h1>React Funiture Store</h1>
				<HashRouter>
					<header>
						<nav>
							<NavLink
								className='navlink'
								exact
								to="/"
							>
								Home
							</NavLink>
              <NavLink
								className='navlink'
                exact
                to="/living-room"
              >
                Living Room
              </NavLink>
              <NavLink
								className='navlink'
                exact
                to="/storage"
              >
                Storage
              </NavLink>
							<NavLink
								className='navlink'
								exact
								to="/bedroom"
							>
								Bedroom
							</NavLink>
							<NavLink
								className='navlink'
							exact
							to="/outdoor"
							>
							Outdoor
							</NavLink>
							<NavLink
							className='navlink'
							exact
							to="/bathroom"
							>
							Bathroom
							</NavLink>
						</nav>
					</header>
					<div
						// className={Route.to === '/my-plots' ? '' : 'app-container'}
						className={'site-container'}
					>
						<Route path="/" exact component={Home} />

					</div>
						<Route path="/living-room" component={()=>LivingRoom(this.state.products)} />
						<Route path="/storage" component={Storage} />
						<Route path="/bedroom" component={()=>Bedroom(this.state.products)} />
						<Route path="/outdoor" component={Outdoor} />
						<Route path="/bathroom" component={Bathroom} />
				</HashRouter>
			</React.Fragment>
		);
}
}