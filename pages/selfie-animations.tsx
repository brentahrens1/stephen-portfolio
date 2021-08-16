import Image from 'next/image'

export default function selfieAnimations() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={170} layout="responsive" priority src="/motion/selfie-motion.png" alt="test" />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Exploratory selfie animations for instagram</p>
            </div>
            <div className="page__grid">
                <div className="item">
                    <Image width={400} height={300} layout="responsive" priority src="/motion/happy-motion.gif" alt="test" />
                </div>
                <div className="item">
                    <Image width={400} height={300} layout="responsive" priority src="/motion/eye-motion.gif" alt="test" />
                </div>
                <div className="item">
                    <Image width={400} height={300} layout="responsive" priority src="/motion/neon-motion.gif" alt="test" />
                </div>
                <div className="item">
                    <Image width={400} height={300} layout="responsive" priority src="/motion/red-motion.gif" alt="test" />
                </div>
            </div>
        </div>
    )
}