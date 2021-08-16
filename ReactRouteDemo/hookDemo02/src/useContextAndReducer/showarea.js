import React,{useContext} from 'react';
import {CreateContext} from './color'



function Show(){
    const color = useContext(CreateContext)
    console.log("show.color is ",color)
    return (
        <div>
            <div style={{color:color.color}}>now here we are {color.color}</div>
        </div>
    )
}

export default Show