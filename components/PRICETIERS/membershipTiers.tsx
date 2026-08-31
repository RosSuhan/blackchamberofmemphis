import Image from 'next/image'
import style from './membershipTiers.module.css'
import PriceTier from './page'

export default function MembershipTiers(){
    const startingTiers = [
        {
            id : 'solopreneur',
            tierName : 'Solopreneur',
            tierPrice : '500',
            tierTerm : 'Annually',
            tierIntroHeading : 'Independent owners operating without employees or a formal team',
            tierIntroText : '',
            tierListItem : [
                'Member profile in online directory,',
                'Procurement opportunity notifications,',
                'Invitations to select programs and events,',
                'Member pricing on Quarterly Growth Labs,',
                'Access to BCoM business resource library'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        },
        {
            id : 'small-bus',
            tierName : 'Small Business',
            tierPrice : '1,000',
            tierTerm : 'Annually',
            tierIntroHeading : '1-10 employees seeking scalable growth, connections, and resources',
            // tierIntroText : '',    
            tierListItem : [
                'Complimentary Quarterly Growth Labs,',
                'Small Business Peer Network opportunity,',
                'Priority registration for training and workshops,',
                'Business spotlight and milestone recognition opportunities,',
                'Affinity partner discounts,',
                '4 complimentary admissions to select programs and events',
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        }
    ]

    const featureTier = [
        {
            id : 'exec-bus',
            tierName : 'Executive Business',
            tierPrice : '2,500',
            tierTerm : 'Annually',
            tierIntroHeading : 'Greater visibility, strategic connections, and leadership engagement',
            // tierIntroText : '',
            // tierListHeading : '',
            tierListItem : [
                'Semi-annual Executive Leadership Roundtables,',
                'Priority introductions to funders, corporate buyers, and strategic partners,',
                'Executive member spotlight annually,',
                'VIP access to procurement and capital-access events,',
                'Opportunity to participate in Chamber advocacy initiatives,',
                'Complimentary registration to select sigature events,',
                'Priority sponsorship opportunities'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '4px',
            borderColor : 'var(--darkGold)'
        },
    ]

    const corporateTiets = [
        {
            id : 'corporate',
            tierName : "Corporate",
            tierPrice : '5,000',
            tierTerm : 'Annually',
            tierIntroHeading : 'Expanding supplier networks and business ecosystem leadership',
            // tierIntroText : '',
            // tierListHeading : '',
            tierListItem : [
                'Seat on Corporate Advisory Councel,',
                'Corporate spotlight features,',
                'Curated introductions to member businesses,',
                'Executive briefings on Black business ecoxyxtem trends,',
                '4x complimentary registrations at select Chamber events,',
                'Priority sponsorship opportunities'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        },
        {
            id : 'nonprofitOrganization',
            tierName : 'Nonprofit Organization',
            tierPrice : '1,000',
            tierTerm : 'Annually',
            tierIntroHeading : 'Connections, visibility, and community impact through business engagement',
            // tierIntroText : '',
            tierListItem : [
                'Member profile in online directory,',
                'Networking and partnership opportunities,',
                'discounts on events and programs,',
                'Nonprofit spotlight opportunities,',
                'Access to training and educational programming,',
                '3x complimentary registrations at select Chamber events.'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        }
    ]
    return(
        <section
            className={style.memberTiersSection}
            id='membership'
        >
            <div
                className={style.preheading}
            >
                FIND YOUR LEVEL
            </div>
            <h2
                className="globalSecondHeading"
            >
                Membership built for where you&apos;re going.
            </h2>

            <p
                className="globalText"
            >
                Whether you&apos;re just starting out or scaling your impact, our memberships are designed to support your growth.
            </p>

            <PriceTier
                tiers = {startingTiers}
            />

            <div
                className={style.featureTierRow}
            >
                <PriceTier
                    tiers = {featureTier}
                />
            </div>

            <PriceTier
                tiers={corporateTiets}
            />

            <div
                className={style.testimonyRow}
            >
                <div
                    className={style.testimonyBlock}
                >
                    <p
                        className={style.testimony}
                    >
                        “Opportunity often begins with access—to the right information, the right relationships and the right people in the room. The Black Chamber of Memphis helps business owners build those connections and position their companies for meaningful, sustainable growth.”
                    </p>
                    <p
                        className={style.testimonyPerson}
                    >
                        — Michael Hooks, Jr.   CEO, Allworld Project Management | BCoM Board Member
                    </p>
                </div>
            </div>

            <div
                className={style.tierImageRow}
            >
                <Image
                    src={'/assets/members-of-bcom-7.webp'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.tierImage}
                />

                <Image
                    src={'/assets/members-of-bcom-4.webp'}
                    alt=''
                    width={2048}
                    height={1363}
                    className={style.tierImage}
                />
            </div>
        </section>
    )
}