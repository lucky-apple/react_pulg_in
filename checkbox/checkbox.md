# Checkbox 组件的使用
### 第一种使用方式
```
import Checkbox from "../components"

constructor(props) {
    super(props)
	this.state = {
		checkList: ["A"] // 默认选中label为A的
	}
}

onChangeGroup(value) {
	this.setState({checkList: value})
}


render() {
	return (
		<Checkbox.Group value={this.state.checkList} onChange={this.onChangeGroup.bind(this)}>
			<Checkbox label="A">A</Checkbox>
			<Checkbox label="B">B</Checkbox>
			<Checkbox label="C" disabled>C被禁用</Checkbox>
		</Checkbox.Group>
	)
}
```

### 第二种使用方式
```
import Checkbox from "../components"

constructor(props) {
	super(props)
	this.state = {
		checked: true // 通过checked进行默认选中
	}
}

onChangeGroup(value) {
	this.setState({checkList: value})
}

onChange(value) {
	this.setState({checked: value})
}

render() {
	return (
		<Checkbox label="多选框" checked={this.state.checked} onChange={this.onChange.bind(this)}>多选框</Checkbox>
	)
}
```

### 属性介绍
```
checked 类型Boolean 默认值false 是否选中 仅在没有Checkbox.Group
disabled 类型Boolean 默认值false 是否禁用
onChange 事件 参数如果没有Checkbox.Group就放回true和false否则放回Checkbox.Group的值
```