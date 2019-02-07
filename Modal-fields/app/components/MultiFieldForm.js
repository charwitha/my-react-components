import React from 'react';

export class MultiFieldForm extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			repoName: props.repoName || '',
			urls: props.urls || ['']
		}
		this.appendField = this.appendField.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleName = this.handleName.bind(this);
		this.removeField = this.removeField.bind(this);
		this.handleForm = this.handleForm.bind(this);
	}

	appendField(event) {
		event.preventDefault();
		let urls = this.state.urls;
		urls.push('');
		this.setState({
			urls: urls
		});
	}

	removeField(event) {
		event.preventDefault();
		let del = event.target;
		let index = del.getAttribute('data-id');
		let urls = this.state.urls;
		/*console.log(event, del.getAttribute('data-id'));*/
		urls.splice(index,1);
		this.setState({
			urls: urls
		});
	}

	handleName(event) {
		this.setState({
			repoName: event.target.value
		});
	}

	handleInput(event) {
		let inp = event.target;
		let index = inp.getAttribute('data-id');
		let urls = this.state.urls;
		/*console.log(event, inp.getAttribute('data-id'));*/
		urls[index] = inp.value;
		this.setState({
			urls: urls
		})
	}

	handleForm(event) {
		event.preventDefault();
		let name =  this.state.repoName;
		let urls = 	this.state.urls;
		/*alert("Repository name is empty");*/
		if(name == '') {
			alert("Repository name is empty");
			return;
		} else {
			for(var i = 0; i < urls.length; i++) {
				if(urls[i] == '') {
					alert("url "+ (i+1) + " is empty");
					return;
				}
			}
		}
		this.props.updateFields({
			repoName: this.state.repoName,
			urls: this.state.urls
		});
		console.log("Repository Name: " + this.state.repoName);
		console.log("urls: " + this.state.urls);
		{this.props.close}
	}

	render() {
		let _this = this;
		let multiUrls;
		/*console.log(this.state.urls)*/
		console.log(this.state.urls);
		multiUrls = this.state.urls.map(function(url, index){
			/*console.log(index);*/
			var i = index+1;
			console.log(url);
			return (
				<div className="form-input" key={i}>
				<label className="name-label" htmlFor={"url-"+i}>Url {i}: </label>
				<input autoFocus className="text-box" type="text" data-id={index} id={"url-"+i} value={url||''} onChange={_this.handleInput} required />
				<button className="close" data-id={index} onClick={_this.removeField}>&times;</button>
				</div>
				);
		});

		return (
			<div>
			<form name="repository-info">
			<fieldset>
			<label className="name-label" htmlFor="rep-name" name="repoName">Repository Name: </label>
			<input className="text-box" type="text" id="rep-name" onBlur={this.handleName} required />
			<div className="multi-urls">{multiUrls}</div>
			<button className="btn btn-primary" onClick= { this.appendField } >+ Add</button>
			</fieldset>
			<input type="submit" className="btn btn-primary submit" defaultValue="Save" onClick={ this.handleForm } />
			</form>
			</div>
			);	
	}
}