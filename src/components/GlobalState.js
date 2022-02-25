import React, {createContext, useReducer} from 'react';
import reducer from './reducer';

const initializer = {
   basket: []
}

export const GlobalStateContext = createContext(initializer);

export const GlobalState = ({children}) =>{

   return <GlobalStateContext.Provider value = {useReducer(reducer,initializer)}>
      {children}
   </GlobalStateContext.Provider>;
}