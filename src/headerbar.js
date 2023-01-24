import React from "react";
import './headerbar.css';

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="headerbar-wrapper">
                <ul className="headerbar">
                    <li className="headeritem">Upload</li>
                    {this.props.showDownload && <li className="headeritem">Download</li> }
                    {this.props.showDelete && <li className="headeritem">Delete</li> }
                </ul>
            </div>
        )
    }
}

export default HeaderBar