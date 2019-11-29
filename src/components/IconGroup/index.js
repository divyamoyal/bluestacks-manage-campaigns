import React, { Component } from 'react';
import './IconGroup.css';

class IconGroup extends Component {
    render () {
        return (
            <div className="icon-group">
                <img src="" />
                <div className="info">{props.info}</div>
            </div>
        )
    }
}

export default IconGroup;