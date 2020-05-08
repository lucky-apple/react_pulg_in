import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"
import "./css/checkbox.scss"

export default class CheckboxGroup extends Component {

    constructor(props: Props) {
        super(props)
        this.name = "CheckboxGroup"
    }

    getChildContext(): { AppleCheckbox: Component } {
        return {
            AppleCheckbox: this
        }
    }

    render(): React.DOM {
        return (
            <div className={this.classnames("apple-checkbox-group")}>
                {this.props.children}
            </div>
        )
    }
}

CheckboxGroup.childContextTypes = {
    AppleCheckbox: propTypes.any
}

CheckboxGroup.propTypes = {
    value: propTypes.any
}
