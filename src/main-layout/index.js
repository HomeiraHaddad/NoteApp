import React from 'react'
import Footer from '../components/footer'

const MainLayout = ({children}) => {
  return (
    <main className='w-100 d-flex flex-column align-items-center'>
      {children}
      <Footer/>
    </main>
  )
}

export default MainLayout