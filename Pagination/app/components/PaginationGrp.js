import React from 'react';
import styles from '../styles/styles.css';
import Pagination from './Pagination';

export default class PaginationGrp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			"first" : false,
			"prev" : false,
			"last" : true,
			"next" : true,
			"start" : 0,
			"upto" : 3,
			"current": 1
		};

		let dataInfo = this.props.links;
		this.state.data = this.props.linksData;

		this.state.pages = Object.values(dataInfo.pages);
		this.state.pageNum = this.state.pages.length;
		this.state.resultsPerPage = dataInfo["resultsPerPage"];
		this.state.dataStart = 0;
		this.state.dataUpto = this.state.resultsPerPage;
		this.state.dataSize = dataInfo["dataSize"];

		this.changeNext = this.changeNext.bind(this);
		this.changePrev = this.changePrev.bind(this);
		this.changeLast = this.changeLast.bind(this);
		this.changeFirst = this.changeFirst.bind(this);
		this.changeContent = this.changeContent.bind(this);
	}

	changeFirst(event) {
		let current = this.state.current;
		current = 1;

		this.setState({
			"first" : false,
			"prev" : false,
			"last" : true,
			"next" : true,
			"start" : 0,
			"upto" : 3,
			current
		});

		this.changeContent(current);
	}

	changePrev(event) {
		let current = this.state.current;
		let start = this.state.start;
		let upto = this.state.upto;
		let dataStart = this.state.dataStart;
		let pageNum = this.state.pageNum;
		let dataUpto = this.state.dataUpto;
		let res = this.state.resultsPerPage;
		
		if(current === start + 1) {
			start = start-upto;
			/*console.log('s',start, upto)*/
		}

		if(current !== 1) {
			current--;
		}

		this.setState({
			current,
			start
		});

		if(current > 1) {
			this.setState({
				"first" : true,
				"prev" : true,
				"last" : true,
				"next" : true
			});
		} else if(current == 1) {
			this.setState({
				"first" : false,
				"prev" : false
			});
		}

		dataStart -= res;
		dataUpto = (current * res);

		this.setState({
			dataStart,
			dataUpto
		});
		
		/*this.changeContent(current);*/
	}

	changeNext() {
		let current = this.state.current;
		let start = this.state.start;
		let upto = this.state.upto;

		/*console.log('cn',current, start, upto);*/
		if(current === start+upto) {
			start += upto;
		}

		if(current !== this.state.pageNum) {
			current++;
		}

		this.setState({
			current,
			start
		});

		if(current < this.state.pageNum) {
			this.setState({
				"first" : true,
				"prev" : true,
				"last" : true,
				"next" : true,
				current
			});
		} else {
			this.setState({
				"last" : false,
				"next" : false,
				current
			});
		}

		this.changeContent(current);
	}

	changeLast(event) {
		let pageNum =  this.state.pageNum;
		let current = this.state.current;
		let start = this.state.start;
		let upto = this.state.upto;
		current = pageNum;

		let temp = (pageNum % 3);

		if(temp === 0) {
			start = pageNum - 3;
		} else {
			start = pageNum - temp;
		}

		this.setState({
			"first" : true,
			"prev" : true,
			"last" : false,
			"next" : false,
			current,
			start
		});
		this.changeContent(current);
	}

	changeContent(index) {
		let dataStart = this.state.dataStart;
		let dataUpto = this.state.dataUpto;
		let dataSize = this.state.dataSize;
		let res = this.state.resultsPerPage;

		let temp = (dataSize % res);
		
		if(index == 1) {
			dataStart = 0;
			dataUpto = res;
		} else if(index == this.state.pageNum) {
			if(temp == 0) {
				dataStart = dataSize - res;
				dataUpto = (index * res);
			} else {
				dataStart = (dataSize - temp);
				dataUpto = dataSize;
			}
		} else {
			dataStart += res;
			dataUpto = (index * res);
		}

		this.setState({
			dataStart,
			dataUpto
		});
	}

	updateCurrent(index) {
		let dataStart = this.state.dataStart;
		let dataUpto = this.state.dataUpto;
		let res = this.state.resultsPerPage;

		/*console.log(index, this.state.current);*/
		this.setState({
			current: index
		});

		if(index != 1) {
			this.setState({
				"first" : true,
				"prev" : true,
				"next" : true,
				"last" : true
			});
		} else {
			this.setState({
				"first" : false,
				"prev" : false
			});
		}

		if(index == this.state.pageNum) {
			this.setState({
				"last" : false,
				"next" : false
			});
		} else {
			this.setState({
				"last" : true,
				"next" : true
			});
		}

		dataStart = (index * res) - res;
		dataUpto = (index * res);

		this.setState({
			dataStart,
			dataUpto
		});
	}

	render() {
		let pl, nl, fl, ll;
		let start = this.state.start;

		if(this.state.prev == true) {
			fl = <a className="page-link first" onClick={this.changeFirst}></a>;
			pl = <a className="page-link prev" onClick={this.changePrev}></a>;
		}

		if(this.state.next == true) {
			nl = <a className="page-link next" onClick={this.changeNext}></a>;
			ll = <a className="page-link last" onClick={this.changeLast}></a>;
		}
		
		let pageData = this.state.data.slice(this.state.dataStart, this.state.dataUpto).map((data, k)=>{
			let part = this.state.dataStart+k;
			return <li>{this.state.data[part]}</li>;
		});

		let pageLinks = this.state.pages.slice(this.state.start, this.state.start+this.state.upto).map((linkpage, i)=>{
			let index = this.state.start+i+1;
			return (<Pagination key={'link-'+index} index={index} isCurrent={this.state.current===index} updateCurrent={this.updateCurrent.bind(this)} link={linkpage.link} page={index}/>)
		});
		return (<div className="page-results">
			<div><ul>{pageData}</ul></div>
			<div className="links-section">{fl}{pl}{pageLinks}{nl}{ll}</div>
			</div>)
	}
}