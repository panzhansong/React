import React from 'react'

export default class Children extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: null
        }
    }
    sendMsg = () => {
        this.props.receiveMessage('helloworld')
    }
    render () {
        return (
            <div className='children'>
                <h2>{this.props.name}</h2>
                <button onClick={this.sendMsg}>发消息给父组件</button>
            </div>
        )
    }
}