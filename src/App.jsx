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
			return [action.colour, ...state];
	}
}

const App = () => {

	const [state, dispatch] = useReducer(reducer, []);

	return (
		<div>
			<ColourForm addColour={(colour) => { dispatch({ 'type': 'addColour', 'colour': colour }) }}>
				<h1>Colour Picker!</h1>
				<p>Choose a Colour, add it to the list, remove it if you like. Just have fun!</p>
			</ColourForm>
			<div className="container">
				{state.map((colour) => {
					return (
						<Colour
							key={
								colour.red.toString() +
								colour.blue.toString() +
								colour.green.toString()
							}
							removeColour={
								() => {
									dispatch({ 'type': 'removeColour', 'colour': colour })
								}
							}
							{...colour}
						/>
					)
				})}
			</div>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector(".react_container"));