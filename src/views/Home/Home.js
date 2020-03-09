import React from 'react'
export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: 'I am an Home page'
        }
    }
    render() {
        return (
            <div className='home'>
                <h1>{ this.state.name }</h1>
            </div>
        )
    }
}


