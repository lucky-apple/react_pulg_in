# 布局组件的使用

### 第一种方式
```
import Container from "../components"

<Container>
	<Container.Aside width="200px">Aside</Container.Aside>
	<Container>
		<Container.Header>Header</Container.Header>
		<Container.Main>Main</Container.Main>
		<Container.Footer>Footer</Container.Footer>
	</Container>
</Container>
```

### 第二种方式
```
<Container>
	<Container.Header>Header</Container.Header>
	<Container.Main>Main</Container.Main>
	<Container.Footer>Footer</Container.Footer>
</Container>
```

### Container.Aside属性介绍
```
width 类型String 默认值200 宽度
```

### Container.Header属性介绍
```
height 类型String 默认值60px 高度
```

### Container.Footer属性介绍
```
height 类型String 默认值60px 高度
```