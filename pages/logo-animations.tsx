import Image from 'next/image'

export default function logoAnimations() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={170} layout="responsive" priority src="/motion/logo-motion.png" alt="test" />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Various Logo Animations</p>
            </div>
            <div className="page__image last">
                <Image width={400} height={340} layout="responsive" priority src="/motion/num-motion.gif" alt="test"  />
            </div>
            <div className="page__image last">
                <Image width={400} height={340} layout="responsive" priority src="/motion/hands-motiion.gif" alt="test"  />
            </div>
        </div>
    )
}