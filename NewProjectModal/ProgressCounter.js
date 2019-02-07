import React from 'react';
import PropTypes from 'prop-types';

export default class ProgressCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let stepList = this.props.steps;
        let currentStep = this.props.currentStep;

        let steps = stepList.map((step, index)=>{
            let i = index + 1;
            return (
                <li className={'progress-step'+((i == currentStep)?' active':'')} key={'step-'+index} >
                    <span className='badge step-badge'>{i}</span>
                    <span className='progress-name'>{step}</span>
                </li>
            );
        });
        return (<ul className="steps-list">{steps}</ul>);
    }
}

ProgressCounter.propTypes = {
    steps: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired,
    currentState: PropTypes.bool.isRequired
};