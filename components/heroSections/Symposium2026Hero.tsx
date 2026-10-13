import { BaselineCalendarMonth } from '../icons/Calendar'
import { BaselineLocationOn } from '../icons/Location'
import './Symposium2026Hero.css'

export default function Symposium2026Hero(){
    return(
        <section
            className='symposiumMainPageHero'
        >
            <div
                className='symposiumMainPageHeroOverlay'
            >
                <span
                    className='pastEventSpan'
                >
                    PAST EVENT
                </span>
                <h1
                    className='heroMainHeading'
                >
                    Look What We Built Together
                </h1>
                <p
                    className='heroSupportText'
                >
                    Building Wealth in Our Community Symposium 2026
                </p>
                <div
                    className='heroTimeRow'
                >
                    <div
                        className='heroTimeBlock'
                    >
                        <BaselineCalendarMonth
                            className='heroTimeIcon'
                        />
                        October 2, 2026
                    </div>
                    <div
                        className='heroTimeBlock'
                    >
                        <BaselineLocationOn
                            className='heroTimeIcon'
                        />
                        Reign Event Venue, Memphis, TN
                    </div>
                </div>
                <p
                    className='heroSubText'
                >
                    Building Entrepreneur City: Access. Investment. Mobility
                </p>
            </div>
        </section>
    )
}