import Image from 'next/image'
import './featureStory.css'
import Link from 'next/link'

export default function FeatureStory(){
    const featureStory = [
        {
            image : '/events/symposium/2026-event/mayor-paul-young-5.jpg',
            alt : 'Mayor Paul Young talking at the Black Chamber of Memphis Symposium 2026',
            width : 8192,  //8192 × 5464
            height : 5464,
            featureHeading : 'Mayor Paul Young Building Entrepreneur City',
            featureText : 'Mayor Paul Young reinforced the importance of entrepreneurship to Memphis economic future and challenged the public and private sectors to work together.',
            featureReadLink : '/past-events/symposium-2026/mayor-paul-young-connects-entrepreneurship-to-memphis-economic-future'
        },
        {
            image : '/events/symposium/2026-event/steven-cohen-3.jpg',
            alt : 'Congressman Steven Cohen talking at the Black Chamber of Memphis Symposium 2026',
            width : 5464,  //5464 × 8192
            height : 8192,
            featureHeading : 'Congressman Steve Cohen Community Champion',
            featureText : 'The Black Chamber of Memphis recognized Congressman Steve Cohen as the inaugural recipient of the Steve Cohen Community Champion.',
            featureReadLink : '/past-events/symposium-2026/congressman-steve-cohen-honored-as-inaugural-steve-cohen-community-champion'
        },
    ]

    return (
        <section
            className='featureStorySection'
        >
            <h2
                className='featureStoryHeading'
            >
                Featured Stories
            </h2>
            <p
                className='featureStoryText'
            >
                Two defining moments from the 2026 Symposium
            </p>

            <div
                className='featureStorySelectionRow'
            >
                {featureStory.map((story, index) => (
                    <div
                        className='featureStoryBlock'
                        key={index}
                    >
                        <div
                            className='featureStoryImageBlock'
                        >
                            <Image
                                src={story.image}
                                alt={story.alt}
                                width={story.width}
                                height={story.height}
                                className='featureStoryImage'
                                // fill
                            />
                        </div>
                        <div
                            className='featureTextBlock'
                        >
                            <h3
                                className='featureTextHeading'
                            >
                                {story.featureHeading}
                            </h3>
                            <p
                                className='featureText'
                            >
                                {story.featureText}
                            </p>
                            <Link
                                href={story.featureReadLink}
                                className='featureStoryLink'
                            >
                                Read The Full Recap 
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}