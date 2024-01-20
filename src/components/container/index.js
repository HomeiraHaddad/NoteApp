import React from 'react'

const Container = ({children}) => {
  return (
    <div className='d-flex flex-column align-itames-center justify-content-center w-50'>
        {children}
    </div>
  )
}

export default Container