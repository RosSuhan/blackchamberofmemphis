// import PageTitleSection from '@/components/pageTitleSection/page'
import style from './reverend.module.css'
import localFont from 'next/font/local'

const specialFont = localFont({
    src : './../../../fonts/Edwardian Script ITC/edwardianscriptitc.ttf',
    weight: '600',
    style : 'normal',
})

export default function ReverendJesseJackson(){
    return(
        <main
            className={style.reverendJessePage}
        >
            <section
                className={style.reverendPageHero}
            >
                <div
                    className={style.reverendHeroBlock}
                >
                    <h1
                        className={specialFont.className}
                    >
                        Honoring a Tireless Advocate for Equality
                    </h1>
                </div>
            </section>
            
            <section
                className={style.reverendJesseTextSection}
            >

                <article
                    className={style.reverendJesseArticle}
                >
                    <p>
                        The Black Chamber of Memphis respectfully acknowledges the passing of Reverend Jesse Jackson Sr., whose significant contributions impacted communities, inspired generations, and advanced the moral conscience of the nation. His steadfast commitment to civil rights, voting rights, economic justice, and human dignity fundamentally shaped American democracy. Reverend Jackson consistently advocated for those whose voices often went unheard, promoted equality, and worked toward bridging divisions.
                    </p>
                    <p>
                        Through his leadership and advocacy, Reverend Jackson demonstrated that achieving justice requires perseverance, that dignity is inherent for all individuals, and that unity is more powerful than discord. While we mourn his loss, we also recognize the enduring legacy of his work in expanded opportunities, protected rights, and inspired leaders who carry forward his vision.
                    </p>
                    <p>
                        We honor Reverend Jackson’s memory by upholding the principles he championed: justice, equality, compassion, and hope.
                    </p>
                    <p>
                        With heartfelt sympathy and deepest condolences.
                    </p>

                    <p><strong>The Black Chamber of Memphis & Staff</strong></p>
                    <p><strong>Mark Yates, Board Chair/President & CEO</strong></p>
                </article>
                <div
                    className={style.reverendJesseVideoBlock}
                >
                    <iframe 
                        src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1247020440712843%2F&show_text=false&width=267&t=0" 
                        width="267" 
                        height="476" 
                        style={{border:"none", overflow:"hidden"}} 
                        scrolling="no" 
                        frameBorder="0" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                        className={style.reverendJesseVideo}
                        ></iframe>
                </div>
            </section>
        </main>
    )
}