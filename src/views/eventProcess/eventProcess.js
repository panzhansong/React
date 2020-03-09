import React from 'react';

export default class EventProcess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    handleClick = (number) =>{
        this.setState({
            number
        })
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='eventProcess'>
                <button onClick={this.handleClick.bind(this,1)}>点我</button>
                <h1>{this.state.number}</h1>
            </div>
        );
    }
}
