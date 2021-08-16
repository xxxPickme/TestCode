import React, { Component, useState,useEffect,createContext,useContext,useReducer } from 'react';
import { BrowserRouter as Router,Link, Route } from 'react-router-dom'


const CreateContext = createContext()

function Index(){
    const a = useContext(CreateContext)
    console.log("index",useContext)
    return <div>首页组件</div>
}


function Second(){
    useEffect(()=>{
        console.log("useEffect-Second",)
        return ()=>{
            console.log('老弟，你走了!Second页面')
        }
    },[])
    return <div>第二页组件</div>
}

function App (){

    let [ test,setCount ] = useState(1)
    let [ test1,setCount1 ] = useState(3)
    // const arr = ["aa",aaa,3];
    // const [b,c] = arr
    // console.log("arr",b,c)
    let a = 1
    useEffect(()=>{
        console.log("App-useEffect",test,test1)
        return ()=>{
            console.log('老弟，你走了!App页面')
        }
    })

    const [ count , dispatch ] = useReducer((state1,action1)=>{
        console.log("useReducer.state1 is" ,state1)
        return  console.log("action1",action1,"state1",state1);
        
    },123456)
    // setTimeout(()=>{
    //     console.log("useReducer.count is" ,count)
    // },0)
    const tt = {
        123:"1",
        qaa:"456"
     }
    return (
        <div>
            <div>ni click {test} and { test1 }</div>
            <button onClick={addBtn}>add</button>
            <div>Now number is {count}</div>
            {/* <Router>
                <div><Link to="/">首页</Link></div>
                <div><Link to="/second">第二页</Link></div>
                <Route path="/" exact component={Index}></Route>
                <Route path="/second" component={Second}></Route>
            </Router> */}
            <CreateContext.Provider value={tt}>
                <Index/>
            </CreateContext.Provider>
        </div>
    )
    function addBtn (){
        setCount(test+1);
        if(true){
            setCount1(test1+2)
        }
        a++;
        dispatch("123")
        
    }
}


export default App