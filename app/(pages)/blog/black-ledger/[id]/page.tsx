'use client'
import { useParams } from "next/navigation";
import BlHero from "../blHero";
import SectionWide from "../sectionWide";
import SectionImageText from "../sectionImageText";
import BlImageRow from "../blImageRow";
import { blackLedgerList } from "@/lib/blackLedgerHonoree/blackLedgerList";


export default function BlackLedger(){
    const params = useParams();
    const id = params?.id as string

    if(!id) return null;

    const selectedHonoree = blackLedgerList.find(c => c.id === id)

    return (
        <main
            style={{padding:"2rem 0"}}
        >
            <BlHero
                backgroundImage={ selectedHonoree?.backgroundImage || '' }
                businessTitle={ selectedHonoree?.businessTitle || '' }
            />

            <SectionWide
                sectionHeading={'Alignment with MemphisTEN'}
                answerText={ selectedHonoree?.answerOne || '' }
            />

            <SectionImageText
                direction={true}
                sectionHeading={'Who Relies on This Work'}
                answerText={ selectedHonoree?.answerTwo || '' }
                blockImage={selectedHonoree?.imageOne || '' }
                blockImageAlt=""
            />

            <SectionWide
                sectionHeading={'Their Role in Memphis Today'}
                answerText={ selectedHonoree?.answerThree || '' }
            />

            <BlImageRow
                blImage1={ selectedHonoree?.imageTwo || '' }
                blImage1Alt=""
                blImage2={selectedHonoree?.imageThree || '' }
                blImage2Alt=""
                blImage3={ selectedHonoree?.imageFour || '' }
                blImage3Alt=""
            />

            <SectionWide
                sectionHeading={'Addressing Barriers to Access'}
                answerText={ selectedHonoree?.answerFour || '' }
            />

            <SectionImageText
                direction={false}
                sectionHeading={'Creating Stability & Reducing Risk'}
                answerText={ selectedHonoree?.answerFive || '' }
                blockImage={ selectedHonoree?.imageFive || '' }
                blockImageAlt=""
            />
        </main>
    )
}



// 1. Memphis TEN Alignment
// Memphis TEN focuses on scaling Black-owned businesses, expanding access, and creating
// jobs. In what ways does the organization contribute—directly or indirectly—to economic
// participation, workforce readiness, job creation, or business sustainability in Memphis?
// ATOP strengthens Memphis’s Black economy by turning cultural truth into sustained
// economic participation.
// Through year-round African American heritage tours and educational programming, ATOP
// consistently directs visitors into Black neighborhoods, Black-owned businesses, and cultural
// spaces often excluded from traditional tourism. Each tour creates paid opportunities for local
// guides, storytellers, and partners while supporting flexible, skills-building work in the hospitality
// and creative economy.
// By collaborating with schools, nonprofits, and civic organizations across multiple sectors, ATOP
// helps generate repeat engagement and revenue that supports long-term business sustainability.

// 2. Community Reliance & Reach
// Who relies on the organization most right now, and why? Describe your audience.
// ATOP is relied on by people who want to understand Memphis—not just visit it.
// Our core audience includes culturally curious travelers, educators, nonprofits, and civic
// organizations who regularly seek ATOP for context-rich programming. These groups rely on
// ATOP to provide clear, honest interpretation of Memphis’s Black history and present-day
// realities—allowing them to engage the city with awareness, respect, and intention rather than
// assumption.

// 3. Institutional Role & Present-Day Function
// What core function does the organization serve today—not historically, but in the current civic,
// cultural, or economic landscape?
// Today, ATOP functions as a cultural translator, economic connector, and trusted guide.
// Through recurring tours, group bookings, and educational partnerships, ATOP connects history to
// lived experience—helping diverse audiences understand how Memphis’s past actively shapes its
// neighborhoods, culture, and opportunities today. We also consistently channel visitors toward
// Black-owned businesses and local cultural workers, strengthening the city’s heritage tourism
// economy while deepening civic understanding.

// 4. Systems, Access & Barriers
// Where does the organization see persistent barriers to participation or opportunity in Memphis,
// and how does it actively respond to those challenges?
// ATOP sees persistent barriers in access, visibility, and whose stories are allowed to shape
// opportunity.
// Black communities and cultural contributors are frequently excluded from mainstream tourism
// and economic pipelines. ATOP responds by intentionally centering Black voices, redirecting
// visitor attention and spending, and creating ongoing pathways into neighborhoods and businesses
// that have historically been overlooked.

// 5. Risk Reduction & Stability
// In what ways does the organization’s work reduce risk or create stability for Black businesses,
// residents, workers, creatives, and/or families?
// ATOP creates stability by making cultural work visible, valued, and repeatable.
// Through consistent tours and returning group partners, ATOP helps generate dependable income
// for Black-owned businesses, guides, and creatives. By creating paid roles, repeat exposure, and
// trusted storytelling platforms, ATOP reduces economic risk while strengthening long-term
// stability rooted in narrative ownership and community trust.