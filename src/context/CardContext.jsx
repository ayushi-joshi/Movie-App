import { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";
const CardContext=createContext();
export const CardProvider=({children}) =>{
    const initialState={

movies:[],
genres:[]
};
const[state, cardDispatch]=useReducer(CardReducer, initialState)
return(
    <CardContext.Provider value={{...state, cardDispatch}}>
    {children}
    </CardContext.Provider>
)
};
export default CardContext