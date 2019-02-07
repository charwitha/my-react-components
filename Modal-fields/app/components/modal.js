import React from 'react';

export class ModalBox extends React.Component {
	render() {
		return (
			<div>
			<div className="modal-dialog modal-dialog-centered">
			<div className="modal-content">
			<button className="m-close" onClick={this.props.close}>&times;</button>
			<div className="modal-body">
			{this.props.children}
			</div>
			</div>
			</div>
			</div>
			);
	}
}