import React, { useReducer, createContext } from 'react';


export default (reducer, actions, stateObject) => {
    const Context = createContext();
    const Provider = ({children}) => {
        const [state, dispatch] =  useReducer(reducer, "");
        const boundActions = {};
        for(const key in actions){
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{ state, ...boundActions, stateObject}}>
                {children}
               </Context.Provider>
    }
    return { Context, Provider };
};