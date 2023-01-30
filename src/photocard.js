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
        console.log(this.props)
        var boxStyle = 
        {
            width: this.props.box.width+"px",
            height: this.props.box.height+"px",
            top: this.props.box.top+"px",
            left: this.props.box.left+"px"
        }
        return (
            <div className={clsx("photocard", this.state.selected && "selected-image")} 
            onClick={this.handleClick}
            style={boxStyle}>
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