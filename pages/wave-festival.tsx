import Image from 'next/image'

export default function waveFestival() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" priority src="/images/projects/wave-festival/wave-banner.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Wave Festival is where art and craft meet across Auckland, New Zealand. The Festival is the largest cultural celebration of arts + crafts with over 100 exhibitions and events forming Auckland’s design week. This was a study meant to be an exploratory learning experience.</p>
            </div>
            <div className="page__image last">
                <Image width={400} height={550} layout="responsive" priority src="/images/projects/wave-festival/wave-2.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Concept</h2>
                <p>Create a poster that showcases balance, hierarchy, color palette and type pairing. The mission to depict a city surrounded by water that was reminiscent of a collage was intentionally made using only squares, circles, triangles and various drop shadows to tie in with the arts and crafts theme.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" priority src="/images/projects/wave-festival/wave-3.png" alt="test"  />
            </div>
        </div>
    )
}