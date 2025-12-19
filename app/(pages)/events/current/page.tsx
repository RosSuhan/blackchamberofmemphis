import Image from "next/image";
import style from '@/styles/eventSingle.module.css'
import { BaselineCalendarMonth } from "@/components/icons/Calendar";
import { Clock } from "@/components/icons/Clock";
import { BaselineLocationOn } from "@/components/icons/Location";



export default function EventSingle(){
    return(
        <article
            className={style.eventSinglePage}
        >
            <Image
                src={"/events/new-member/janbcom-newmemberorientation.webp"}
                alt="New Member Orientation"
                width={1300}
                height={800}
                className={style.singleEventImage}
            />

            <div
                className={style.eventSchedule}
            >
                <span
                    className={style.eventScheduleItem}
                >
                    <BaselineCalendarMonth
                        className={style.eventSingleIcon}
                    />
                    January 9, 2026
                </span>
                <span
                    className={style.eventScheduleItem}
                >
                    <Clock
                        className={style.eventSingleIcon}
                    />
                    9am - 10am
                </span>
                <span
                    className={style.eventScheduleItem}
                >
                    <BaselineLocationOn
                        className={style.eventSingleIcon}
                    />
                    Virtual meeting
                </span>
            </div>

            <div
                className={style.singleEventBio}
            >
                <h3>
                    January 2026 New Member Orientation
                </h3>
                <p>
                    Thinking about joining the Chamber — or recently became a member? Our New Member Orientation is the perfect first step to getting connected, informed, and involved.
                </p>
                <p>
                    This engaging virtual session is designed to welcome new members and introduce them to the heart of the Chamber. Attendees will learn about our mission, values, and goals, explore the full range of member benefits, programs, and upcoming activities, and discover how to make the most of their membership from day one.
                </p>
                <p>
                    Participants will also have the opportunity to meet key Chamber team members, connect with fellow new members, and ask questions in an open, supportive environment. Whether you&apos;re looking to grow your business, expand your network, or become more active in the local business community, this orientation sets the foundation for success.
                </p>
                <p>
                    By hosting regular orientations like this, the Chamber continues to foster an active, connected, and forward-moving business community — making now the perfect time to become a member.
                </p>
                <h3>
                    Not a member yet?
                </h3>
                <p>
                    Our New Member Orientations highlight just one of the many ways the Chamber actively supports, connects, and champions local businesses. Join today and be part of a growing network that&apos;s building momentum together.
                </p>

                <button 
                    type="button"
                    style={{width:"280px", background:"var(--gold)", padding:".5rem 1rem", borderRadius:"5px", border:"none"}}
                >
                    <a 
                        href="https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw"
                        style={{color:"#000000", textDecoration:"none", fontSize:"1.125rem"}}
                    >
                        Become a Member Today
                    </a>
                </button>
                
            </div>
        </article>
    )
}