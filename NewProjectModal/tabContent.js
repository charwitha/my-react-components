import React from 'react';
import PropTypes from 'prop-types';

export default class TabContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'currentTab' : 0
        };	

        this.state.tabNames = ['Requirement Docs', 'Questionary Docs', 'MOM'];
    }

    showCurrentTab(index, event) {
        event.preventDefault();

        this.setState({
            'currentTab' : index
        });
    }

    render() {
        let tabNames = this.state.tabNames;
        let currentTab = this.state.currentTab;

        let tabs = tabNames.map((tab, index)=>
            <li className={'nav-item tab-name'+(currentTab == index ? ' active' : '')} key={'tab-'+index} onClick={this.showCurrentTab.bind(this, index)}>
                <a className={'nav-link doc-tab'+(currentTab == index ? ' active' : '')} href={tab} role="tab" data-toggle="tab">{tab}</a>
            </li>
        );

        return(
            <div className="tabs-container">
                <ul className="nav nav-tabs tabs-panel" role="tablist">{tabs}</ul>
                <div className="tab-content">
                    <div  role='tabpanel' className={'tab-pane'+(currentTab == 1 ? ' active' : '')} id=""></div>
                    <div  role='tabpanel' className={'tab-pane'+(currentTab == 2 ? ' active' : '')} id=""></div>
                    <div  role='tabpanel' className={'tab-pane'+(currentTab == 3 ? ' active' : '')} id=""></div>
                </div>
            </div>);
    }
}
