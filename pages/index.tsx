import Head from 'next/head'

import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import InfoBlock from '../components/InfoBlock/InfoBlock'
import ProjectGrid from '../components/ProjectGrid/ProjectGrid'

export default function Home() {
  return (
    <div>
      <Nav />
      <InfoBlock />
      <ProjectGrid />
      <Footer />
    </div>
  )
}
