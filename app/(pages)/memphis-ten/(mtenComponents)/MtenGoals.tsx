
import style from '@/styles/mtenGoals.module.css'
import Image from 'next/image'

const goals = [
    {
        key: "jobImage",
        link: '/assets/MemphisTen-Jobs.webp',
        alt: 'MemphisTen 8 000+ Jobs Created'
    }, 
    {
        key: 'movementImage',
        link: '/assets/MemphisTen-movement.webp',
        alt: 'MemphisTen Economic Movement'
    }, 
    {
        key: 'payrollImage',
        link: '/assets/memphisTen-payroll.webp',
        alt: 'MemphisTen $120M+ New Payroll'
    }, 
    {
        key: 'entrepreneurImage',
        link: '/assets/memphisten-entrepreneurs.webp',
        alt: 'MemphisTen 10 000 Entrepreneurs Supported'
    }]

export default function MTenGoals(){
    return(
        <section
            className={style.mtenGoalsSection}
        >
            {goals.map(({key, link, alt}) => (
                <Image
                    key={key}
                    src={link}
                    alt={alt}
                    width={300}
                    height={70}
                    className={style.mtenGoalsImage}
                />
            ))}

            <p
                className={style.mtenGoalsCaption}
            >
                MemphisTEN is building an inclusive economy through measurable, community-driven impact.
            </p>
        </section>
    )
}

// 10,000 Entrepreneurs Supported
//  8,000+ Jobs Created
//  $120M+ New Payroll
//  1 Citywide Economic Movement
// Short paragraph:
// MemphisTEN is building an inclusive economy through measurable, community-driven impact.
