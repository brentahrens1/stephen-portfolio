 import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
    const [ navToggle, setNavToggle] = useState(false)
    return (
        <nav className="nav">
            <p><Link href="/"><a>Stephen Galgano</a></Link></p>
            <ul>
                <li><Link href="/design"><a>Design</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
            <div className="nav__burger" onClick={() => setNavToggle(!navToggle)}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
            </div>
            <div className={`overlay ${navToggle ? 'overlay-open' : ''}`}>
                <ul>
                    <li><Link href="/design"><a>Design</a></Link></li>
                    <li><Link href="/about"><a>About</a></Link></li>
                </ul>
                <div className="close" onClick={() => setNavToggle(!navToggle)}>
                    <div className="bar" />
                    <div className="bar" />
                </div>
            </div>
        </nav>
    )
}