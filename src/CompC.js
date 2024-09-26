import React from 'react'
import{data} from './App'
export default function CompC({name}) {
  return (
    <>
<data.Consumer>
    {
        (value)=>{
            return(
              <h1>My name is{value}</h1>  
            )
        }
    }
</data.Consumer>

</>
  )
}
