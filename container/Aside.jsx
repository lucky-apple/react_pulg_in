import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class Aside extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {}
    }


    render(): React.DOM {
        const { children, width } = this.props
        return (
            <aside style={this.style({
                width
            })} className={this.classnames("apple-aside")}>
                {children}
            </aside>
        )
    }
}

Aside.propTypes = {
    width: propTypes.string
}

Aside.defaultProps = {
    width: "300px"
}
