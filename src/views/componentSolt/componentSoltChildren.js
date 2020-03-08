import React, { Component } from 'react'

export default class componentSoltChildren extends Component {
    render() {
        let headerCom,mainCom,footerCom
        this.props.children.forEach((item) => {
            if(item.props['data-position'] === 'header'){
                headerCom = item
            }else if (item.props['data-position'] === 'main') {
                mainCom = item
            }else {
                footerCom = item
            }
        })
        return (
            
            <div>
                <div className='header'>
                    {headerCom}
                </div>
                <div className='main'>
                    {mainCom}
                </div>
                <div className='footer'>
                    {footerCom}
                </div>
            </div>
        )
    }
}
