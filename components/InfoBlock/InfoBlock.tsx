import Image from 'next/image'

export default function InfoBlock() {
    return (
        <div className="info-block">
            <div>
                <p>Hi, I&#39;m Stephen. I&#39;m a multidisciplinary designer<br /> and visual thinker from New York, utilizing my<br /> keen eye for imaginative visual language to<br /> create design systems with purpose.</p>
                <p>Browse my latest projects below,<br />view my <a className="link" href="/resume/STEPHEN_GALGANO_GD_RESUME_2021.pdf" target="_blank" rel="noreferrer">resume</a> or say <a className="link" href="mailto:stephenjgalgano@gmail.com" target="_blank" rel="noreferrer">hey</a>.</p>
            </div>
            <div className="info-block__image">
                <Image src='/images/Stephen/july-home.png' width={590} height={1100} layout="responsive" priority alt="Stephen Galgano | Portfolio" />
            </div>
        </div>
    )
}