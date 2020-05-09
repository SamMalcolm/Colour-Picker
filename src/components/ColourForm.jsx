import React, { useState } from 'react'

const ColourForm = (props) => {

	const [red, setRed] = useState(128);
	const [green, setGreen] = useState(128);
	const [blue, setBlue] = useState(128);

	const [name, setName] = useState('Colour!');

	return (
		<div>
			<div className="colour_live" style={
				{
					'backgroundColor': 'rgb(' + red + ',' + green + ',' + blue + ')',
					'color': ((red * 0.299 + green * 0.587 + blue * 0.114) > 186) ? 'black' : 'white'
				}}>
				{props.children}
				<label for="red">
					<span style={{ 'color': 'red' }}>Red:</span> {red}
				</label><br />
				<input name="red" type="range" defaultValue="128" max="255" min="0" onChange={(e) => { setRed(e.target.value) }} /><br />
				<label for="green">
					<span style={{ 'color': 'green' }}>Green:</span> {green}
				</label><br />
				<input name="green" type="range" defaultValue="128" max="255" min="0" onChange={(e) => { setGreen(e.target.value) }} /><br />
				<label for="blue">
					<span style={{ 'color': 'deepskyblue' }}>Blue:</span> {blue}
				</label><br />
				<input name="blue" type="range" defaultValue="128" max="255" min="0" onChange={(e) => { setBlue(e.target.value) }} /><br />
				<label for="name">Name:</label><br />
				<input type="text" defaultValue={name} onChange={(e) => { setName(e.target.value) }} /><br />
				<button className="addColour" onClick={() => { props.addColour({ 'red': red, 'green': green, 'blue': blue, 'name': name }) }} >Add Colour</button>
			</div>

		</div >
	)
}

export default ColourForm
