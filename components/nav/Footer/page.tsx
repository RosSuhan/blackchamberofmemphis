'use client'
import { TwitterStroke12 } from '@/components/icons/TwitterIcon'
import { FacebookFill } from '@/components/icons/FacebookIcon'
import style from './footer.module.css'
import { Instagram } from '@/components/icons/InstagramIcon'
import { Linkedin2 } from '@/components/icons/LinkedInIcon'
import { Youtube } from '@/components/icons/YoutubeIcon'

export default function Footer(){
    return(
        <footer
            className={style.footer}
        >
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
            <span
                className={style.footerEnd}
            >
                All Rights Resevered &copy; {new Date().getFullYear()} Black Chamber of Memphis.
            </span>
        </footer>
    )
}