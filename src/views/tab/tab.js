import React, { Component } from 'react'
import './tab.scss'

class Tab extends Component {
    constructor (props) {
        super(props)
        this.state = {
            content1: 'content active',
            content2: 'content'
        }
        // this.clickEvent = this.clickEvent.bind(this)
    }
    clickEvent = (event) => {
        if(event.target.dataset.index === '1') {
            this.setState({
                content1: 'content active',
                content2: 'content'
            })
        }else{
            this.setState({
                content1: 'content',
                content2: 'content active'
            })
        }
        console.log(event.target.dataset.index)
    }
    render() {
        const { content1, content2 } = this.state
        return (
            <div className='tab'>
                <button onClick={this.clickEvent} data-index='1'>内容一</button>
                <button onClick={this.clickEvent} data-index='2'>内容二</button>
                <div className={content1}>我是内容一</div>
                <div className={content2}>我是内容二</div>

            </div>
        )
    }
}
export default Tab