import React from 'react';
import PropTypes from 'prop-types';

import ImageRadioBtn from '../form/ImageRadioBtn';
import Tabs from '../tabContent';
import ImageUpload from '../utils/ImageUpload';
import DatePicker from '../DatePicker/DatePicker';
import TextField from '../form/TextField';
import TextAreaField from '../form/TextAreaField';

export default class StepContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let counter = this.props.currentStep;

        return (
            <div className="form-wrapper">
                <div className={'progress-container'+(counter == 1 ? ' active' : '')}>
                    <ImageUpload /> 
                    <TextField fieldLabel="Who is the Client" id="client-name" />
                    <TextField fieldLabel="If any existing Website" id="website-name" />
                    <TextAreaField fieldLabel="Project Description" id="project-desc" />
                </div>
                <div className={'progress-container'+(counter == 1.1 ? ' active' : '')}><ImageRadioBtn /></div>
                <div className={'progress-container'+(counter == 2 ? ' active' : '')}></div>
                <div className={'progress-container'+(counter == 2.1 ? ' active' : '')}></div>
                <div className={'progress-container'+(counter == 3 ? ' active' : '')}><Tabs /></div>
                <div className={'progress-container'+(counter == 4 ? ' active' : '')}><DatePicker /></div>
                <div className={'progress-container'+(counter == 5 ? ' active' : '')}></div>
            </div>
        );
    }
}

StepContainer.propTypes = {
    currentStep: PropTypes.number.isRequired
};