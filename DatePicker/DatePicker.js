import React from 'react';
import SetDate from './SetDate';

export default class DateSetter extends React.Component {
    render() {
        return(
            <div className="date-setter-container row">
                <SetDate dateType='Estimation' />
                <SetDate dateType='Completion' />
                <SetDate dateType='Submition' />
            </div>);
    }
}