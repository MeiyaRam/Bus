import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import Road from './components/Road';

const App = (context) =>
	<div className="App">
		<Road { ...context }/>
		<Bus { ...context }/>
	</div>;

export default App;
