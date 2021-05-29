import React from 'react'
import { Wave ,Random} from 'react-animated-text';


const Style = {
    display: 'inline-block',
    marginBottom: '1em',
    padding: '2em 1em 1em 1em',
    width: '80%',
    fontSize: '1.5rem',
    
  }


  export const  TitleAnimationHomeScreen = ()=> {
    return (
        <div style={Style}>
        <Wave text="SALLY T-SHIRT STORE" effect="stretch" effectChange={2.0} />
      </div>
    )
}

export const TitleAnimationCartScreen = ()=>{
  return (
    <div style={Style}>
      <Random
  text="SHOPPING CART"
  effect="jump"
  effectChange={2.0}
  effectDuration={0.3}
/>
  </div>
)
}