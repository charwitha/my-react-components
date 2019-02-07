import React from 'react';
import styles from '../styles/styles.css';
import Card from './Card';

export default class Cards extends React.Component {
	render() {
		let cardsData = this.props.cards;

		let cards = cardsData.map((card, index)=>{
			return ( <Card key={'card-'+index} cardData={card} /> )
		})
		
		return (
			<div className="cards-section">
			{cards}
			</div>
			)
	}
}