import React from 'react';
import CreateProject from './CreateNewProject';

export default class CreateProjectBtn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'showComponent': false 
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({'showComponent': true});
    }

    hideModal() {
        this.setState({'showComponent': false});
    }

    render() {
        return (
            <div>
                <button className="btn" onClick = {this.showModal}>Create Project</button>
                {this.state.showComponent ? (<CreateProject handler={this.hideModal}/>) : null}
            </div>);
    }
}