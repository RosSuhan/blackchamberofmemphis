import Link from 'next/link'
import './sympAIMcta.css'

export default function SympAIMcta(){
    return (
        <section
            className='sympAIMctaSection'
        >
            <div
                className='sympAIMctaHeadingBlock'
            >
                <span
                    className='sympAIMGoldSpan'
                >
                    THE WORK CONTINUES
                </span>
                <h2
                    // className='sympAIMHeading'
                    className='globalSecondHeading'
                    style={{color:'var(--white)'}}
                >
                    Keep AIMing Forward
                </h2>
            </div>

            <div
                className='sympAIMctaButtonBlock'
            >
                <p
                    className='sympAIMctaText'
                >
                    Thank you to everyone who attended, sponsored, spoke and supported the Symposium. Together, we are building a stronger, more prosperous Memphis - and this is only the beginning.
                </p>
                <Link
                    href={''}
                    className='globalGoldButton'
                >
                    Stay Connected
                </Link>
            </div>
        </section>
    )
}