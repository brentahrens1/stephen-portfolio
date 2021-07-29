import Image from 'next/image'

export default function numberStation() {
    return (
        <div className="page">
            <div className="page__banner">
                <Image width={400} height={190} layout="responsive" src="/images/projects/prickly-pear/pp-banner.png" alt="test" />
            </div>
            <div className="page__content">
                <h2>Context</h2>
                <p>Prickly Pear is a plant nursery in Montreal, Quebec. They were founded in 2014 by two sisters who studied Agriculture and Biology in university. They named the nursery after their favourite cactus, the prickly pear.  Their target audience is young to middle-aged city dwellers that dream of turning their apartments into lush urban jungles. After 5 years in business, the owners had brand elements they’d like to retain and ones they’re ready to let go of, and wanted to rebrand their company to better represent their product offering.</p>
            </div>
            <div className="page__banner">
                <Image width={400} height={260} layout="responsive" src="/images/projects/prickly-pear/pp-2.png" alt="test"  />
            </div>
            <div className="page__content">
                <h2>Concept</h2>
                <p>The re-branded visual identity is centered around the flower that the Prickly Pear Cactus bears, and the logo is paired together with a wordmark that has a sharp / prickly quality to itself. Using a more organic shape to construct the logo we’re able to size up or down way more confidently compared to the original detailed illustration. The custom graphic elements were also re-designed to have the same filled feel in comparison to the original half outlined half filled assets.</p>
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" src="/images/projects/prickly-pear/pp-3.png" alt="test"  />
            </div>
            <div className="page__image">
                <Image width={450} height={160} layout="responsive" src="/images/projects/prickly-pear/pp-4.png" alt="test"  />
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" src="/images/projects/prickly-pear/pp-1.png" alt="test"  />
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" src="/images/projects/prickly-pear/pp-7.png" alt="test"  />
            </div>
            <div className="page__image">
                <Image width={400} height={280} layout="responsive" src="/images/projects/prickly-pear/pp-5.png" alt="test"  />
            </div>
            <div className="page__banner">
                <Image width={400} height={280} layout="responsive" src="/images/projects/prickly-pear/pp-1.png" alt="test"  />
            </div>
        </div>
    )
}