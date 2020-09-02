import React, { createContext, useContext, useReducer } from 'react'


export const StateContext = createContext(); //data layer will live here

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);//this is the data layer...hoc

export const useStateValue = () => useContext(StateContext)//pull information from data layer