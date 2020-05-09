# Tabs组件使用
```
import Tabs from "../components"

constructor(props) {
	super(props)
	this.state = {
		value: "1",
		tabList: [{title: "标题一", name: "1"}, {title: "标题二", name: "2"}, {title: "标题三", name: "3"}]
	}
}

addTabs() {
	const { tabList } = this.state

	var name = parseInt(this.state.tabList[this.state.tabList.length - 1].name)
	tabList.push({
		title: "new Tab",
		name: name + 1 + ""
	})
	this.setState({tabList})
}

handleTabRemove(index) {
	const { tabList } = this.state
	let tabListA = tabList.filter(e => e.name !== index)
	this.setState({tabList: tabListA})
}

render() {
	return (
		<div>
			<button onClick={this.addTabs.bind(this)}>添加</button>
			<Tabs value={this.state.value} removeTab={this.handleTabRemove.bind(this)}>
				{
					this.state.tabList.map(item => (
						<Tabs.Pane key={item.name} closable title={item.title} name={item.name}>{item.title}</Tabs.Pane>
					))
				}
			</Tabs>
		</div>
	)
}
```

### Tabs属性介绍
```
value 类型String 绑定的值 默认值0
removeTab 事件 参数Tabs.Pane的name
```

### Tabs.Pane属性介绍
```
closable 类型Boolean 默认false 是否关闭
name 类型String 唯一标识符 默认值0
title 类型String 标题
```
