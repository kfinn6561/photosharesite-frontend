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
            this.props.onDeselect()
        } else {
            this.setState({
                selected: true
            })
            this.props.onSelect()
        }
    }


    render () {
        return (
            <div className={clsx("photocard", this.state.selected && "selected-image")} onClick={this.handleClick}>
                <span className={clsx('photoicon','left', !this.state.selected && 'appear')}>
                    { this.state.selected ? <ImCheckboxChecked className='checkbox' /> : <ImCheckboxUnchecked /> }
                </span>
                {this.props.ismodifyible &&
                 <span className='photoicon right appear delete'><ImBin/></span> }
                <img className='photocard-image' src={this.props.src} key={this.props.src}></img>
            </div>
        )
    }
}

export default PhotoCard