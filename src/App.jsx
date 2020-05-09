import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';

import Colour from './components/Colour.jsx';
import ColourForm from './components/ColourForm.jsx';

const reducer = (state, action) => {
	switch (action.type) {
		case 'removeColour':
			let stateCopy = state.map((c) => (c));
			stateCopy.splice(stateCopy.indexOf(action.colour), 1);
			return stateCopy;
		case 'addColour':
			return [...state, action.colour];
	}
}

const App = () => {

	const [state, dispatch] = useReducer(reducer, []);

	return (
		<div className="container">
			<ColourForm addColour={(colour) => { dispatch({ 'type': 'addColour', 'colour': colour }) }} />
			{state.map((colour) => {
				return (
					<Colour removeColour={() => { dispatch({ 'type': 'removeColour', 'colour': colour }) }} {...colour} />
				)
			})}
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector(".container"));