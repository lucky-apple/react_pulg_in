import React, { Component } from "react"
import classnames from "classnames"
import propTypes from "prop-types"

export default class MenuSub extends Component {

    constructor(props: Props) {
        super(props)
        this.state = {
            isShow: false // 是否显示
        }
    }

    showMenuGroup() {
        const { isShow } = this.state
        if(isShow) {
            this.setState({
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })  
        }
    }

    getChildContext(): { component: MenuSub } {
        return {
            component: this
        };
    }

    render(): React.DOM {
        const { showMenuGroup } = this
        const { isShow } = this.state
        const { title, children } = this.props
        return (
            <li className="apple-menu-sub">
                <div className="apple-menu-sub_tilte" onClick={showMenuGroup.bind(this)}>{title}</div>
                <div className={classnames("apple-menu-sub_children", {
                    'isShow': isShow
                })}>
                    {children}
                </div>
            </li>
        )
    }
}

MenuSub.childContextTypes = {
    component: propTypes.any
};

MenuSub.contextTypes = {
    component: propTypes.any
}