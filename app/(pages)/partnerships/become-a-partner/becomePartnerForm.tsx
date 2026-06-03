'use client'
import { useState } from 'react'
import style from './becomePartnerForm.module.css'
import { useRouter } from 'next/navigation'

export default function BecomePartnerForm(){
    const router = useRouter();
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ partnerFormData, setPartnerFormData ] = useState({
        businessName : '',
        website : '',
        businessSector : '',
        partnerDescription : '',
        contactPerson : '',
        jobTitle : '',
        contactEmail : '',
        contactNumber : '',
        partnershipBenefits : '',
        resources : '',
    })

    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setPartnerFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const BECOMEPARTNER_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbwYNY0N_ZDv0aA0CtpIFl1ZmRmdUyH1patWaQHeU5EFalpCUIHzugSVOv0HTERHz2ad/exec"
    // const BECOMEPARTNER_GOOGLE_URL = ''

    async function handlePartnerApplication(e:React.FormEvent) {
        e.preventDefault();

        setLoading(true);

        try {
            await fetch(BECOMEPARTNER_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(partnerFormData)
            })

            console.log("Details of form:", partnerFormData)
            setSubmitMessage("Form successfully submitted")
            setLoading(false)

            router.push('/')
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.")
            setLoading(false)
        }
    }

    return (
        <section
            className={style.becomePartnerFormSection}
        >
            <form
                className={style.becomePartnerForm}
            >
                <div
                    className={style.becomePartnerContentBlock}
                >
                    <h2
                        className='globalThirdHeading'
                        style={{width:"100%"}}
                    >
                        Business Details
                    </h2>
                    
                    {/* businessName */}
                    <input 
                        type="text" 
                        name="businessName" 
                        placeholder='Business Name'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.businessName}
                    />

                    {/* website */}
                    <input 
                        type="url" 
                        name="website" 
                        placeholder='Website'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.website}
                    />
                    
                    {/* businessSector */}
                    <input 
                        type="text" 
                        name="businessSector" 
                        placeholder='Industry / Sector'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.businessSector}
                    />

                    {/* partnerDescription */}
                    <textarea 
                        name="partnerDescription" 
                        placeholder='Brief description of what you do.'
                        rows={5}
                        className={style.becomePartnerTextArea}
                        onChange={handleInput}
                        value={partnerFormData.partnerDescription}
                    ></textarea>
                </div>
                
                <div
                    className={style.becomePartnerContentBlock}
                >
                    <h2
                        className='globalThirdHeading'
                        style={{width:"100%"}}
                    >
                        Contact Person
                    </h2>
                
                    {/* contactPerson */}
                    <input 
                        type="text" 
                        name="contactPerson" 
                        placeholder='Full Name'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.contactPerson}
                    />

                    {/* jobTitle */}
                    <input 
                        type="text" 
                        name="jobTitle" 
                        placeholder='Position in the Company'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.jobTitle}
                    />

                    {/* contactEmail */}
                    <input 
                        type="text" 
                        name="contactEmail" 
                        placeholder='Email Address'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.contactEmail}
                    />

                    {/* contactNumber */}
                    <input 
                        type="text" 
                        name="contactNumber" 
                        placeholder='Phone number'
                        className={style.becomePartnerInput}
                        onChange={handleInput}
                        value={partnerFormData.contactNumber}
                    />
                </div>

                <div
                    className={style.becomePartnerContentBlock}
                >
                    <h2
                        className='globalThirdHeading'
                        style={{width:"100%"}}
                    >
                        About the Partnership
                    </h2>

                    <fieldset
                        className={style.becomePartnerFieldset}
                    >
                        <legend>
                            How do you see this partnership benefiting BCoM Members?
                        </legend>
                        <textarea 
                            name="partnershipBenefits" 
                            rows={8}
                            className={style.becomePartnerTextArea}
                            onChange={handleInput}
                            value={partnerFormData.partnershipBenefits}
                        ></textarea>
                    </fieldset>

                    <fieldset
                        className={style.becomePartnerFieldset}
                    >
                        <legend>
                            What resources or opportunities can your organisation bring?
                        </legend>
                        <textarea 
                            name="resources" 
                            rows={8}
                            className={style.becomePartnerTextArea}
                            onChange={handleInput}
                            value={partnerFormData.resources}
                        ></textarea>
                    </fieldset>
                </div>

                <div
                    className={style.becomePartnerSubmitRow}
                >
                    <button 
                        type="submit"
                        className='globalGoldButton'
                        onClick={handlePartnerApplication}
                    >
                        {loading ? "Sending" : "Submit"}
                    </button>
                </div>

                {submitMessage ? 
                    <p
                        className='globalXsmallText'
                    >
                        {submitMessage}
                    </p>
                : null }
            </form>
        </section>
    )
}