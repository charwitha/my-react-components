import React from 'react';
import styles from '../styles/styles.css';

export default class Pagination extends React.Component {
	constructor(props) {
		super(props);
	}
	updateCurrent(){
		/*console.log(this.props.index);*/
		this.props.updateCurrent(this.props.index);
	}
	render() {
		let index = this.props.index;
		/*console.log(index);*/
		return (
			<a href={this.props.link} className={"page-link"+(this.props.isCurrent?' active':'')} onClick={this.updateCurrent.bind(this)}>{this.props.page}</a>
			)
	}
}