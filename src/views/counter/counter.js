import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import store from '../../store'
export default class counter extends Component {
    add = () => {
        store.dispatch({type:'add'})
    }
    decrement = () => {
        store.dispatch({type:'decrement'})
    }
    render() {
        return (
            <div>
                <h1>numuber:{store.getState().number}</h1>
                <button onClick={this.add}>加一</button>
                <button onClick={this.decrement}>减一</button>
            </div>
        )
    }
}
