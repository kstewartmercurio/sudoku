import React from "react";

export class Square extends React.Component {
    render() {
        return (
            <button 
                className="square"
                onKeyPress={this.props.onKeyPress}
            >
                {this.props.val}
            </button>
        );
    }
}