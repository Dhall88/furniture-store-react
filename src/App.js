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
import { CartContextProvider } from "./context/cart-context";
import Cart from "./views/cart-view"
import './App.css';

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
			<CartContextProvider>
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
								to="/livingroom"
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
							<NavLink
							className='navlink'
							exact
							to="/cart"
							>
							Cart
							</NavLink>
						</nav>
					</header>
					<div className={'site-container'}>

						<Route path="/" exact component={Home} />

					</div>
						<Route path="/livingroom" component={()=>LivingRoom(this.state.products)} />
						<Route path="/storage" component={() =>Storage(this.state.products)} />
						<Route path="/bedroom" component={()=>Bedroom(this.state.products)} />
						<Route path="/outdoor" component={()=>Outdoor(this.state.products)} />
						<Route path="/bathroom" component={()=>Bathroom(this.state.products)} />
						<Route path="/product" component={ProductView} />
						<Route path="/cart" component={Cart} />
				</HashRouter>
			</CartContextProvider>
		);
}
}