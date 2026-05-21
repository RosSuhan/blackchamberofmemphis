'use client'
import { useState } from 'react'
import style from './GetListedMainForm.module.css'
import { useRouter } from 'next/navigation'

type GetListedMainFormProp = {
    stepOne : boolean
    stepTwo : boolean
    stepThree : boolean
    stepFour : boolean
    stepTwoNextBtn : React.MouseEventHandler<HTMLButtonElement>
    stepThreeNextBtn : React.MouseEventHandler<HTMLButtonElement>
    stepFourNextBtn : React.MouseEventHandler<HTMLButtonElement>
}

export default function GetListedMainForm({stepOne, stepTwo, stepThree, stepFour, stepTwoNextBtn, stepThreeNextBtn, stepFourNextBtn}: GetListedMainFormProp){
    const router = useRouter();
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ formData, setFormData ] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        busName: "",
        webLink: "",
        busDescription: "",
        busCategories: "",
        addLine1: "",
        addLine2: "",
        city: "",
        state: "",
        postCode: "",
        gmbLink: "",
        serveCustomer: "",
        serveLocation: "",
        facebookLink: "",
        instagramLink: "",   
        tiktokLink: "",     
        twitterLink: "",
        pinterestLink: "",
        linkedInLink: "",        
        youtubLink: "",
        linktree: "",
    })

    const GETLISTED_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbxNtBdr1q4Tcc3QMB0QfDx4Zj_KkNiJt1IE-8ZThdmBrTzjFQcINQj3NFXIrG4PrC8B/exec"

    async function handleGetListedForm(e: React.FormEvent){
        e.preventDefault();
        setLoading(true);

        try {
            await fetch(GETLISTED_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            // setSubmitMessage("Thank you joining the Black Chamber Directory. your submission is received. Our team will review your information to ensure your listing is clear, complete, and ready to publish.")
            setSubmitMessage("Form submission successfull.")
            setLoading(false)

            router.push('/get-listed/confirmed')
            // setTimeout(() => {
            //     setSubmitMessage("");
            // }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.")
            setLoading(false)
        }
        console.log("Form Data Sent:", formData)
    }

    function FormReset() {
        setFormData({
            fullName: "",
            phoneNumber: "",
            email: "",
            busName: "",
            webLink: "",
            busDescription: "",
            busCategories: "",
            addLine1: "",
            addLine2: "",
            city: "",
            state: "",
            postCode: "",
            gmbLink: "",
            serveCustomer: "",
            serveLocation: "",
            facebookLink: "",
            instagramLink: "",
            tiktokLink: "",     
            twitterLink: "",
            pinterestLink: "",
            linkedInLink: "",
            youtubLink: "",
            linktree: "",
        })
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    return(
        <form 
            className = {style.getListedMainform}
        >
            {stepOne ? 
            <>
                <div
                    className={style.stepBlock}
                >
                    <h2
                        className='globalThirdHeading'
                    >
                        Contact Information
                    </h2>

                    <input type="text" 
                        name="fullName" 
                        placeholder = 'Full Name'
                        className={style.formTextInput}
                        value={formData.fullName}
                        onChange={handleOnChange}
                    />

                    <input type="tel" 
                        name="phoneNumber" 
                        placeholder = 'Phone Number'
                        className={style.formTextInput}
                        value={formData.phoneNumber}
                        onChange={handleOnChange}
                    />

                    <input type="email" 
                        name="email" 
                        placeholder = 'Email Address'
                        className={style.formTextInput}
                        value={formData.email}
                        onChange={handleOnChange}
                    />
                </div>

                <div
                    className={style.buttonRow}
                >
                    <button 
                        type="button"
                        className='globalGoldButton'
                        onClick={stepTwoNextBtn}
                    >
                        Next
                    </button>
                </div>
            </>
            :null}

            {stepTwo ? 
            <>
                {/* Business Information */}
                <div
                    className={style.stepBlock}
                >
                    <h2
                        className='globalThirdHeading'
                    >
                        Business Information
                    </h2>

                    <input type="text" 
                        name="busName" 
                        placeholder = 'Business Name'
                        className={style.formTextInput}
                        value={formData.busName}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="webLink" 
                        placeholder = 'Business Website Link'
                        className={style.formTextInput}
                        value={formData.webLink}
                        onChange={handleOnChange}
                    />

                    <textarea 
                        name="busDescription" 
                        placeholder='Business Description of your business OR bullet points of what your business offers.'
                        rows={5}
                        className={style.formtextarea}
                        value={formData.busDescription}
                        onChange={handleOnChange}
                    ></textarea>

                    <textarea 
                        name="busCategories" 
                        placeholder='List of possible categories and keyword your business has to feature for:'
                        rows={5}
                        className={style.formtextarea}
                        value={formData.busCategories}
                        onChange={handleOnChange}
                    ></textarea>
                </div>

                <div
                    className={style.buttonRow}
                >
                    <button 
                        type="button"
                        className='globalGoldButton'
                        onClick={stepThreeNextBtn}
                    >
                        Next
                    </button>
                </div>
            </> :null}

            {stepThree ? 
            <>
                {/* address information */}
                <div
                    className={style.stepBlock}
                >
                    <h2
                        className='globalThirdHeading'
                    >
                        Address Information
                    </h2>

                    <input type="text" 
                        name="addLine1" 
                        placeholder = 'Address Line 1'
                        className={style.formTextInput}
                        value={formData.addLine1}
                        onChange={handleOnChange}
                    />

                    <input type="text" 
                        name="addLine2" 
                        placeholder = 'Address Line 2'
                        className={style.formTextInput}
                        value={formData.addLine2}
                        onChange={handleOnChange}
                    />

                    <input type="text" 
                        name="city" 
                        placeholder = 'City / Town'
                        className={style.formTextInput}
                        value={formData.city}
                        onChange={handleOnChange}
                    />

                    <input type="text" 
                        name="state" 
                        placeholder = 'State / Region'
                        className={style.formTextInput}
                        value={formData.state}
                        onChange={handleOnChange}
                    />

                    <input type="text" 
                        name="postCode" 
                        placeholder = 'Postal Code'
                        className={style.formTextInput}
                        value={formData.postCode}
                        onChange={handleOnChange}
                    />

                    <input type="text" 
                        name="gmbLink" 
                        placeholder = 'Google Maps Link'
                        className={style.formTextInput}
                        style={{marginTop:"1.5rem"}}
                        value={formData.gmbLink}
                        onChange={handleOnChange}
                    />

                    <fieldset
                        className={style.formFieldset}
                    >
                        <legend>Do you serve customers outside your location?</legend>

                        <div>
                            <input 
                                type="radio" 
                                name="serveCustomer" 
                                onChange={handleOnChange}
                                value={"Yes"}
                                checked={formData.serveCustomer === "Yes"}
                            />
                            <label htmlFor="">Yes</label>
                        </div>

                        <div>
                            <input 
                                type="radio" 
                                name="serveCustomer" 
                                onChange={handleOnChange}
                                value={"No"}
                                checked={formData.serveCustomer === "No"}
                            />
                            <label htmlFor="">No</label>
                        </div>

                        <input 
                            type="text" 
                            name="serveLocation" 
                            className={style.formTextInput}
                            placeholder='If Yes, What is the service area?'
                            value={formData.serveLocation}
                            onChange={handleOnChange}
                        />
                    </fieldset>
                </div>

                <div
                    className={style.buttonRow}
                >
                    <button 
                        type="button"
                        className='globalGoldButton'
                        onClick={stepFourNextBtn}
                    >
                        Next
                    </button>
                </div>
            </> : null}
            
            {stepFour ? 
            <>
                {/* social links */}
                <div
                    className={style.stepBlock}
                >
                    <h2
                        className='globalThirdHeading'
                    >
                        Social Media Links
                    </h2>

                    <input type="url" 
                        name="facebookLink" 
                        placeholder = 'Facebook'
                        className={style.formTextInput}
                        value={formData.facebookLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="instagramLink" 
                        placeholder = 'Instagram'
                        className={style.formTextInput}
                        value={formData.instagramLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="tiktokLink" 
                        placeholder = 'TikTok'
                        className={style.formTextInput}
                        value={formData.tiktokLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="twitterLink" 
                        placeholder = 'Twitter'
                        className={style.formTextInput}
                        value={formData.twitterLink}
                        onChange={handleOnChange}
                    />
            
                    <input 
                        type="url" 
                        name="pinterestLink" 
                        placeholder = 'Pinterest'
                        className={style.formTextInput}
                        value={formData.pinterestLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="linkedInLink" 
                        placeholder = 'LinkedIn'
                        className={style.formTextInput}
                        value={formData.linkedInLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="youtubLink" 
                        placeholder = 'YouTube'
                        className={style.formTextInput}
                        value={formData.youtubLink}
                        onChange={handleOnChange}
                    />

                    <input type="url" 
                        name="linktree" 
                        placeholder = 'Linktree'
                        className={style.formTextInput}
                        value={formData.linktree}
                        onChange={handleOnChange}
                    />
                </div>

                <div
                    className={style.buttonRow}
                >
                    <button 
                        type="submit"
                        className='globalGoldButton'
                        onClick={handleGetListedForm}
                    >
                        {loading ? "Sending" : "Submit"}
                    </button>
                </div>
            </> :null}

            {submitMessage ? 
                <p
                    className='globalXsmallText'
                >
                    {submitMessage}
                </p>
            : null }
        </form>
    )
}