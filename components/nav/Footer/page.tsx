'use client'
import { TwitterStroke12 } from '@/components/icons/TwitterIcon'
import { FacebookFill } from '@/components/icons/FacebookIcon'
import style from './footer.module.css'
import { Instagram } from '@/components/icons/InstagramIcon'
import { Linkedin2 } from '@/components/icons/LinkedInIcon'
import { Youtube } from '@/components/icons/YoutubeIcon'
import Logo from '@/components/LOGO/page'
import { Phone } from '@/components/icons/Phone'
import { BaselineMail } from '@/components/icons/MailIcon'
import { menuList } from '@/lib/menuList'
import Link from 'next/link'
import StayInformedSection from '@/components/forms/stayInformed'

export default function Footer(){
    return(
        <footer
            className={style.footer}
        >
            <div
                className={style.footerLeftBlock}
            >
                <Logo
                    whiteGoldLogo={true}
                    blackGoldLogo={false}
                    whiteWhiteLogo={false}
                />

                <div
                    className={style.footerContactRow}
                >
                    <a 
                        href="tel:+19016369300"
                        className={style.footerContactLink}
                    >
                        <Phone
                            className={style.footerContactLinkIcon}
                        /> 
                        901 636 9300
                    </a>

                    <a 
                        href=""
                        className={style.footerContactLink}
                    >
                        <BaselineMail
                            className={style.footerContactLinkIcon}
                        />
                        info@bbamemphis.com
                    </a>
                </div>

                <div
                    className={style.footerNavRow}
                >
                    {menuList.map(({name, path}) => (
                        <Link
                            key={name}
                            href={path}
                            className={style.footerNavLink}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                <div
                    className={style.socialBlock}
                >
                    <a 
                        href="https://twitter.com/BBAMemphis"
                        className={style.socialLink}
                    >
                        <TwitterStroke12
                            width="1rem"
                            height="1rem"
                            className={style.socialIcon}
                        />
                    </a>

                    <a 
                        href="https://www.facebook.com/BCOMemphis"
                        className={style.socialLink}
                    >
                        <FacebookFill
                            width="1rem"
                            height="1rem"
                            className={style.socialIcon}
                        />
                    </a>

                    <a 
                        href="https://www.linkedin.com/company/bcomemphis/"
                        className={style.socialLink}
                    >
                        <Linkedin2
                            width="1em"
                            height="1em"
                            className={style.socialIcon}
                        />
                    </a>

                    <a 
                        href="https://www.instagram.com/bcomemphis/"
                        className={style.socialLink}
                    >
                        <Instagram
                            width="1em"
                            height="1em"
                            className={style.socialIcon}
                        />
                    </a>

                    <a 
                        href="https://www.youtube.com/@BlackChamberofMemphis"
                        className={style.socialLink}
                    >
                        <Youtube
                            width="1em"
                            height="1em"
                            className={style.socialIcon}
                        />
                    </a>
                </div>
            </div>
            <div
                className={style.footerRightBlock}
            >
                <StayInformedSection/>
            </div>
            <div
                className={style.footerEnd}
            >
                <p
                    className={style.globalSmallText}
                    style={{lineHeight:"1.5"}}
                >
                    All Rights Resevered &copy; {new Date().getFullYear()} Black Chamber of Memphis.
                </p>
            </div>
        </footer>
    )
}



{/* <div
className={style.socialBlock}
>
<a 
    href="https://twitter.com/BBAMemphis"
    className={style.socialLink}
>
    <TwitterStroke12
        width="1rem"
        height="1rem"
        className={style.socialIcon}
    />
</a>

<a 
    href="https://www.facebook.com/BCOMemphis"
    className={style.socialLink}
>
    <FacebookFill
        width="1rem"
        height="1rem"
        className={style.socialIcon}
    />
</a>

<a 
    href="https://www.linkedin.com/company/bcomemphis/"
    className={style.socialLink}
>
    <Linkedin2
        width="1em"
        height="1em"
        className={style.socialIcon}
    />
</a>

<a 
    href="https://www.instagram.com/bcomemphis/"
    className={style.socialLink}
>
    <Instagram
        width="1em"
        height="1em"
        className={style.socialIcon}
    />
</a>

<a 
    href="https://www.youtube.com/@BlackChamberofMemphis"
    className={style.socialLink}
>
    <Youtube
        width="1em"
        height="1em"
        className={style.socialIcon}
    />
</a>
</div>
 */}