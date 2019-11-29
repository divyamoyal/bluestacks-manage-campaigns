import React, { Component } from 'react';
import Tabs from '../../components/Tabs';
import CampainList from '../../components/CampainList';

class ManageCampain extends Component {
    render () {
        return (
            <div>
                <h1>Manage Campain</h1>
                <Tabs />
                <div className="mb3" ></div>
                <CampainList />
            </div>
        )
    }
}

export default ManageCampain;