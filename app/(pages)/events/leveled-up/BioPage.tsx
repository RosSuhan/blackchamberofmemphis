'use client'
import { useState } from "react"

const shortBio = `<p>Brooke Benjamin, Esq., LL.M., is the founder of the Benjamin Law Firm and Leveled Up Money, a financial wellness platform equipping individuals and entrepreneurs to build and protect wealth. A Memphis native and U of  M alum, she earned her J.D. from the University of Mississippi and an LL.M. in Taxation from the University of Florida. Brooke’s career includes working for the IRS, SBA, Capitol Hill and national law firms. She now uses her expertise to help others navigate complex financial systems with confidence and clarity.</p>`

const longBio = `
    <p>Brooke Benjamin, Esq., LL.M. is a proud Memphis native and the founder of both the Benjamin Law Firm and Leveled Up Money, a financial education and wellness platform that equips individuals with the tools to master their finances, protect their assets, and build lasting wealth.</p>
    <p>Brooke graduated summa cum laude from the University of Memphis with both her Bachelor’s and Master’s degrees in Accounting. She went on to earn her Juris Doctor from the University of Mississippi School of Law and a Master of Laws in Taxation from the University of Florida, one of the nation’s top programs for tax law.</p>
    <p>Throughout her career, Brooke has gained experience at some of the most respected institutions in the legal and financial industries—including a Big Four accounting firm, Fortune 500 companies, the IRS, the Small Business Administration, and a Top 50 national law firm in Washington, D.C. She also served on Capitol Hill, where she worked on tax and economic policy issues impacting small businesses and working families.</p>
    <p>After years of helping major companies and government agencies navigate complex financial systems, Brooke launched her own businesses to bring that same level of strategy and support to individuals, families, and entrepreneurs.</p>
    <p>Now, through her law firm and Leveled Up Money, she uses her expertise in law, tax, and finance to help others take control of their money and create a strong foundation for long-term wealth.</p>`



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