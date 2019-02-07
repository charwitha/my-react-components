import React from 'react';
import {TextBox} from './textbox';

export class AddFields extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			showComponent: false,
			idValue: 1,
			textboxArray: []
		};
		this.appendField = this.appendField.bind(this);
	}

	appendField(event) {
		event.preventDefault();
		this.state.idValue = this.state.idValue + 1;

		this.setState({
			showComponent: true,
			textboxArray: [this.state.textboxArray, <TextBox key={this.state.idValue} id={this.state.idValue} urls={this.props.urls} />]
		});
	}

	render() {
		return (
			<div>
			<form name="repository-info">
			<fieldset>
			<label className="name-label" htmlFor="rep-name" name="repoName">Repository Name: </label>
			<input className="text-box" type="text" id="rep-name" onBlur={this.props.name} />
			<TextBox key={1} id={1} urls={this.props.urls}/>
			{this.state.showComponent ? this.state.textboxArray : null}
			</fieldset>
			<button className="btn btn-primary" onClick= { this.appendField } >+ Add</button>
			</form>
			</div>
		);	
	}
}