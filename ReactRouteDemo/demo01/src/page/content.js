// import { Fragment } from "react";
import React, { Component,Fragment } from 'react';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("this.props",this.props)
        const { match } = this.props
        const id = match.params.id
        return (  
            <Fragment>
                
                {id}
            </Fragment>
        );
    }
}
 
export default Content;