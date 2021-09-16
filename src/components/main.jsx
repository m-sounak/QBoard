import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landing';
import Container from './container/Container';


const Main = () => (
	<Switch>
		<Route exact path="/" component={LandingPage} />
		<Route path="/board" component={Container} />
	</Switch>
)

export default Main;