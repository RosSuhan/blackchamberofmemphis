'use client'
import style from '@/styles/programApplication.module.css'
import { useParams } from 'next/navigation'
import { mtenPrograms } from '@/lib/mtenPrograms'
import PageTitleSection from '@/components/pageTitleSection/page'
import { useState } from 'react'


export default function ApplicationForm(){
    const { id } = useParams()
    const selectedProgram = mtenPrograms.find(c => c.id === id)
    const programName = selectedProgram?.title

    const [ applicantName, setApplicantName ] = useState("")
    const [ applicantEmail, setApplicantEmail ] = useState("")
    const [ whoAreYou, setWhoAreYou ] = useState("")
    const [ emailConcent, setEmailConcent ] = useState("")
    const [ memberConfirm, setMemberConfirm ] = useState("")
    const [ businessName, setBusinessName ] = useState("")
    const [ goals, setGoals ] = useState("")
    const [ businessDescription, setBusinessDescription ] = useState("")
    const [ addInfoQ, setAddInfoQ ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")

    const APPLICATION_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbzSoT9_UYdhhQgflCWSMzSHC1ld6J5YLr4UD3aJBCDEL2rN12xc13_odrJBKyhlZ-_xLg/exec"

    function resetApplicationForm() {
        setApplicantName("");
        setApplicantEmail("");
        setWhoAreYou("");
        setEmailConcent("");
        setMemberConfirm("");
        setBusinessName("");
        setGoals("");
        setBusinessDescription("");
        setAddInfoQ("");
    }

    async function handleApplicationForm(e: React.FormEvent){
        e.preventDefault();
        setLoading(true)
        setSubmitMessage("")

        if(applicantName.trim().length < 2){
            setSubmitMessage("Please enter a valid name.");
            setLoading(false);
            return;
        }

        const applicationFormData = {
            programName,
            applicantName,
            applicantEmail,
            whoAreYou,
            emailConcent,
            memberConfirm,
            businessName,
            goals,
            businessDescription,
            addInfoQ,
        }

        try {
            await fetch(APPLICATION_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(applicationFormData)
            })

            setSubmitMessage("Thank you for submitting your application. We will contact you as soon as possible.")
            setLoading(false)

            setTimeout(() => {
                resetApplicationForm();
                setSubmitMessage("");
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again later.")
            setLoading(false)
        }
    }

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
                    onSubmit={handleApplicationForm}
                >
                    {/* Applicant Name */}
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
                            onChange={(e) => setApplicantName(e.target.value)}
                            value={applicantName}
                        />
                    </fieldset>

                    {/* applicant email */}
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
                            onChange={(e) => setApplicantEmail(e.target.value)}
                            value={applicantEmail}
                        />
                    </fieldset>

                    {/* which one are you */}
                    <fieldset
                        className={style.applicationFormFieldset}
                    >
                        <legend
                            className={style.applicationFormLegend}
                        >
                            Which One Are You?
                        </legend>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                name='whoAreYou'
                                value={"entrepreneur"}
                                checked={whoAreYou === "entrepreneur"}
                                onChange={(e) => setWhoAreYou(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            ENTREPRENEUR
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio"
                                name='whoAreYou'
                                value={"business-owner"}
                                checked={whoAreYou === "business-owner"}
                                onChange={(e) => setWhoAreYou(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            BUSINESS OWNER
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio"
                                name='whoAreYou'
                                value={"other"} 
                                checked={whoAreYou === "other"}
                                onChange={(e) => setWhoAreYou(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            Other
                        </div>
                    </fieldset>

                    {/* concent to email contact */}
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
                                name="emailConcent"
                                value={"yes"}
                                checked={emailConcent === "yes"}
                                onChange={(e) => setEmailConcent(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            Yes
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                name="emailConcent"
                                value={"no"}
                                checked={emailConcent === "no"}
                                onChange={(e) => setEmailConcent(e.target.value)}
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
                    
                    {/* Are you a member? */}
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
                                name="memberConfirm"
                                value={"yes"}
                                checked={memberConfirm === "yes"}
                                onChange={(e) => setMemberConfirm(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            Yes
                        </div>
                        <div
                            className={style.applicationFormCheckrow}
                        >
                            <input 
                                type="radio" 
                                name="memberConfirm"
                                value={"no"}
                                checked={memberConfirm === "no"}
                                onChange={(e) => setMemberConfirm(e.target.value)}
                                className={style.applicationFormCheckBox}
                            />
                            No
                        </div>
                    </fieldset>
                    
                    {/* Business Name */}
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
                            onChange={(e) => setBusinessName(e.target.value)}
                            value={businessName}
                            className={style.applicationFormInput}
                        />
                    </fieldset>
                    
                    {/* goals */}
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
                            onChange={(e) => setGoals(e.target.value)}
                            value={goals}
                            className={style.applicationFormTextArea}
                        ></textarea>
                    </fieldset>

                    {/* business description */}
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
                            value={businessDescription}
                            onChange={(e) => setBusinessDescription(e.target.value)}
                            rows={5}
                        ></textarea>
                    </fieldset>

                    {/* additional info or questions */}
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
                            onChange={(e) => setAddInfoQ(e.target.value)}
                            value={addInfoQ}
                            rows={5}
                        ></textarea>
                    </fieldset>

                    <button
                        type='submit'
                        className={style.applicationFormSubmit}
                    >
                        {loading ? "Submitting Form..." : "Submit"}
                    </button>

                    {submitMessage && (
                        <p>{submitMessage}</p>
                    )}
                </form>
            </section>
        </main>
    )
}