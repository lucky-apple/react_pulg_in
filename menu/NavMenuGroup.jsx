import React, { Component } from "react" 
import propTypes from "prop-types"

export default class MenuGroup extends Component {
    
    constructor(props) {
        super(props)
        this.name = "MenuGroup"
        this.state = {
            name: "a"
        }
    }
    
    getChildContext(): { component: MenuGroup } {
        return {
            component: this
        };
    }

    render(): React.DOM {
        const { children } = this.props
        return (
            <ul>
                {children}
            </ul>
        )
    }
}

MenuGroup.childContextTypes = {
    component: propTypes.any
};

MenuGroup.contextTypes = {
    component: propTypes.any
}