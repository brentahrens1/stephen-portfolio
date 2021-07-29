import Image from 'next/image'

export default function dogDays() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" src="/images/projects/young-planet/dog-days-header.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>A new musical release by Brooklyn Rap Duo Young Planet, “Dog Days” is a 3 song EP that feels like a hot summer's day. Bouncy production and smooth lyrics paint pictures of trips to the beach, walking on a city street in 90 degree weather with a friend and falling in love.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" src="/images/projects/young-planet/dog-days-1.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Concept</h2>
                <p>A fun interactive web release that showcases the 3 songs and the playful nature of the group. Information resides on the right side panel, while using call to action to engage moving images in the window to the left. This helps tell the story as well as shed bounce rates.</p>
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" src="/images/projects/young-planet/dog-days-2.png" alt="test"  />
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" src="/images/projects/young-planet/dog-days-3.png" alt="test"  />
            </div>
        </div>
    )
}