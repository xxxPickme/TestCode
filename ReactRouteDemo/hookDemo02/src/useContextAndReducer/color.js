import React,{useContext,createContext, useReducer} from 'react';


export const CreateContext = createContext()


// export  const Color = props=>{
//     const color = useContext(CreateContext)
//     console.log("Color.props is ",props)
//     return (
//         <CreateContext.Provider value={{color:"blue"}}>
//             {props.children}
//         </CreateContext.Provider>
//     )
// }

export const reducer = (state,action)=>{
    switch(action.type){
        case "UPDATA_COLOR" :
            return action.color
        default: return state
    }
}


export  function Color (props){
    // const color = useContext(CreateContext)
    const [ color,dispatch ] = useReducer(reducer,"#ae4000")
    console.log("Color.props is ",props)
    return (
        <CreateContext.Provider value={{color,dispatch}}>
            {props.children}
        </CreateContext.Provider>
    )
}

