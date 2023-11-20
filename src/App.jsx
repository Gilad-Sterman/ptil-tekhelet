import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import hero from './assets/img/sky_hero.jpg'
import { SideBar } from './cmps/SideBar'
import { AppHeader } from './cmps/AppHeader'
import { PageSelect } from './pages/PageSelect'

function App() {
  const [selected, setSelected] = useState('heb')

  return (
    <>
      <section className='full-Page'>
        <AppHeader selected={selected} setSelected={setSelected} />
        <PageSelect selected={selected} />
      </section>
    </>
  )
}

export default App
