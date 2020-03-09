import React, { Component } from 'react'


class dynamicRouter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id: null
        } 
    }
    componentDidMount () {
        this.setState({
            id:this.props.match.params.id
        })
    }
    render() {
        return (
            <div>
                <h1>id:{this.state.id}</h1>
            </div>
        );
    }
}

export default dynamicRouter;