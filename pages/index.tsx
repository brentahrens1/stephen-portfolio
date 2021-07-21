import Head from 'next/head'

import InfoBlock from '../components/InfoBlock/InfoBlock'
import ProjectGrid from '../components/ProjectGrid/ProjectGrid'

export default function Home() {
  return (
    <div className="app">
      <InfoBlock />
      <ProjectGrid />
    </div>
  )
}
