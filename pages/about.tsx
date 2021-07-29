import Image from 'next/image'

export default function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="profile">
                    <Image width={600} height={750} layout="responsive" priority src="/images/about/stephen-about.png" alt="test" />
                </div>
                <div className="brand">
                    <div className="brand__inner">
                        <h1>Who is Stephen Galgano?</h1>
                        <h2>I&apos;m a Multi-disciplinary Desinger & Visual Thinker from New York</h2>
                        <p>Relentlessly pursuing new ways to communicate, collaborate and connect with people through design and music.</p>
                        <button><a href="#">View Resume</a></button>
                    </div>
                </div>
            </div>
            <div className="about__info">
                <h2>A Bit More About Me...</h2>
                <p className="blurb">Lover of Logos, Hoodies, Details, Branding, Audio Engineering, Meditation, Typography, Cinematography and Carl Sagan.</p>
            </div>
            <div className="about__content">
                <h2>Currently:</h2>
                <div className="grid">
                    <div className="item">
                        <h2>Learning</h2>
                        <p>Digital Project Management And Spanish.</p>
                    </div>
                    <div className="item">
                        <h2>Contemplating </h2>
                        <p>Quiet Over Loudness </p>
                    </div>
                    <div className="item">
                        <h2>Listening</h2>
                        <p>Sun Ra - Lanquidity<br /> Frank Ocean - Blond<br /> Pescado Rabioso - Artaud</p>
                    </div>
                </div>
                <p></p>
            </div>
            <div className="about__contact">
                <h2 className="header">Want to collaborate or discuss Frank Ocean’s “Boys Don’t Cry” Magazine Layout?</h2>
                <h2>Let’s Talk</h2>
                <p><a href="mailto:stephenjgalgano@gmail.com" target="_blank" rel="noreferrer">stephenjgalgano@gmail.com</a></p>
            </div>
        </div>
    )
}