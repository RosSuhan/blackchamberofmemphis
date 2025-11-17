'use client'
import style from '@/styles/programApplication.module.css'
import { useParams } from 'next/navigation'
import { mtenPrograms } from '@/lib/mtenPrograms'
import PageTitleSection from '@/components/pageTitleSection/page'


export default function ApplicationForm(){
    const { id } = useParams()

    const selectedProgram = mtenPrograms.find(c => c.id === id)

    return (
        <main
            className={style.applicationPage}
        >
            <PageTitleSection
                pageTitle={"Application Form"}
            />
            <section
                className={style.applicationPageTitleSection}
            >
                <h2
                    className={style.applicationTitle}
                >
                    Fill Out The Form To Get Started For {selectedProgram?.title}
                </h2>
            </section>

            <section
                className={style.applicationFormSection}
            >
                <form
                    className={style.applicationForm}
                >
                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Name
                        </legend>
                        <input 
                            type="text" 
                            className={style.applicationFormInput}
                            // value={applicantName}
                        />
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Email
                        </legend>
                        <input 
                            type="email" 
                            className={style.applicationFormInput}
                            // value={applicantEmail}
                        />
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Whick One Are You?
                        </legend>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="checkbox" 
                                className={style.applicationFormCheckBox}
                            />
                            ENTREPRENEUR
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="checkbox" 
                                className={style.applicationFormCheckBox}
                            />
                            BUSINESS OWNER
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="checkbox" 
                                className={style.applicationFormCheckBox}
                            />
                            Other
                        </div>
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            May we email you about this?
                        </legend>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                className={style.applicationFormCheckBox}
                            />
                            Yes
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                className={style.applicationFormCheckBox}
                            />
                            No
                        </div>
                        <span
                            className={style.applicationFormSpan}
                        >
                            You agree to receive future emails and understand you may opt-out at any time
                        </span>
                    </fieldset>
                    
                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Are you a member of The Black Chamber of Memphis?
                        </legend>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                className={style.applicationFormCheckBox}
                            />
                            Yes
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                className={style.applicationFormCheckBox}
                            />
                            No
                        </div>
                    </fieldset>
                    
                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Company / Business Name:
                        </legend>
                        <input 
                            type="text" 
                            className={style.applicationFormInput}
                        />
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            What are your Wealth Creation Goals? Briefly outline your goals for creating wealth through our {selectedProgram?.title}:
                        </legend>
                        <textarea 
                            rows={5}
                            className={style.applicationFormTextArea}
                        ></textarea>
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Please provide a brief description of your business and its current status:
                        </legend>
                        <textarea 
                            className={style.applicationFormTextArea}
                            rows={5}
                        ></textarea>
                    </fieldset>

                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Please share any additional information of specific questions you have for our team:
                        </legend>
                        <textarea 
                            className={style.applicationFormTextArea} 
                            rows={5}
                        ></textarea>
                    </fieldset>

                    <button
                        className={style.applicationFormSubmit}
                    >
                        Submit
                    </button>
                </form>
            </section>
        </main>
    )
}