import Image from 'next/image'

export default function InfoBlock() {
    return (
        <div className="info-block">
            <div>
                <p>Hi, I&#39;m Stephen. I&#39;m a multidisciplinary designer and visual thinker from New York, utilizing my keen eye for imaginative visual language to create design systems with purpose.</p>
                <p>Browse my latest projects below, View my resume or say hey.</p>
            </div>
            <div className="info-block__image">
                <Image src='/images/Stephen/july-home.png' width={380} height={780} layout="responsive" alt="Stephen Galgano | Portfolio" />
            </div>
        </div>
    )
}