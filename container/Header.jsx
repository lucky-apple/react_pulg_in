import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class Header extends Component {

    constructor(props: Props) {
        super(props)
        this.name = "Header"
        this.state = {}
    }

    render(): React.DOM {
        const { height } = this.props
        return (
            <header style={this.style({
                height
            })} className={this.classnames("apple-header")}>
                {this.props.children}
            </header>
        )
    }
}

Header.propTypes = {
    height: propTypes.string
}

Header.defaultProps = {
    height: "60px"
}
