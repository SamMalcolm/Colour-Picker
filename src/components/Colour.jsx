import React from 'react'

const Colour = (props) => {
	// if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use #ffffff
	return (
		<div className="colour" style={
			{
				'backgroundColor': 'rgb(' + props.red + ',' + props.green + ',' + props.blue + ')',
				'color': ((props.red * 0.299 + props.green * 0.587 + props.blue * 0.114) > 186) ? 'black' : 'white'
			}
		}>
			<button className="removeColour" style={
				{
					'color': ((props.red * 0.299 + props.green * 0.587 + props.blue * 0.114) > 186) ? 'black' : 'white',
					'border-color': ((props.red * 0.299 + props.green * 0.587 + props.blue * 0.114) > 186) ? 'black' : 'white'
				}} onClick={props.removeColour}>X</button>
			<div className="text_content">
				<h2>{props.name}</h2>
				<h3>Red: {props.red}</h3>
				<h3>Green: {props.green}</h3>
				<h3>Blue: {props.blue}</h3>
			</div>
		</div>
	)
}

export default Colour
