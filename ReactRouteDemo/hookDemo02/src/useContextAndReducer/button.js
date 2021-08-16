import React,{useContext,useRef} from 'react';
import {CreateContext} from './color'

function Btn(){

    const reducer = useContext(CreateContext)
    const { dispatch } = reducer
    const testRef = useRef()
    return (
        <div>
            <button onClick={()=>{reducer.dispatch({type:"UPDATA_COLOR",color:"red"});console.log("this.cc",testRef.current)}} ref={testRef}>红色</button>
            <button onClick={()=>{reducer.dispatch({type:"UPDATA_COLOR",color:"blue"})}}>蓝色</button>
        </div>
    )
}

export default Btn