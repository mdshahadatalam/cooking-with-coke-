import React from 'react'
import { Nav } from './Component/Nav'
import { Outlet } from 'react-router-dom'
import { Cooking } from './Component/Cooking'
import { LastSec } from './Component/LastSec'

export const RootLayout = () => {
  return (
    <>
    <Nav/>
    <Cooking/>
    <Outlet/>
    <LastSec/>
    </>
  )
}
