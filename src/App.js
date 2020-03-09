import React from 'react'
/**
 * Hash 模式
 */
// import { HashRouter as Router, Link, Route} from 'react-router-dom'

/**
 * History 历史模式
 */
import { BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import Home from './views/Home/Home'
import Tab from './views/tab/tab'
import Parent from './views/componentsByValue/parent'
import EventProcess from './views/eventProcess/eventProcess'
import ComponentSolt from './views/componentSolt/componentSolt'
import DynamicRouter from './views/dynamicRouter/dynamicRouter'
import Counter from './views/counter/counter'
class App extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return (
            <div id='app'>
                <Router basename='admin'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>    |
                        <Link to='/tab'>Tab</Link>  |
                        <Link to='/parent'>Parent</Link>    |
                        <Link to='/eventProcess'>EventProcess</Link>    |
                        <Link to='/componentSolt'>DynamicRouter</Link>  |
                        <Link to='/dynamicRouter/11'>DynamicRouter</Link>  |
                        <Redirect to='/'>重定向</Redirect>
                        <Redirect to='/counter'>计数器</Redirect>
                    </div>
                    { /** 如果要精确匹配需要在 Route 上面 加上 exact属性 */}
                    <Switch>
                    { /** Switch组件中Route组件 只匹配一次 */}
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/tab' exact component={Tab}></Route>
                        <Route path='/parent' exact component={Parent}></Route>
                        <Route path='/eventProcess' exact component={EventProcess}></Route>
                        <Route path='/componentSolt' exact component={ComponentSolt}></Route>
                        <Route path='/dynamicRouter/:id' exact  component={DynamicRouter}></Route>
                        <Route path='/counter' exact  component={Counter}></Route>
                    </Switch>
                    
                </Router>
            </div>
            
        )
            
    }
}
export default App