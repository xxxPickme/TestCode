import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Link } from 'react-router-dom'
import Base from './page/index'
import List from './page/list'
import Content from './page/content'

// function BasePage (props){
//     console.log("props",props)
//     return <div>首页</div>
// }

// function ListRoute (props){
//     console.log("props",props)
//     return <div>路由列表</div>
// }



function App () {


        return (
            <Router>
                <Link to="/">首页</Link>,
                <Link to="/list">列表</Link>
                <Route path="/" exact component={Base}></Route>
                <Route path="/list/" component={List}></Route>
                <Route path="/list/:id" component={Content}></Route>
            </Router>
        )
    
}
 
export default App;
