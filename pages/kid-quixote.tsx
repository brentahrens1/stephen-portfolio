import Image from 'next/image'

export default function kidQuixot() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" priority={true} src="/images/projects/kid-quixot/kid-banner.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Kid Quixote is a documentary film about a one room classroom in Bushwick where the children of undocumented immigrants collectively translate and adapt Cervantes’ “Don Quixote” into a bilingual musical.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={270} layout="responsive" priority={true} src="/images/projects/kid-quixot/kid-quixot-1.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>The Logo</h2>
                <p>A pitch deck that summarizes the vision of the directors for potential investors while also conveying the spirit of the film using drawings from the children it features.</p>
            </div>
            <div className="page__image">
                <Image width={400} height={20} layout="responsive" priority={true} src="/images/projects/kid-quixot/pencil.png" alt="test"  />
            </div>
            <div className="page__banner banner-last">
                <Image width={400} height={280} layout="responsive" priority={true} src="/images/projects/kid-quixot/kid-quixot-2.png" alt="test"  />
            </div>
            <div className="page__banner">
                <Image width={400} height={270} layout="responsive" priority={true} src="/images/projects/kid-quixot/kid-quixot-3.png" alt="test"  />
            </div>
        </div>
    )
}