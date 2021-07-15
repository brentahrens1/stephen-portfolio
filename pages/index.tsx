import Head from 'next/head'

import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import InfoBlock from '../components/InfoBlock/InfoBlock'

export default function Home() {
  return (
    <div className="app">
      <Nav />
      <InfoBlock />
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}
