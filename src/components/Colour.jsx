import React from 'react'

const Colour = (props) => {
	return (
		<div className="colour" style={{ 'backgroundColor': 'rgb(' + props.red + ',' + props.green + ',' + props.blue + ')' }}>
			<div className="text_content">
				<h3>Red: {props.red}</h3>
				<h3>Green: {props.green}</h3>
				<h3>Blue: {props.blue}</h3>
			</div>
		</div>
	)
}

export default Colour
