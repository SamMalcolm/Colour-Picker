import React, { useState, useReducer, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Colour from './components/Colour.jsx';
import ColourForm from './components/ColourForm.jsx';
import About from './components/About.jsx';

const themes = {
	light: {
		foreground: "#000000",
		background: "#eeeeee"
	},
	dark: {
		foreground: "#ffffff",
		background: "#222222"
	}
};

const ThemeContext = React.createContext(themes.light);

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
	const [average, setAverage] = useState({ 'red': 128, 'green': 128, 'blue': 128, 'name': 'Average Colour' });
	const [theme, setTheme] = useState(themes.dark);

	useEffect(() => {
		let stateCopy = state.map((c) => (c));
		if (stateCopy.length) {
			let red = 0, green = 0, blue = 0;
			stateCopy.forEach((colour) => {
				red += parseInt(colour.red);
				green += parseInt(colour.green);
				blue += parseInt(colour.blue);
			})

			red = red / stateCopy.length;
			blue = blue / stateCopy.length;
			green = green / stateCopy.length;

			setAverage({ 'red': Math.floor(red), 'green': Math.floor(green), 'blue': Math.floor(blue), 'name': 'Average Colour' })
		}
	}, [state])

	return (
		<ThemeContext.Provider value={theme}>
			<Router>
				<Switch>
					<Route exact path="/">
						<div className="container_bg" style={{ 'backgroundColor': theme.background, 'color': theme.foreground }}>

							<ColourForm addColour={(colour) => { dispatch({ 'type': 'addColour', 'colour': colour }) }}>
								<h1>Colour Picker!</h1>
								<label htmlFor="theme">Theme:</label>
								<br />
								<br />
								<select value={(theme == themes.dark) ? "dark" : "light"} onChange={(e) => {
									if (e.target.value == "dark") {
										setTheme(themes.dark)
									} else {
										setTheme(themes.light)
									}
								}}>
									<option value="dark">Dark Theme</option>
									<option value="light">Light Theme</option>
								</select>
								<p>Choose a Colour, add it to the list, remove it if you like. Just have fun!</p>
								<Link to="/about">About this project</Link>
								<br />
								<div className="average_colour" style={{
									'backgroundColor': 'rgb(' + average.red + ',' + average.green + ',' + average.blue + ')',
									'color': ((average.red * 0.299 + average.green * 0.587 + average.blue * 0.114) > 186) ? 'black' : 'white'
								}}>Average Colour (Red: {average.red}, Green: {average.green}, Blue: {average.blue}</div>
								<br />
								<br />
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
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
			</Router>
		</ThemeContext.Provider >
	);
}

export { ThemeContext, App }

ReactDOM.render(<App />, document.querySelector(".react_container"));