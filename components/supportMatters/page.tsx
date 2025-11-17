import style from '@/styles/supportMatters.module.css'


export default function SupportMatters(){
    return(
        <section
            className={style.supportMatterSection}
        >
            <h2
                className={style.supportMatterHeading}
            >
                Your Partnership Creates Real Economic Impact
            </h2>

            <p
                className={style.supportMatterParagraph}
            >
                Join us in transforming Memphis’ business landscape. When you partner with the Black Chamber of Memphis, you:
            </p>

            <div
                className={style.supportMatterBlockRow}
            >
                <div
                    className={style.supportMatterFlipBlock}
                >
                    <div
                        className={style.supportMatterBlock}
                    >
                        <h3
                            className={style.supportMatterBlockHeading}
                        >
                            Fuel Growth
                        </h3>
                        <p
                            className={style.supportMatterBlockWords}
                        >
                            Support training, mentoring, and technical assistance for rising entrepreneurs.
                        </p>
                    </div>
                </div>
                
                <div
                    className={style.supportMatterFlipBlock}
                >
                    <div
                        className={style.supportMatterBlock}
                    >
                        <h3
                            className={style.supportMatterBlockHeading}
                        >
                            Open Doors
                        </h3>
                        <p
                            className={style.supportMatterBlockWords}
                        >
                            Help businesses access contracts, capital, and corporate opportunities.
                        </p>
                    </div>
                </div>

                <div
                    className={style.supportMatterFlipBlock}
                >
                    <div
                        className={style.supportMatterBlock}
                    >
                        <h3
                            className={style.supportMatterBlockHeading}
                        >
                            Create Jobs
                        </h3>
                        <p
                            className={style.supportMatterBlockWords}
                        >
                            Contribute to a strategy that will generate 8,000 new jobs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

{/* 
Why Your Support Matters
H2: Your Partnership Creates Real Economic Impact

Value Blocks:

Fuel Growth: Support training, mentoring, and technical assistance for rising entrepreneurs.

Open Doors: Help businesses access contracts, capital, and corporate opportunities.

Create Jobs: Contribute to a strategy that will generate 8,000 new jobs.
*/}