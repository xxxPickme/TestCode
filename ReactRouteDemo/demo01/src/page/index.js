import React, { Component } from 'react';




class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return ( 
            <div>
                <div ref={(r)=>this.rr=r}>1233</div>
                <button onClick={()=>{
                    console.log("ref",this.rr)
                }}>ref</button>
                首页
            </div>
        )
    }
}
 
export default Index;