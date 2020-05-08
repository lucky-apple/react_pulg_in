import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class Main extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {}
    }


    render(): React.DOM {
        return (
            <main className={this.classnames("apple-main")}>
                {this.props.children}
            </main>
        )
    }

}
