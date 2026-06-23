import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyAttend from './components/WhyAttend'
import Agenda from './components/Agenda'
import Speakers from './components/Speakers'
import Register from './components/Register'
import Footer from './components/Footer'

export default function App(): React.JSX.Element {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyAttend />
        <Agenda />
        <Speakers />
        <Register />
      </main>
      <Footer />
    </>
  )
}
