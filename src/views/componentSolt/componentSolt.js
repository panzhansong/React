import React from 'react'

import ComponentSlotChildren from './componentSoltChildren'
export default class ComponentSlot extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return (
            <div>
                <h1>组件插槽</h1>
                <ComponentSlotChildren>
                    <h1 data-position='header'>这是放置在头部的内容</h1>
                    <h1 data-position='main'>这是放置在主要的内容</h1>
                    <h1 data-position='footer'>这是放置在底部的内容</h1>
                </ComponentSlotChildren>
            </div>
        )
    }
}
