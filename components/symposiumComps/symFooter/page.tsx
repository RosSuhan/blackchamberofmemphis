import { BaselineMail } from '@/components/icons/MailIcon'
import style from './symFooter.module.css'
import { Phone } from '@/components/icons/Phone'

export default function SymFooter(){
    return(
        <section
            className={style.symFooterSection}
        >
            <p
                className={style.symFooterText}
            >
                Please contact us for any additional information required:
            </p>

            <div
                className={style.symFooterLinkRow}
            >
                <a 
                    href="mailto:memberservices@bbamemphis.com "
                    className={style.symFooterLink}
                >
                    <BaselineMail
                        className={style.symFooterMailIcon}
                    />
                    <span
                        className={style.symFooterLinkText}
                    >
                        memberservices@bbamemphis.com 
                    </span>
                </a>
                {/* <a 
                    href="tel:+19018008041"
                    className={style.symFooterLink}
                >
                    <Phone
                        className={style.symFooterPhoneIcon}
                    />
                    <span
                        className={style.symFooterLinkText}
                    >
                        901-800-8041
                    </span>
                </a> */}
            </div>
        </section>
    )
}