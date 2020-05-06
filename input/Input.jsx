import React, { Component } from "react"
import "./input.scss"
import propTypes from "prop-types"

export default class Input extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    onChange(e) {
        const { onChange } = this.props
        if(onChange) onChange(e.target.value)
    }

    render() {
        const { style, showwordlimit, value, maxLength } = this.props
        return (
            <div className="apple-input">
                <input style={style} {...this.props} onChange={this.onChange.bind(this)}/>
                {showwordlimit == "on" && maxLength?<span>{value.length}/{maxLength}</span>:""}
            </div>
        )
    }
}

Input.propTypes = {
    maxLength: propTypes.number, // 输入最大长度
    value: propTypes.string, // value绑定
    showwordlimit: propTypes.oneOf(["on", "off"]), // 是否显示输入的字数 on开始 off关闭
    placeholder: propTypes.string, // 文本提示
    disabled: propTypes.bool // 是否禁用
}

Input.defaultProps = {
    showwordlimit: "off"
}
