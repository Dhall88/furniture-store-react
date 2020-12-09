import React from "react";
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import ProductView from "./views/product-view";
import Home from "./views/home";
import Bedroom from "./views/bedroom";
import Bathroom from "./views/bathroom";
import LivingRoom from "./views/living-room";
import Storage from "./views/storage";
import Outdoor from "./views/outdoor";

export default function MainRouter() {

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
						<Route path="/living-room" component={LivingRoom} />
						<Route path="/storage" component={Storage} />
						<Route path="/bedroom" component={Bedroom} />
						<Route path="/outdoor" component={Outdoor} />
						<Route path="/bathroom" component={Bathroom} />
				</HashRouter>
			</React.Fragment>
		);
}


// export default function App() {
//   return (
//     <Container>
//       <h1>Product List</h1>
//     <ProductView />
//     </Container>
//   );
// }