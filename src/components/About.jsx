import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App.jsx';

const About = () => {

	const theme = useContext(ThemeContext);

	return (
		<div className="container_bg" style={{ 'backgroundColor': theme.background, 'color': theme.foreground }}>
			<div className="container">
				<h1>About the Colour Picker!</h1>
				<Link style={{ 'color': theme.foreground }} to="/">See the Colour Picker!</Link>
				<p>Colour picker is a small react project that is created by Sam Malcolm and used in his course <i>Getting Started With React.</i></p>
				<p>The project uses a lot of Reacts features in a simple context to help create a practical example of how they are used. These features include:</p>
				<ul>
					<li>Creating a Development Environment.</li>
					<li>Creating Custom Components.</li>
					<li>Using Hooks (useState, useReducer, useEffect and useContext).</li>
					<li>Using the React Router.</li>
				</ul>
				<p>View the project on GitHub: <a style={{ 'color': theme.foreground }} href="https://github.com/SamMalcolm/Colour-Picker/">https://github.com/SamMalcolm/Colour-Picker/</a></p>
			</div>
		</div>
	)
}

export default About;