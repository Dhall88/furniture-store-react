import React from "react";
import { HashRouter, NavLink, Route } from 'react-router-dom';
import { Container } from "semantic-ui-react";
import ProductView from "./views/product-view";

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
								Kitchen
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
						<Route path="/" exact component={ProductView} />

					</div>
						<Route path="/living-room" component={ProductView} />
						<Route path="/storage" component={ProductView} />
						<Route path="/bedroom" component={ProductView} />
						<Route path="/outdoor" component={ProductView} />
						<Route path="/bathroom" component={ProductView} />
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