import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"

export default class Checkbox extends Component {

    constructor(props: Props) {
        super(props)
        this.name = "Checkbox"
        this.state = {}
    }

    isChecked(): Boolean {
        const { label, checked } = this.props
        return this.context.AppleCheckbox ? this.context.AppleCheckbox.props.value.indexOf(label) > -1 : checked
    }

    onChange(e: SyntheticEvent): void {
        const { onChange, label, disabled } = this.props
        if (disabled) { return }
        if (this.context.AppleCheckbox) {
            let appleCheckbox = this.context.AppleCheckbox, value = appleCheckbox.props.value
            if (this.isChecked()) {
                if (value.indexOf(label) > -1) {
                    value.splice(value.indexOf(label), 1)
                }
            } else {
                value.push(label)
            }
            appleCheckbox.setState({ value })
            appleCheckbox.props.onChange(value)
        } else {
            if (onChange) {
                onChange(e.target.checked)
            }
        }
    }

    render(): React.DOM {
        const { label, disabled } = this.props
        return (
            <label className={this.classnames("apple-checkbox", {
                "is_disabled": disabled
            })}>
                <span className={this.classnames("apple-checkbox_label", {
                    "is_checked": this.isChecked()
                })}>
                </span>
                <input type="checkbox" checked={this.isChecked()} disabled={disabled} onChange={this.onChange.bind(this)} />
                <span className={this.classnames("apple-checkbox_text")}>
                    {this.props.children}
                </span>
            </label>
        )
    }

}

Checkbox.contextTypes = {
    AppleCheckbox: propTypes.any
};

Checkbox.propTypes = {
    label: propTypes.string, // 标签名字
    checked: propTypes.bool, // 是否选中
    disabled: propTypes.bool // 是否禁用
}

Checkbox.defaultProps = {
    checked: false,
    disabled: false
}
