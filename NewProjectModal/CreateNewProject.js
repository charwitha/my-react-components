import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import api from '../../services/api.service';

import StepContainer from './StepContainer';
import ProgressCounter from './ProgressCounter';

export default class CreateNewProject extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            'progressSteps' : [
                'Name & Describe Your Project',
                'Technologies & Team', 
                'Attach Required Documents', 
                'Set Deadline', 
                'Set Budget Range & Priority'
            ]
        };

        this.state.data = new FormData();
        this.state.isCurrent = 1;
        this.state.projectCode = null;
        this.state.isComplete = false;
        this.updateNextProgress = this.updateNextProgress.bind(this);
        this.updatePrevProgress = this.updatePrevProgress.bind(this);
        this.updateStepProgress = this.updateStepProgress.bind(this);
        this.postFormData = this.postFormData.bind(this);
    }

    componentDidMount() {
        axios.post(api.config.baseAPI + '/login', {
            username: '1638', password: 'password'
        }, 
        {
            withCredentials: true
        }).then(data => {
        });
    }

    updateStepProgress() {
        let current = this.state.isCurrent;

        if([1,2].includes(current)) {
            current += 0.1;
        }

        this.setState({
            'isCurrent' : current
        });
    }

    updateNextProgress() {
        let current = Math.floor(this.state.isCurrent);
        
        if(current !== (this.state.progressSteps.length))  {
            current += 1;
        }

        this.setState({
            'isCurrent' : current,
        });

        this.postFormData();
    }

    updatePrevProgress() {
        let current = this.state.isCurrent;

        if(current !== 1) {
            current -= 1;
        }

        this.setState({
            'isCurrent' : current
        });
    }

    postFormData() {
        
        if (this.state.isCurrent == 1.1) {
            let formData = {
                "name": "Polycome",
                "description": "This is testing dcsription",
                "projectDelivery": {
                    "name": "SOW"
                }
            };
            axios({
                method: 'POST',
                url: api.config.baseAPI + '/projects',
                data: formData,
                withCredentials: true,
                config: { headers: {'Content-Type': 'application/json' }}
            }).then(({ error, data }) => {
                if (data) {
                    data = data['data'] || data;
                }
                if (!error && data) {
                    this.setState({
                        'isComplete': true,
                        projectCode:  data.code
                    });
                }
            }).catch(function (response) {
            });
        } else {
            if (this.state.projectCode) {
                let dataToUpdate = {   };

                if (this.state.isCurrent == 2) {
                    dataToUpdate = {
                        technologies: []
                    }
                } else if (this.state.isCurrent == 3) {
                    dataToUpdate = {
                        docs: []
                    }
                }  else if (this.state.isCurrent == 4) {
                    dataToUpdate = {
                        estimationDate: new Date().getTime(),
                        completionDate: new Date().getTime(),
                        submissionDate: new Date().getTime(),
                    }
                } else if (this.state.isCurrent == 5) {
                    dataToUpdate = {
                        budgetStart: '',
                        budgetEnd: '',
                        priority: {
                            name: 'High'
                        }
                    }
                }

                axios({
                    method: 'PATCH',
                    url: api.config.baseAPI + '/projects/' + this.state.projectCode,
                    data: dataToUpdate,
                    withCredentials: true,
                    config: { headers: {'Content-Type': 'application/json' }}
                }).then(({ error, data }) => {
                    if (data) {
                        data = data['data'] || data;
                    }
                    if (!error && data) {
                        this.setState({
                            'isComplete': true,
                            projectCode:  data.code
                        });
                    }
                }).catch(function (response) {
                });
            }
        }
    }

    render() {
        let helpText = <p className="help-text" onClick={this.updateStepProgress}>Press<span className="badge">tab</span>to access next fields</p>;
        let nextProgress = <button type="button" className="btn btn-next" onClick={this.updateNextProgress}>Next Step <span className="btn-sign">&#8250;</span></button>;
        let prevProgress = <button type="button" className="btn btn-back" onClick={this.updatePrevProgress}><span className="btn-sign">&#8249;</span> Back</button>;

        return (
            <div className="modal-container">
                <div className="modal-header">
                    <button type="button" className="close" onClick={this.props.handler}>&times;</button>
                </div>
                <div className="modal-body">
                    <div className="form-container">
                        <div className="project-name">
                            <h2 className="project-title">Project Name</h2>
                        </div>
                        <div className="form-body">
                            <form>
                                <StepContainer currentStep={this.state.isCurrent} />
                            </form>
                        </div>
                        <div className="nav-links">
                            {prevProgress}
                            {[1,2].includes(this.state.isCurrent) ? helpText : nextProgress}
                        </div>
                    </div>
                    <div className="form-progess">
                        <ProgressCounter steps={this.state.progressSteps} currentStep={Math.floor(this.state.isCurrent)} currentState={this.state.isComplete} />
                    </div>
                </div>

            </div>
        );
    }
}

CreateNewProject.propTypes = {
    handler: PropTypes.func.isRequired
};