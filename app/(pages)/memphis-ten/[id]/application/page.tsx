'use client'
import style from '@/styles/programApplication.module.css'
import { useParams } from 'next/navigation'
import { mtenPrograms } from '@/lib/mtenPrograms'


export default function ApplicationForm(){
    const { id } = useParams()

    const selectedProgram = mtenPrograms.find(c => c.id === id)

    return (
        <main
            className={style.applicationPage}
        >
            <section
                className={style.applicationPageTitleSection}
            >
                <h1
                    className={style.applicationTitle}
                >
                    Application for {selectedProgram?.title}
                </h1>
            </section>
        </main>
    )
}