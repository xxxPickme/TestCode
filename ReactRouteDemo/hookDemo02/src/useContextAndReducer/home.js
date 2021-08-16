import React,{useContext} from 'react';
import Btn from './button';
import Show from './showarea';
import {Color,CreateContext} from './color'



function Home(){

    return (
        <div>
            <Color>
                <Btn></Btn>
                <Show></Show>
            </Color>
        </div>
    )
}

export default Home