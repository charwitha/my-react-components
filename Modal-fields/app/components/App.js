import React from 'react';
import {ModalBox} from './modal';
import {MultiFieldForm} from './MultiFieldForm';
import styles from '../styles/styles.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showComponent: false, 
			color: "white",
			urls: [''],
			repoName: ''
		}; 
		this.showModal = this.showModal.bind(this);
		this.changeColor = this.changeColor.bind(this);
		this.hideModal = this.hideModal.bind(this);

	}

	changeColor(){
		var newColor = this.state.color == "#fff" ? "#D3D3D3" : "#fff";
		this.setState({color: newColor})
	}

	showModal(event) {
		this.setState({showComponent: true});
		this.changeColor;
	}

	hideModal(event) {
		this.setState({showComponent: false});
	}

	updateFields(fields){
		this.setState(fields)
	}

	render() {
		return (
			<div style={{backgroundColor: this.state.color}}>
			<button className="btn btn-primary" onClick = {this.showModal}>Add Components</button>
			{this.state.showComponent ? (
				<ModalBox close={this.hideModal}>
				<MultiFieldForm updateFields={this.updateFields.bind(this)} urls={this.state.urls} close={this.hideModal} />
				</ModalBox>
				) : null}
			</div>);
	}
}