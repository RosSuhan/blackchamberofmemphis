'use client'
import './fttApp.css'
import CheckInput from "@/components/forms/fieldsets/CheckInput"
import EmailInput from "@/components/forms/fieldsets/EmailInput"
import PhoneInput from "@/components/forms/fieldsets/PhoneInput"
import RadioInput from "@/components/forms/fieldsets/RadioInput"
import TextInput from "@/components/forms/fieldsets/TextInput"
import PageHeroSection from "@/components/heroSections/pageHeroSection"
import { validateBusinessName, validateEmail, validatePersonName, validatePhone, validateRequiredRadioSelection } from "@/lib/forms/validation"
import { useRef, useState } from "react"

export default function FarmToTableAppication(){
    const submittingRef = useRef(false)
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState('')
    const [ errors, setErrors ] = useState<Record<string, string>>({})

    const [ busName, setBusName ] = useState('')
    const [ busType, setBusType ] = useState('')
    const [ otherBusType, setOtherBusType ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastname ] = useState('')
    const [ busRole, setBusRole ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ availableDays, setAvailableDays ] = useState<string[]>([])
    const [ availableTime, setAvailableTime ] = useState<string[]>([])
    const [ referralPlatform, setReferralPlatform ] = useState('')
    const [ referredBy, setReferredBy ] = useState('')

    function handleAvailableDayChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value, checked } = e.target
    
        setAvailableDays((prev) => {
            if(checked){
                return [...prev, value]
            }
    
            return prev.filter((item) => item !==value)
        })
    }

    function handleAvailableTimeChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value, checked } = e.target
    
        setAvailableTime((prev) => {
            if(checked){
                return [...prev, value]
            }
    
            return prev.filter((item) => item !==value)
        })
    }

    const FTT_APP_GOOGLE_URL = '';

    async function handleFttAppSubmit(e: React.FormEvent){
        e.preventDefault();

        const validationErrors : Record<string, string> = {}

        const busNameError = validateBusinessName(busName)
        if(busNameError) { validationErrors.busName = busNameError }

        const busTypeError = validateRequiredRadioSelection(busType)
        if(busTypeError) { validationErrors.busType = busTypeError }

        const firstNameError = validatePersonName(firstName)
        if(firstNameError) { validationErrors.firstName = firstNameError }

        const lastNameError = validatePersonName(lastName)
        if(lastNameError) { validationErrors.lastName = lastNameError }

        const emailError = validateEmail(email)
        if(emailError) { validationErrors.email = emailError }

        const phoneError = validatePhone(phone)
        if(phoneError) { validationErrors.phone = phoneError }

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
            return
        } setErrors({})

        const formData = {
            busName,
            busType,
            otherBusType,
            firstName,
            lastName,
            busRole,
            email,
            phone,
            availableDays,
            availableTime,
            referralPlatform,
            referredBy
        }

        if(submittingRef.current) return

        submittingRef.current = true

        setLoading(true)
        setSubmitMessage('')

        try {
            await fetch(FTT_APP_GOOGLE_URL, {
                method : "POST",
                mode : "no-cors",
                headers : { "Content-Type" : "application/json"},
                body : JSON.stringify(formData)
            })

            setSubmitMessage("Thank you! We have successfully received your application.")

            setTimeout(() => {
                setSubmitMessage('')
            }, 5000);

        } catch (err) {
            console.error(err)
            setSubmitMessage('')
            setLoading(false)
        } finally {
            setLoading(false)
            submittingRef.current = false
        }
    }

    return(
        <main>
            <PageHeroSection
                eventHost = {''}
                mainHeading = {'Farm To Table Council Interest Form'}
                subHeading = {''}
                heroParagraph = {''}
                searchbar = {false}
                ctaButtons = {[]}
                placeholder = {''}
                initialSearchTerm = {''}
                eventDate = {''}
                eventTime = {''}
                eventPrice = {''}
                eventAddress = {''}
                stateButtons = {[]}
                selectedState = {''}
                setSelectedState = {undefined}
            />

            <section
                className="formSection"
            >
                <form
                    className="meetingElectedForm"
                >
                    <TextInput
                        name = {'busname'}
                        label = {'Business Name'}
                        value = {busName}
                        onChange = {(e) => setBusName(e.target.value)}
                        required = {true}
                        error = {errors.busName}
                    />

                    <RadioInput
                        name = {"busType"}
                        legend = {'Business Type'}
                        value = {busType}
                        options = {[
                            { value : "Restaurant" , label : "Restaurant" },
                            { value : 'Food_Truck-Trailer-Stand', label : 'Food Truck / Trailer / Stand' },
                            { value : 'Catering', label : 'Catering' },
                            { value : 'Carry-Out', label : 'Carry-Out' },
                            { value : 'Bar-Beverage_Service', label : 'Bar / Beverage Service' },
                            { value : 'Distributor', label : 'Distributor' },
                            { value : 'Co-Packer', label : 'Co-Packer' },
                            { value : 'Farmer', label : 'Farmer' },
                            { value : 'Supplier', label : 'Supplier' },
                            { value : 'Other', label : 'Other' },
                        ]}
                        onChange = {(e) => setBusType(e.target.value)}
                        required = {true}
                        error = {errors.busType}
                        otherOption  = {{
                            value : "Other",
                            inputLabel : "Please Specify",
                            inputValue : otherBusType,
                            onInputChange : ((e) => setOtherBusType(e.target.value))
                        }}
                    />

                    {/* <div
                        className="formRow"
                    > */}
                        <TextInput
                            name = {"firstName"}
                            label = {"First Name"}
                            value = {firstName}
                            onChange = {(e) => setFirstName(e.target.value)}
                            required = {true}
                            error = {errors.firstName}
                        />
                    
                        <TextInput
                            name = {"lastName"}
                            label = {"Last Name"}
                            value = {lastName}
                            onChange = {(e) => setLastname(e.target.value)}
                            required = {true}
                            error = {errors.lastName}
                        />
                    {/* </div> */}

                    <RadioInput
                        name = {"busRole"}
                        legend = {"Your role within the business"}
                        value = {busRole}
                        onChange = {(e) => setBusRole(e.target.value)}
                        options={[
                            { value : 'Owner', label : 'Owner' },
                            { value : 'Partner', label : 'Partner' },
                            { value : 'General Manager', label : 'General Manager' },
                            { value : 'Manager', label : 'Manager' },
                            { value : 'Chef', label : 'Chef' },
                            { value : 'Other', label : 'Other' },
                        ]}
                    />

                    <EmailInput
                        name = {"email"}
                        label = {"Email"}
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        required = {true}
                        error = {errors.email}
                    />

                    <PhoneInput
                        name = {"phone"}
                        label = {"Phone Number"}
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        required = {true}
                        error = {errors.phone}
                    />

                    <CheckInput
                        name = {'availableDays'}
                        legend = {"What days of the week are you available to participate in the council's meetings and events?"}
                        value = {availableDays}
                        onChange={handleAvailableDayChange}
                        options={[
                            { value : "Monday", label : 'Monday' },
                            { value : "Tuesday", label : 'Tuesday' },
                            { value : "Wednesday", label : 'Wednesday' },
                            { value : "Thursday", label : 'Thursday' },
                            { value : "Friday", label : 'Friday' },
                            { value : "Saturday", label : 'Saturday' },
                            { value : "Sunday", label : 'Sunday' },
                        ]}
                    />

                    <CheckInput
                        name = {"availableTime"}
                        legend = {"Based on the days you selected, when are you available to participate in the council's meetings and events?"}
                        value = {availableTime}
                        onChange = {handleAvailableTimeChange}
                        options={[
                            { value : "Mornings", label : 'Mornings (8 - 10am)' },
                            { value : "Mid-Morning", label : 'Mid-Morning (10am - 12pm)' },
                            { value : "Afternoon", label : 'Afternoon (12 - 4pm)' },
                            { value : "5pm", label : '5pm Start' },
                            { value : "Evening", label : 'Evening (6 - 8pm)' },
                        ]}
                    />

                    <RadioInput
                        name = {'referralPlatform'}
                        legend = {"How did you hear about the Council"}
                        value = {referralPlatform}
                        onChange={(e) => setReferralPlatform(e.target.value)}
                        options={[
                            { value : "Website", label : 'Black Chamber of Memphis Website' },
                            { value : "Email", label : 'Email' },
                            { value : "SocialMedia", label : 'Social Media' },
                            { value : "Event", label : 'Event' },
                            { value : "Referral", label : 'Referral' },
                        ]}
                    />

                    <TextInput
                        name = {'referredBy'}
                        label = {"Please provide the organization or person who referred you to the program?"}
                        value = {referredBy}
                        onChange={(e) => setReferredBy(e.target.value)}
                    />

                    <button 
                        type="submit"
                        onClick={handleFttAppSubmit}
                        className="globalGoldButton"
                        style={{marginTop:"1rem"}}
                    >
                        {loading ? "Submitting Your Reservation" : "Submit"}
                    </button>

                    {submitMessage ? 
                        <p
                            className='submitMessage'
                            
                        >
                            {submitMessage}
                        </p>
                    : null}     
                </form>
            </section>
        </main>
    )
}