# 使用方式
```
constructor(props) {
	super(props)
	this.state = {
		form: {
			value: ""
		}
	}
}

onChange(key, value) {
	this.setState({
		form: Object.assign({}, this.state.form, { [key]: value })
	});
}

render() {
	return (
		<div>
			<Input value={this.state.form.value} style={{width: "100px"}} 
				showwordlimit="on" placeholder="提示" onChange={this.onChange.bind(this, "value")}
				maxLength={10}
			/>
		</div>
	)
}
```

### 属性介绍
```
value 类型String 绑定的值
style 样式
showwordlimit 类型String 表示是否显示输入字数 默认值: off 可选值on,off
placeholder 类型String 输入框提示
disabled 类型boolean 是否禁用
maxLength 类型number 输入最大长度
onChange事件 参数input的value
```