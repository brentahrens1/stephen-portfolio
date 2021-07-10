import Head from 'next/head'

import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import InfoBlock from '../components/InfoBlock/InfoBlock'

export default function Home() {
  return (
    <div>
      <Nav />
      <InfoBlock />
      <Footer />
    </div>
  )
}
