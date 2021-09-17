import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import LandingPage from './landing';
import Container from './container/Container';


const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route path="/board" component={Container} />
		</Switch>
	</BrowserRouter>
)

export default Main;