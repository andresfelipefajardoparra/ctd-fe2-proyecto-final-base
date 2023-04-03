import React, {  ComponentType } from 'react'
import {} from './styled'

const WithColorSwap =<T extends {}> (Component: ComponentType<T>) => {
  // lo ideal es realizar algun tipo de logica 
  return(props: T) => {
    return (
    <div className='color-swap'>
    <Component{...props}/>
    </div>
  )
    }
}

export default WithColorSwap