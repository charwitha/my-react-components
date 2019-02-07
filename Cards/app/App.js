import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';
import pic from './400x300.jpg';

export default class App extends React.Component {
	render() {
		let cardsData = [{
			pic,
			"title" : "Card title1",
			"body" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			"link" : "#"
		}, {
			pic,
			"title" : "Card title2",
			"body" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			"link" : "#"
		}, {
			pic,
			"title" : "Card title3",
			"body" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			"link" : "#"
		}];
		return (<Cards cards={cardsData} />)
	}
}
