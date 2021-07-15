 import Link from 'next/link'

export default function Nav() {
    return (
        <nav className="nav">
            <p><Link href="/"><a>Stephen Galgano</a></Link></p>
            <ul>
                <li><Link href="/design"><a>Design</a></Link></li>
                <li><Link href="#"><a>Personal Projects</a></Link></li>
                <li><Link href="/about"><a>About</a></Link></li>
            </ul>
        </nav>
    )
}