import React, { Component } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

export default class MenuItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            index: "1",
            isActive: false
        }
    }

    onClick(): void {
        this._root.setState({
            activeIndex: this.props.index
        })
    }

    rootMenu(component: ProxyComponent): ProxyComponent {
        var _c = component
        if (_c && _c.name !== "Menu") {
            return this.rootMenu(_c.context.component)
        }
        return _c
    }

    active(): Boolean {
        return this.props.index === this._root.state.activeIndex
    }

    render(): React.DOM {
        const { onClick, active } = this
        this._root = this.rootMenu(this.context.component)
        return (
            <li className={classnames("apple-menu-item", {
                "is_active": active.call(this)
            })} onClick={onClick.bind(this)}>
                {this.props.children}
            </li>
        )
    }
}

MenuItem.contextTypes = {
    component: PropTypes.any
}
