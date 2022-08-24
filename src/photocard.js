import React from 'react';
import './photocard.css'

class PhotoCard extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                <div>this is {this.props.ismodifyible ? 'very': 'not'} modifyable</div>
                <img src={this.props.src} key={this.props.src}></img>
            </div>
        )
    }
}

export default PhotoCard