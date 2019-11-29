import React, { Component } from 'react';
import './CampainList.css';

class CampainList extends Component {
    render () {
        return (
            <div class="list">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className="large weight-6">Date</div>
                            </th>
                            <th>
                                <div className="large weight-6">Campain</div>
                            </th>
                            <th>
                                <div className="large weight-6">View</div>
                            </th>
                            <th>
                                <div className="large weight-6">Action</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div>Oct 2019, 28</div>
                                <div className="grey italic small">5 Days Ago</div>
                            </td>
                            <td>
                                <div className="">
                                    <img src="" />
                                    <div>
                                        <div>Oct 2019, 28</div>
                                        <div className="grey italic small">5 Days Ago</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="icon-group">
                                    <img src="" />
                                    <div className="info"></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CampainList;