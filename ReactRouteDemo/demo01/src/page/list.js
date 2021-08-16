import React, { Component } from 'react';
import { Link } from 'react-router-dom'




class List extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list :[
                "123",
                "456",
                "789"
            ]
        }
    }
    render() { 
        return ( 
            <div>
                <ul>
                    {
                        this.state.list&&this.state.list.map((item,index)=>{
                            return <div key={index}><Link to={"/list/"+item}>{item}</Link></div>
                        })
                    }
                </ul>
            </div>
        );
    }
}
 
export default List;