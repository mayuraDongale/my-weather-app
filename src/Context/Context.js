import React, { useReducer , useContext} from 'react'
import { Reducer } from './Reducer';
const WeatherAPPContext = React.createContext();

function Context({children}) {
   const [state,dispatch] = useReducer (Reducer,{
    city:'',
    current:'',
    daily:'',
   })
  return (
    <>
    <WeatherAPPContext.Provider value={{state,dispatch}}>
        {children}
        </WeatherAPPContext.Provider>
    </>
  )
}

export default Context
export const UseWeatherAPPContext = ()=>{
    return useContext(WeatherAPPContext)
}