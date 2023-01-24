import React from 'react';
import {ImBin, ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import clsx from 'clsx';
import './photocard.css'

class PhotoCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
    }

    handleClick = () => {
        if (this.state.selected) {
            this.setState({
                selected: false
            })
        } else {
            this.setState({
                selected: true
            })
            this.props.onSelect()
        }
    }


    render () {
        return (
            <div className="photocard" onClick={this.handleClick}>
                <span className={clsx('photoicon','left', this.state.selected && ' checked')}>
                    { this.state.selected ? <ImCheckboxChecked /> : <ImCheckboxUnchecked /> }
                </span>
                {this.props.ismodifyible &&
                 <span className='photoicon right delete'><ImBin/></span> }
                <img src={this.props.src} key={this.props.src}></img>
            </div>
        )
    }
}

export default PhotoCard