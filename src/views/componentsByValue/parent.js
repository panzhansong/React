import React from 'react'

import Children from './children'
class Parent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '父组件',
            msg: null
        }
    }
    receiveMessage = (msg) => {
        console.log(msg)
        this.setState({
            msg
        })
    }
    render () {
        return (
            <div className='parent'>
                <h1>{this.state.name}</h1>  
                <h1>{this.state.msg}</h1>
                <Children name='子组件' receiveMessage={this.receiveMessage} />
            </div>
        )
    }
}
export default Parent