import React from 'react';

export class TextBox extends React.Component {

	render() {
		return (	
			<div>
			<label className="name-label" htmlFor={this.props.id}>Url {this.props.id}:</label>
			<input className="text-box" type="text" id={this.props.id} name="url" onBlur={this.props.urls} />
			<button className="close">&times;</button>
			</div>
			);
	}
}