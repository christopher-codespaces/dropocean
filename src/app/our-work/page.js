import React from 'react'
import CTA from '../../components/CTA'
import NavBar from '../../components/NavBar'
import { Rasta } from '../../components/Rasta'
import Portfolio from '../../components/Portfolio'
import Projects from '../../components/Projects'


function page() {
  return (
    <>
        <CTA/>
        <Portfolio/>
        <Projects/>
    </>
  )
}

export default page
