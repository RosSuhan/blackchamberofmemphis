import { BaselineCalendarMonth } from '../icons/Calendar'
import { BaselineLocationOn } from '../icons/Location'
import './Symposium2026Hero.css'

export default function Symposium2026Hero(){
    return(
        <section
            className='symposiumMainPageHero'
        >
            <span>PAST EVENT</span>
            <h1>Look What We Built Together</h1>
            <p>Building Wealth in Our Community Symposium 2026</p>

            <div>
                <div>
                    <BaselineCalendarMonth/>
                    October 2, 2026
                </div>
                <div>
                    <BaselineLocationOn/>
                    Reign Event Venue, Memphis, TN
                </div>
            </div>
            <p>Building Entrepreneur City: Access. Investment. Mobility</p>
        </section>
    )
}