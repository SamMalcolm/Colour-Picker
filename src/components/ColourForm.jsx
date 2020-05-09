import React, { useState } from 'react'

const ColourForm = (props) => {

	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	return (
		<div>
			<div className="colour_live" style={{ 'backgroundColor': 'rgb(' + red + ',' + green + ',' + blue + ')' }}>
				<input type="range" max="255" min="0" onChange={(e) => { setGreen(e.target.value) }} />
				<input type="range" max="255" min="0" onChange={(e) => { setBlue(e.target.value) }} />
				<input type="range" max="255" min="0" onChange={(e) => { setRed(e.target.value) }} />
			</div>
			<button onClick={() => { props.addColour({ 'red': red, 'green': green, 'blue': blue }) }} >Add COlour</button>
		</div>
	)
}

export default ColourForm
