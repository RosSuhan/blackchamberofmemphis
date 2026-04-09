'use client'
import Flipbox from '@/components/FLIPBOX/page'
import style from './iconRow.module.css'
import { useState } from 'react'

export default function IconRowSection(){
    const [ activeIndex, setActiveIndex ] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index );
    }

    const flipBoxData = [
        {
            index: "economic-growth",
            frontTitle: `Economic Growth`,

            backText: `<p>Expand local participation in the regional economy, and Foster sustainable business growth</p>`
        },
        {
            index: "block2",
            frontTitle: `This will be front 2`,
            backText: `This is for back 2`
        },
        {
            index: "block3",
            frontTitle: `This will be front 3`,
            backText: `This is for back 3`
        }
    ]
    return(
        <section
            className={style.iconRowSection}
        >
            <h2
                className={style.iconRowHeading}
            >
                Building Wealth in Our Community Symposium
            </h2>

            <p
                className={style.iconRowParagraph}
            >
                The Symposium is a signature initiative of MemphisTEN, BCoM’s economic development framework, designed to:
            </p>

            <div
                className={style.flipBoxGrid}
            >
                {flipBoxData.map(({index, frontTitle, backText}) => (
                    <Flipbox
                        key={index}
                        flipboxHeader={frontTitle}
                        flipboxText={backText}
                        flipped={flippedIndexes.includes(index)}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
            
        </section>
    )
}