import style from '@/styles/getListedConfirmed.module.css'
import Image from 'next/image'
import Link from 'next/link'

type ConfirmationSectionProp = {
    pageHeading : string
    pageSecondHeading : string
    pageText : string
    ctaButtons? : {path: string, type: string, name: string}[]
}

export default function ConfirmationSection({
    pageHeading,
    pageSecondHeading,
    pageText,
    ctaButtons
}: ConfirmationSectionProp){

    const backgroundImage = "/assets/pageHeroImage.jpg"

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
                    {pageHeading}
                </h1>
                
                <h2
                    className='globalThirdHeading'
                    style={{textAlign:"center"}}
                >
                    {pageSecondHeading}
                </h2>

                <div
                    className='globalText'
                    style={{textAlign:"center"}}
                    dangerouslySetInnerHTML={{__html: pageText}}
                />

                {ctaButtons ? 
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
                : null}
            </div>
        </section>
    )
}