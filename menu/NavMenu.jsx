import React from "react"
import "./css/NavMenu.scss"
import propTypes from "prop-types"
import { Component } from "../libs"

export default class Menu extends Component {
    constructor(props: Props) {
        super(props)
        this.name = "Menu"
        this.state = {
            activeIndex: props.activeIndex
        }
    }

    getChildContext(): { component: Menu } {
        return {
            component: this
        };
    }

    style(): Object {
        const { width } = this.props
        return Object.assign({}, {
            width: width + "px",
        })
    }

    render(): React.Dom {
        const { style } = this
        const { title, theme } = this.props
        return (
            <ul className={this.classnames("menu", `apple_menu_${theme}`)} style={style.call(this)}>
                {title}
                {this.props.children} 
            </ul>
        )
    }
}

Menu.propTypes = {
    background: propTypes.string,
    width: propTypes.number, // 宽度
    theme: propTypes.oneOf(["light", "dark"])
}

Menu.defaultProps = {
    background: "white",
    width: 200,
    theme: "light"
}

Menu.childContextTypes = {
    component: propTypes.any
};
