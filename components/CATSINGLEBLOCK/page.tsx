'use client'
import Image from 'next/image'
import style from './catSingleBlock.module.css'
import ReadMore from '../READMORE/ReadMore'
import Link from 'next/link'
import { catSingleBlockProp } from './catSinglePropType'
import { BaselineCalendarMonth } from '../icons/Calendar'
import { BaselineLocationOn } from '../icons/Location'
import { Star } from '../icons/star'


export default function CATsingleBlock({
    key,
    star,
    featureImage,
    featureName,
    featureText,
    featureTextLimit,
    featureLink,
    featureDate,
    featurePrice,
    featureLocation,
    featureLinkText
}:catSingleBlockProp){
    return ( 
        <div
            className={style.catBlock}
            key={key}
        >
            {star ?
                <Star
                    width={40}
                    height={40}
                    className={style.catStar}
                /> 
            : null }

            <Image
                src={featureImage}
                alt=''
                width={1300}
                height={800}
                className={style.catLogo}
            />

            <div
                className={style.catName}
            >
                <h3
                    className='globalThirdHeading'
                >
                    {featureName}
                </h3>
            </div>

            {featureDate ?
                <div
                    className={style.catDateTimePrice}
                >
                    <ul
                        className={style.catList}
                    >
                        <li
                            className={style.catItem}
                        >
                            <BaselineCalendarMonth
                                className={style.catIcon}
                            />

                            {featureDate}
                        </li>
                        {featurePrice ? 
                            <li
                                className={style.catItem}
                            >
                                <div
                                    style={{fontSize:"1.2rem", fontWeight:"800"}}
                                    className={style.catIcon}
                                >
                                    $
                                </div>
                                {featurePrice}
                            </li>
                        : null}
                        {featureLocation ? 
                        <li
                            className={style.catItem}
                        >
                            <BaselineLocationOn
                                className={style.catIcon}
                            />
                            {featureLocation}
                        </li>
                        : null}
                    </ul>
                </div>
            : null}

            <div
                className={style.catText}
            >
                <p
                    className='globalSmallText'
                >
                    <ReadMore
                        text = {featureText}
                        limit = {featureTextLimit}
                    />
                </p>
            </div>

            

            <Link
                href={featureLink}
                className='globalBlackButton'
            >
                {featureLinkText}
            </Link>
        </div>
    )
}