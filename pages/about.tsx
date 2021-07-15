export default function About() {
    return (
        <div className="about">
            <div className="about__top">
                <div className="profile">
                    <img src="/images/about/stephen-about.png" />
                </div>
                <div className="brand">
                    <div className="brand__inner">
                        <h2>Idenity Design</h2>
                        <h2>Brand Strategy</h2>
                        <h2>Design & Art</h2>
                        <h2>Social Media</h2>
                        <h2>Direction</h2>
                        <h2>Digital</h2>
                        <h2>Print</h2>
                    </div>
                </div>
            </div>
            <div className="about__content">
                <h2>About Me</h2>
                <p className="blurb"> I'm a multidisciplinary designer and visual thinker from New York, utilizing my keen eye for imaginative visual language to create design systems with purpose.</p>
            </div>
            <div className="about__content">
                <h2>Contact</h2>
                <div className="links">
                    <p><a href="#">stephenjgalgano@gmail.com</a></p>
                    <p><a href="#">Linkedin</a></p>
                    <p><a href="#">View Resume</a></p>
                </div>
                <p></p>
            </div>
        </div>
    )
}