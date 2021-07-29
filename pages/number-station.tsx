import Image from 'next/image'

export default function numberStation() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" priority src="/images/projects/number-station/number-station-main.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>A new musical release by Brooklyn Rap Duo Young Planet, “Dog Days” is a 3 song EP that feels like a hot summer&apos;s day. Bouncy production and smooth lyrics paint pictures of trips to the beach, walking on a city street in 90 degree weather with a friend and falling in love.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" priority src="/images/projects/number-station/number-station-grid.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>The Logo</h2>
                <p>A new musical release by Brooklyn Rap Duo Young Planet, “Dog Days” is a 3 song EP that feels like a hot summer&apos;s day. Bouncy production and smooth lyrics paint pictures of trips to the beach, walking on a city street in 90 degree weather with a friend and falling in love.</p>
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" priority src="/images/projects/number-station/number-station-2.png" alt="test"  />
            </div>
            <div className="page__image last">
                <Image width={400} height={280} layout="responsive" priority src="/images/projects/number-station/number-station-3.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>A new musical release by Brooklyn Rap Duo Young Planet, “Dog Days” is a 3 song EP that feels like a hot summer&apos;s day. Bouncy production and smooth lyrics paint pictures of trips to the beach, walking on a city street in 90 degree weather with a friend and falling in love.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" priority src="/images/projects/number-station/number-station-4.png" alt="test"  />
            </div>
        </div>
    )
}