import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class TabsPane extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    render(): React.DOM {
        const { children } = this.props
        return (
            <div className={this.classnames("apple-tabs-plane")}>
                {children}
            </div>
        )
    }
}

TabsPane.propTypes = {
    name: propTypes.string,
    closable: propTypes.bool
}

TabsPane.defaultProps = {
    closable: false
}
