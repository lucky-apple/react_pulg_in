# Menu组件
```
import { NavMenu } from "../components/index"

<NavMenu theme="light" activeIndex="1">
	<NavMenu.Sub title="菜单一" index="1">
		<NavMenu.Group>
			<NavMenu.Item index="1-1">111111111111</NavMenu.Item>
		</NavMenu.Group>
	</NavMenu.Sub>
	<NavMenu.Sub title="菜单二" index="2">
		<NavMenu.Group>
			<NavMenu.Item index="2-1">222222222222</NavMenu.Item>
		</NavMenu.Group>
	</NavMenu.Sub>
</NavMenu>
```

### NavMenu属性介绍
```
theme 主题 类型String 默认值light 可选值: light dark
width 宽度 类型Number 默认值200
activeIndex 选中的值 类型 String 
```

### NavMenu.Sub属性介绍
```
title 标题 类型String
```

### NavMenu.Item属性介绍
```
index 唯一标识符 类型Number
```