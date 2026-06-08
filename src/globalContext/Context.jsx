import React from 'react'
import { createContext , useContext ,useState} from 'react'

    const context = createContext();


export const Context = ({children}) => {
  const [mode , setMode]= useState(false);
  return (
    <context.Provider value={{ mode, setMode}}>
            {children}
    </context.Provider>
  );
;}
export const useMode = ()=> useContext(context);
