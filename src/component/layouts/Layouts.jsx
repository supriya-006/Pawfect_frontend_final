import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footers from './Footers'

const Layouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footers/>
   
    </>
  )
}

export default Layouts