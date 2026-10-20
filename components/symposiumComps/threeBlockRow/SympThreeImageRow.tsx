import Image from 'next/image'
import './SympThreeImageRow.css'

export default function SympThreeImageRow(){
    return (
        <section
            className='threeImageRowSection'
        >
            <div
                className='threeImageBlock'
            >
                <Image
                    src={'/events/symposium/2026-event/Symposium-panel-1.jpg'}
                    alt=''
                    width={8192}
                    height={5464}
                    className='threeImageRowPicture'
                />

                <div
                    className='threeImageRowOverlay'
                >
                    <h2
                        className='threeImageHeading'
                    >
                        ACCESS
                    </h2>
                    <p
                        className='threeImageText'
                    >
                        Expanding access to capital, contracts and resources.
                    </p>
                </div>
            </div>

            <div
                className='threeImageBlock'
            >
                <Image
                    src={'/events/symposium/2026-event/symposium-image-2.webp'}
                    alt=''
                    width={1024} //1024 × 683
                    height={683}
                    className='threeImageRowPicture'
                />
                <div
                    className='threeImageRowOverlay'
                >
                    <h2
                        className='threeImageHeading'
                    >
                        INVESTMENT
                    </h2>
                    <p
                        className='threeImageText'
                    >
                        Fueling business growth and community opportunity.
                    </p>
                </div>
            </div>

            <div
                className='threeImageBlock'
            >
                <Image
                    src={'/events/symposium/2026-event/symposium-image-1.webp'}
                    alt=''
                    width={1024} //1024 × 683
                    height={683}
                    className='threeImageRowPicture'
                />

                <div
                    className='threeImageRowOverlay'
                >
                    <h2
                        className='threeImageHeading'
                    >
                        MOBILITY
                    </h2>
                    <p
                        className='threeImageText'
                    >
                        Creating pathways for long-term economic mobility.
                    </p>
                </div>
            </div>
        </section>
    )
}