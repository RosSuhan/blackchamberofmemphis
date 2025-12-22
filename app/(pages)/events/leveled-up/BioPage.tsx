'use client'
import { useState } from "react"

const shortBio = `<p>Brooke Benjamin Kelley, Esq., LL.M., is the founder of the Benjamin Law Firm and Leveled Up Money, a financial wellness platform equipping individuals and entrepreneurs to build and protect wealth. A Memphis native and U of  M alum, she earned her J.D. from the University of Mississippi and an LL.M. in Taxation from the University of Florida. Brooke’s career includes working for the IRS, SBA, Capitol Hill and national law firms. She now uses her expertise to help others navigate complex financial systems with confidence and clarity.</p>`

const longBio = `
    <p>Brooke Benjamin Kelley, Esq., LL.M. is a proud Memphis native and the founder of Leveled Up Money, a financial education and wellness platform that supports individuals and businesses in building clarity, structure, and long-term wealth.</p>
    <p>Brooke graduated summa cum laude from the University of Memphis with both her Bachelor’s and Master’s degrees in Accounting. She earned her Juris Doctor from the University of Mississippi School of Law and a Master of Laws in Taxation from the University of Florida, one of the nation’s top tax law programs.</p>
    <p>Throughout her career, Brooke has worked across the legal, accounting, and public policy sectors, gaining experience at a Big Four accounting firm, Fortune 500 companies, the Internal Revenue Service, the Small Business Administration, a Top 50 national law firm in Washington, D.C., and on Capitol Hill, where she supported tax and economic policy initiatives impacting small businesses and working families.</p>
    <p>Through Leveled Up Money, Brooke brings this cross-disciplinary expertise together to help individuals and business owners better understand how money, taxes, and operations work together. Her work focuses on building efficient financial systems, improving decision-making, and helping clients and participants navigate tax planning, business structure, and cash flow with clarity and confidence. Leveled Up Money delivers this support through workshops, consulting, and digital tools, with higher-level advisory access available through select programs and engagements.</p>`



export default function LeveledUpBioPage(){
    const [ expand, setExpand ] = useState(false)
    return(
        <>
            <div dangerouslySetInnerHTML={{__html: expand ? shortBio : longBio}}/>

            <button
                type="button"
                onClick={() => setExpand(!expand)}
                style={{background:"var(--gold)", border:"none", padding:".5rem 1rem", borderRadius:"5px"}}
            >
                {expand ? "Read More..." : "Show Less"}
            </button>
        </>
    )
}