# 按钮插件

### 使用方式
```
export default class Main extends React.Component {
    onClick() {
        alert(1)
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.onClick.bind(this)}>213321</Button>
            </div>
        )
    }
}
```

### 属性介绍
```
type 类型String 默认值default 可取值：primary
```