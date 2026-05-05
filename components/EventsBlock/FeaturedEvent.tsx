import style from './featuredEvent.module.css'

export default function FeaturedEvent(){
    return (
        <div
            className={style.businessBlockLink}
            // key={id}
        >
            {/* <Link
                href={blockPath}
                className={style.businessLogoBlock}
            >
                <Image
                    src={blockImage}
                    alt=""
                    width={2048}
                    height={1363}
                    className={style.businessBlockImage}
                />
            </Link> */}

            {/* <div
                className={style.businessDescBlock}
            >
                <Link
                    href={blockPath}
                    className={style.businessNameLink}
                >
                    <h2
                        className={style.businessBlockName}
                    >
                        {blockTitle}
                    </h2>
                </Link>

                <article
                    className={style.businessBlockDesc}
                >
                    <ReadMore
                        text = {blockDescription}
                        limit={15}
                    />
                </article>
            </div> */}

            {/* <div
                className={style.businessContactBlock}
            > */}
                {/* {phoneNumber? 
                        <a 
                        href={"tel:" + phoneNumber}
                        className={style.businessContactBlockLink}
                    >
                        <Phone
                            className={style.contactIcon}
                        />
                        {phoneNumber}
                    </a>    
                : null} */}

                {/* {emailText ? 
                    <a 
                        href={"mailto:" + emailText}
                        className={style.businessContactBlockLink}
                    >
                        <BaselineMail
                            className={style.contactIcon}
                        />
                        {emailText}
                    </a>    
                : null} */}

                {/* {websiteLink ? 
                    <a 
                        href={websiteLink}
                        className={style.businessContactBlockLink}
                    >
                        <GlobeOutline
                            className={style.contactIcon}
                        />
                        {websiteLink}
                    </a>    
                : null} */}

                {/* <Link
                    href={blockPath}
                    className={style.viewProfile}
                >
                    View Profile
                </Link> */}
            {/* </div> */}
        </div>
    )
}