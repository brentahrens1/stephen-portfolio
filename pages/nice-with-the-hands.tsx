import Image from 'next/image'

export default function niceHands() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" priority={true} src="/images/projects/nice-hands/nice-hands-banner.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Parts Models NY is the leading model management company specializing in models for body parts. A logo for a represented hand model that uses her catchphrase “Nice With The Hands” for merchandising purposes.</p>
            </div>
            <div className="page__image last">
                <Image width={400} height={340} layout="responsive" priority={true} src="/motion/hands-motiion.gif" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Concept</h2>
                <p>Often hand models are wearing pieces of jewelry such as rings, or displaying cosmetics such as nail polish, here we see a classic hand model “pose” using the pre-existing catphrase “Nice With The Hands” to encapsulate the image. Accented by two stars that reflect the cleanliness of a manicured hand.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={580} layout="responsive" priority={true} src="/images/projects/nice-hands/nice-hands-3.png" alt="test"  />
            </div>
        </div>
    )
}