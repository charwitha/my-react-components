import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class SetDate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'weekday': '',
            'date': '',
            'month': '',
            'year': '',
            'dateSet': ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        var today = new Date();
        this.handleChange(today);
    }

    handleChange(date) {
        this.setState({
            'weekday': moment(date).format('dddd'),
            'date': moment(date).format('D'),
            'month': moment(date).format('MMMM'),
            'year': moment(date).format('YYYY'),
            'dateSet': moment(date).format('DD/MM/YYYY'),
        });
    }

    render() {
        var dateType = '' + this.props.dateType;
        return(
            <div>
                <div className="date-type">
                    <span>{dateType + ' Date'}</span>
                </div>
                <div className="date-picker">
                    <div className="date-display">
                        <span className="date">{this.state.weekday}</span>
                        <span className="day">{this.state.date}</span>
                        <span className="date">{this.state.month}{' '}{this.state.year}</span>
                    </div>
                    <DatePicker dateFormat="DD/MM/YYYY" selected={this.state.startDate} onChange={this.handleChange} />
                </div>
            </div>);
    }
}

SetDate.propTypes = {
    'dateType': PropTypes.string.isRequired
};