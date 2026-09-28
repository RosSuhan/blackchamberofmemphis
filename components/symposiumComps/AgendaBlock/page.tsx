import Image from 'next/image'
import './agendaBlock.css'

export default function AgendaBlock(){
    return (
        <section
            className='symposiumAgendaBlock'
        >
            <Image
                src={'/events/symposium/schedule-board.webp'}
                alt='The day agenda for the Black Chamber of Memphis&apos;s Building Wealth in our Community Symposium 2026.'
                width={1728}
                height={2304}
                className='symposiumAgenda'
            />
        </section>
    )
}