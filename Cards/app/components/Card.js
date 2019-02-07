import React from 'react';
import styles from '../styles/styles.css';

export default class Card extends React.Component {
	render() {
		var cardInfo = this.props.cardData;
		return (
			<div>
			<div className="cards">
			<div className="card-img"><img src={cardInfo.pic} alt="blank-image" /></div>
			<div className="card-content">
			<h4 className="card-title">{cardInfo.title}</h4>
			<p className="card-body">{cardInfo.body}</p>
			<a href={cardInfo.link} className="more-link">Read more</a>
			</div>
			</div>
			</div>
			)
		};
	}