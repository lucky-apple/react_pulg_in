import React from "react"
import { Component } from "../libs"
import propTypes from "prop-types"
import "./css/tabs.scss"

export default class Tabs extends Component {

    constructor(props: Props) {
        super(props)
        const { children } = props

        this.state = {
            value: props.value,
            children
        }
    }

    isActive(index: Number, name: String): Boolean {
        return name ? this.state.value === name: this.state.value === index + ""
    }

    handlerClick(index: Number, name: String): void {
        if(name) this.setState({value: name + ""}) 
        else this.setState({value: index + ""})
    }

    handleTabRemove(index: String): void {
        const { removeTab } = this.props
        if(removeTab) {
            removeTab(index)
        }
    }

    componentWillReceiveProps(nextProps: Props): void {
        const { children } = nextProps
        this.setState({children})
    }

    render(): React.DOM {
        const { children } = this.state
        return (
            <div className={this.classnames("apple-tab")}>
                <div className={this.classnames("apple-tab_header")}>
                    {
                        React.Children.map(children, (item, index) => {
                            const { title, name, closable } = item.props
                            return (
                                <div className={this.classnames("apple-tabs_tilte", {
                                    "is_active": this.isActive(index, name)
                                })} onClick={this.handlerClick.bind(this, index, name)}>
                                    {title} <i className={this.classnames({
                                        "is_close": closable
                                    })} onClick={this.handleTabRemove.bind(this, name || index)}>关闭</i>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={this.classnames("apple-tabs_content")}>
                    {
                        React.Children.map(children, (item, index) => {
                            const { name } = item.props
                            return (
                                <div className={this.classnames({
                                    "is_show": this.isActive(index, name)
                                })}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

Tabs.propTypes = {
    value: propTypes.any, // 绑定的值
    addable: propTypes.bool // 是否添加
}

Tabs.defaultProps = {
    value: "0",
    addable: false,
}
