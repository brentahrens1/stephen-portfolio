import Image from 'next/image'

export default function numberStation() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" priority={true} src="/images/projects/number-station/number-station-main.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Number Station is an independent record label who fosters creative ideas and fortifies them with cohesive branding and marketing to help artists achieve a unique fanbase that might have been out of reach on their own.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" priority={true} src="/images/projects/number-station/number-station-grid.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Concept</h2>
                <p>Traditionally a Number Station was a shortwave radio station broadcasting formatted numbers for spies.  Using this concept I blended the idea with the teachings of the Quadrivium (which consists of the four subjects or arts arithmetic, geometry, music, and astronomy. Using this as a foundation the logo is constructed based on the numbers 10,6,1 and 0.</p>
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" priority={true} src="/images/projects/number-station/number-station-2.png" alt="test"  />
            </div>
            <div className="page__image last">
                <Image width={400} height={280} layout="responsive" priority={true} src="/images/projects/number-station/number-station-3.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>The Logo</h2>
                <p>Ten (the outer decagon) represents the basis for counting as well as representing 5 and 5 or “Two Hands” used to play instruments.<br />
                    Six (the inner hexagon) represents creation as well as musical dimensions in mixing (forward, backward, left, right, up and down).<br /> 
                    One (Dot at the center) represents the point of beginning or returning to the one within musical chord progressions.<br />
                    Zero (circle surrounding the dot) represents pre-creation, the absence of all numbers thus the blank moments all creatives face right before an idea occurs.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" priority={true} src="/images/projects/number-station/number-station-4.png" alt="test"  />
            </div>
        </div>
    )
}