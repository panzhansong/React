import React from 'react'
import Tab from './views/tab/tab'
import Parent from './views/componentsByValue/parent'
import EventProcess from './views/eventProcess/eventProcess'
import ComponentSolt from './views/componentSolt/componentSolt'
class App extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return (
            <div>
                <Tab/>
                <Parent/>
                <EventProcess />
                <ComponentSolt />
            </div>
            
        )
            
    }
}
export default App