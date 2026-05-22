'use client'
import { useState } from 'react'
import style from './GetListedMainForm.module.css'
import { useRouter } from 'next/navigation'

type GetListedMainFormProp = {
    stepOne : boolean
    stepTwo : boolean
    stepThree : boolean
    stepFour : boolean
    stepTwoNextBtn : () => void
    stepThreeNextBtn : () => void
    stepFourNextBtn : () => void
}

export default function GetListedMainForm({stepOne, stepTwo, stepThree, stepFour, stepTwoNextBtn, stepThreeNextBtn, stepFourNextBtn}: GetListedMainFormProp){
    const router = useRouter();
    const [ errors, setErrors ] = useState<Record<string, string>>({})
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

    function validateStepOneForm(){
        const errors: Record<string, string> = {};

        if (!formData.fullName || formData.fullName.trim().length < 2){
            errors.fullName = "Please provide a full name."
        }

        const phoneRegex = /^(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)\d{3}[\s.-]?\d{4}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            errors.phoneNumber = "Please enter a valid phone number.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = "Please enter a valid email address.";
        }

        return errors
    }

    function testStepTwoNextBtn(){
        const validationErrors = validateStepOneForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({})
        stepTwoNextBtn()
    }

    

    function validateStepTwoForm(){
        const errors: Record<string, string> = {};

        if (!formData.busName || formData.busName.trim().length < 2){
            errors.busName = "Please enter a valid business name."
        }

        if (!formData.busDescription || formData.busDescription.trim().length < 2){
            errors.busDescription = "Please tell us something about your business."
        }

        return errors
    }

    function testStepThreeNextBtn(){
        const validationErrors = validateStepTwoForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return;
        }

        setErrors({})
        stepThreeNextBtn()
    }


    function validateStepThreeForm(){
        const errors: Record<string, string> = {}

        if (!formData.city || formData.city.trim().length < 2){
            errors.city = 'Please state in which state you are operating in.'
        }
        return errors
    }

    function testStepFourNextBtn(){
        const validationErrors = validateStepThreeForm();

        if (Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
            return
        }

        setErrors({})
        stepFourNextBtn()
    }

    const GETLISTED_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbxNtBdr1q4Tcc3QMB0QfDx4Zj_KkNiJt1IE-8ZThdmBrTzjFQcINQj3NFXIrG4PrC8B/exec"

    async function handleGetListedForm(e: React.FormEvent){
        e.preventDefault();

        // const validationErrors = validateStepOneForm();

        // if (Object.keys(validationErrors).length > 0) {
        //     setErrors(validationErrors);
        //     return;
        // }
        // setErrors({});
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

                    {errors.fullName && (
                        <p className={style.errorText}>
                            {errors.fullName}
                        </p>
                    )}

                    <input type="tel" 
                        name="phoneNumber" 
                        placeholder = 'Phone Number'
                        className={style.formTextInput}
                        value={formData.phoneNumber}
                        onChange={handleOnChange}
                    />

                    {errors.phoneNumber && (
                        <p className={style.errorText}>
                            {errors.phoneNumber}
                        </p>
                    )}

                    <input type="email" 
                        name="email" 
                        placeholder = 'Email Address'
                        className={style.formTextInput}
                        value={formData.email}
                        onChange={handleOnChange}
                    />

                    {errors.email && (
                        <p className={style.errorText}>
                            {errors.email}
                        </p>
                    )}
                </div>

                <div
                    className={style.buttonRow}
                >
                    <button 
                        type="button"
                        className='globalGoldButton'
                        onClick={testStepTwoNextBtn}
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
                    {errors.busName && (
                        <p className={style.errorText}>
                            {errors.busName}
                        </p>
                    )}

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
                    {errors.busDescription && (
                        <p className={style.errorText}>
                            {errors.busDescription}
                        </p>
                    )}

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
                        onClick={testStepThreeNextBtn}
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
                    {errors.city && (
                        <p className={style.errorText}>
                            {errors.city}
                        </p>
                    )}

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
                        onClick={testStepFourNextBtn}
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