import React from "react"
import classnames from 'classnames';

export default class Component extends React.Component {

    classnames(...arg) {
        return classnames(arg)
    }

    style(arg) {
        return Object.assign({}, arg)
    }
}
