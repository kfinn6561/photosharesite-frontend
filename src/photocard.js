import React from 'react';
import './photocard.css'

class photoCard extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.src}></img>
            </div>
        )
    }
}