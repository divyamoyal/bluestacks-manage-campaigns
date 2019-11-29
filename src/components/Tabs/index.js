import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    render () {
        return (
            <div className="tab-container">
                <ul className="tabs">
                    <li className="active">Upcoming Campains</li>
                    <li>Live Campains</li>
                    <li>Past Campains</li>
                </ul>
            </div>
        )
    }
}

export default Tabs;