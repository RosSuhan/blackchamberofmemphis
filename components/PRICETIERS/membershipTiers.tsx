import Image from 'next/image'
import style from './membershipTiers.module.css'
import PriceTier from './page'

export default function MembershipTiers(){
    const startingTiers = [
        {
            id : 'rising-ent',
            tierName : 'Rising Entrepreneur',
            tierPrice : '150',
            tierTerm : 'Annually',
            tierIntroHeading : 'Emerging founders (18-25) ready to start strong',
            tierIntroText : 'Build your foundation, gain exposure, and connect with real opportunities in the Memphis business Community.',
            tierListItem : [
                'Access to weekly Procurement Opportunities',
                'Invitations to training programs and events',
                'Your business listed in the directory',
                'A professional profile in the Info Hub',
                '1 free event ticket to start building your network'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        },
        {
            id : 'micro-bus',
            tierName : 'Micro Business',
            tierPrice : '125 +',
            tierTerm : 'Semiannual',
            tierIntroHeading : 'Solo business owners ready to grow visibility',
            tierIntroText : 'Establish your presence, access new opportunities, and start positioning your business for consistent growth.',
            tierListItem : [
                'Access to procurement opportunities and private event invites',
                'Directory listing and Info Hub profile',
                'Quarterly newsletter and business resources',
                '50% off event tickets and networking opportunities',
                'Staff consultation to support your next steps'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        }
    ]

    const featureTier = [
        {
            id : 'small-bus',
            tierName : 'Small Business',
            tierPrice : '250 +',
            tierTerm : 'Semiannual',
            tierIntroHeading : 'For growing businesses ready to scale',
            tierIntroText : 'Unlock more consistent opportunities, increase your visibility, and actively grow your business through the Chamber network.',
            tierListHeading : 'Everything in Micro, plus:',
            tierListItem : [
                'Free access to Chamber events and mixers',
                'Expanded access to procurement opportunities',
                'Exclusive invitations to training programs',
                'Dedicated support and business engagement'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '4px',
            borderColor : 'var(--darkGold)'
        },
    ]

    const corporateTiets = [
        {
            id : 'pres-council',
            tierName : "President's Council",
            tierPrice : '1250 +',
            tierTerm : 'Semiannual',
            tierIntroHeading : 'For established businesses ready to expand influence',
            tierIntroText : 'Join one of the most influential networks of Black business leaders in Memphis. Collaborate with peers, contribute to strategic conversations, and position your business at the center of opportunity.',
            tierListHeading : 'Everything in Small Business, plus:',
            tierListItem : [
                'Invitation to private roundtables',
                'Opportunities to serve on advisory committees',
                'Direct access to Chamber leadership',
                'CEO consultation and strategic engagement',
                'Recognition as a President’s Council Member'
            ],
            tierActionLink : '/https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw',
            borderStyle : 'solid',
            borderWidth : '1px',
            borderColor : 'var(--darkGrey)'
        },
        {
            id : 'corporate',
            tierName : 'Corporate',
            tierPrice : '2500 +',
            tierTerm : 'Semiannual',
            tierIntroHeading : 'For organisations leading at scale',
            tierIntroText : 'Position your company as a key driver of economic growth in Memphis while gaining direct access to high-value opportunities, partnerships, and visibility.',
            tierListItem : [
                'Hosted vendor fairs for your company',
                'Direct and ongoing engagement with Chamber leadership',
                'Premium recognition at all major events',
                'Priority access to partnerships and procurement opportunities',
                'Strategic positioning within the Memphis business ecosystem'
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
        >
            <h2
                className="globalSecondHeading"
            >
                Choose the Membership That Fits Your Business Stage
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