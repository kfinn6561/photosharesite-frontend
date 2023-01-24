import React from 'react';
import {ImBin} from 'react-icons/im'
import './photocard.css'

class PhotoCard extends React.Component {
    render () {
        console.log(this.props)
        return (
            <div className="photocard">
                <input type="checkbox" className='checkbox'></input>
                {this.props.ismodifyible &&
                 <span className='deletebutton'><ImBin/></span> }
                <img src={this.props.src} key={this.props.src}></img>
            </div>
        )
    }
}

export default PhotoCard