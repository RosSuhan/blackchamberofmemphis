import style from '@/styles/getListedConfirmed.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Confirmed(){

    const backgroundImage = "/assets/pageHeroImage.jpg"

    const ctaButtons = [
        {
            path: '/business-directory',
            type: 'globalGoldButton',
            name: 'Directory'
        },
        // {
        //     path: '/',
        //     type: 'globalGoldButton',
        //     name: 'Membership'
        // }, 
        {
            path: '/events',
            type: 'globalGoldButton',
            name: 'Events'
        }
    ]
    return(
        <section
            className={style.confirmedPageSection}
        >
            <Image
                src={backgroundImage}
                alt=''
                width={1400}
                height={500}
                className={style.confirmedBackgroundImage}
            />

            <div
                className={style.confirmedOverlay}
            >
                <h1
                    className='globalMainHeading'
                    style={{textAlign:"center"}}
                >
                    Your Business Has Been Submitted
                </h1>
                
                <h2
                    className='globalThirdHeading'
                    style={{textAlign:"center"}}
                >
                    What Happens Next
                </h2>

                <p
                    className='globalText'
                    style={{textAlign:"center"}}
                >
                    Our team will review your listing.<br/>You will receive confirmation once it&apos;s live
                </p>

                <div
                    className={style.ctaButtonRow}
                >
                    {ctaButtons.map(({path, type, name}, index) => (
                        <Link
                            href={path}
                            className={type}
                            key={index}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}