import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class Footer extends Component {

    constructor(props: Props) {
        super(props)
        this.name = "Footer"
        this.state = {}
    }


    render(): React.DOM {
        const { height } = this.props
        return (
            <footer style={this.style({
                height
            })} className={this.classnames("apple-footer")}>
                {this.props.children}
            </footer>
        )
    }
}

Footer.propTypes = {
    height: propTypes.string
}

Footer.defaultProps = {
    height: "60px"
}
