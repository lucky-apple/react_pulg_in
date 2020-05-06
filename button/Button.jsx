import React, { Component } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import "./Button.css"

export default class Button extends Component {

    constructor(props) {
        super(props)
    }

    onClick() {
        this.props.onClick()
    }

    render() {
        return (
            <button className={classnames('apple-button', `apple_${this.props.type}`)} onClick={this.onClick.bind(this)}>
                <span>{this.props.children}</span>
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string
}

Button.defaultProps = {
    type: 'default'
};