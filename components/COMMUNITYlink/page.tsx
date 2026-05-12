import Link from 'next/link'
import BigButton from './CommunityComponents/bigButton'
import style from './communityLinkSection.module.css'

export default function CommunityLinkSection(){
    return (
        <section
            className={style.communityLinkSection}
        >
            <h2
                className='globalSecondHeading'
                style={{textAlign:'center'}}
            >
                News and Information From Our Community
            </h2>

            <div
                className={style.linkRow}
            >
                <BigButton
                    path = {''}
                    name = {'Insights'}
                />

                <BigButton
                    path = {''}
                    name = {'Event Highlight'}
                />

                <BigButton
                    path = {''}
                    name = {'Community News'}
                />
            </div>

            <div
                className={style.linkRow2}
                style={{paddingTop:"2rem"}}
            >
                <h2
                    className='globalSecondHeading'
                >
                    New to business or just getting started?
                </h2>

                <Link
                    href={''}
                    className='globalGoldButton'
                >
                    Start Your Journey
                </Link>
            </div>
        </section>
    )
}