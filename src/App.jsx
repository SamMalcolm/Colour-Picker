import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Colour from './components/Colour.jsx';

const App = () => {
	const [colours, setColours] = useState([])
	return (
		<div className="container">
			<h1>Top Level Component</h1>
			<Colour red={123} green={200} blue={60} />
			<Colour red={200} green={120} blue={20} />
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector(".container"));