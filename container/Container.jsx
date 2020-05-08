import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"
import "./css/container.scss"

export default class Container extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {}
    }

    isVertical(): Boolean {
        let children = this.props.children,
            isVertical = children.find(e => e.type.name === "Footer" || e.type.name === "Header")
        return !(!isVertical)
    }

    render(): React.DOM {
        return (
            <section className={this.classnames("apple-container", this.isVertical() ,{
                "is-vertical": this.isVertical()
            })}>
                {this.props.children}
            </section>
        )
    }

}
