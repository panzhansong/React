#### 组件中的传值

######  父组件传自

```
    // 父组件传递给子组件 ---- 主要通过类似于属性传递餐宿
    class Parent extends React.Component {
        constructor () {
            super()
            this.state = {
                name: '父组件'
            }
        }
        render () {
            <div>
                <h1>{this.state.name}</h1>
                <Children name='子组件'/>
            </div>
        }
    }
    class Children extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                name: '子组件'
            }
        }
        render () {
            <div>
                <h1>{this.props.name}</h1>
            </div>
        }
    }

```


##### 子组件传递个父组件

``` js
    
		// 子组件传递给父子件通过父组件讲自己接受子组件的方法通过props绑定到子组件上面
		class Parent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                message: null
            }
        }
        reviceMessage = (msg) => {
            this.setState({
                message: msg
            })
        }
        render () {
            return (
                <h1>父组件</h1>
                <h1>{this.state.message}</h1>
              	<Children reviceMessage = {this.reviceMessage} />
            )
        }
    }

    class Children extends React.Component {
        constructor () {
        }
        sendMessage = () => {
            this.props.reviceMessage('hello world')
        }
        render () {
            return (
                <h1>子组件</h1>
                <button onclick={this.sendMessage}></button>
            )
        }
    }
```