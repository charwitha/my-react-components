import React from 'react';
import PaginationGrp from './PaginationGrp';

export default class PaginationImpl extends React.Component {
	
	render() {
		let data = this.props.data;
		let resultsPerPage = this.props.resultsPerPage;
		let dataLength = data.length;
		let res = (dataLength % resultsPerPage);
		let k = 1;
		let pages = [];
		let pageNo = (res == 0) ? parseInt(dataLength / resultsPerPage) : parseInt(dataLength / resultsPerPage) + 1;

		for(var i = 0; i < pageNo; i++) {
			pages[i] = k;
			k++;
		}

		let linksInfo = {
			"dataSize" : dataLength,
			"resultsPerPage": resultsPerPage,
			"pages": pages
		};

		return <PaginationGrp links={linksInfo} linksData={data} />
	}
}
