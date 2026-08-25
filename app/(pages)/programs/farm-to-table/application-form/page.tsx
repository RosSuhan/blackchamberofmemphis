'use client'
import TextInput from "@/components/forms/fieldsets/TextInput";
import PageHeroSection from "@/components/heroSections/pageHeroSection";
import style from '@/components/symposiumComps/applicationForm/application.module.css'
import { useState } from "react";
import EmailInput from "@/components/forms/fieldsets/EmailInput";
import PhoneInput from "@/components/forms/fieldsets/PhoneInput";
import RadioInput from "@/components/forms/fieldsets/RadioInput";
import { validateBusinessName, validateEmail, validatePersonName, validatePhone, validateRequiredRadioSelection } from "@/lib/forms/validation";
import CheckInput from "@/components/forms/fieldsets/CheckInput";
import SelectInput from "@/components/forms/fieldsets/SelectInput";

export default function FarmToCouncilApplication(){
    const [ errors, setErrors ] = useState<Record<string, string>>({})
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState('')

    const [ businessName, setBusinessName] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ referred, setReferred ] = useState('')
    const [ businessType, setBusinessType ] = useState<string[]>([])
    const [ businessTypeOther, setBusinessTypeOther ] = useState('')
    const [ businessRole, setBusinessRole ] = useState('')
    const [ businessRoleOther, setBusinessRoleOther ] = useState('')
    const [ marketPlatform, setMarketPlatform ] = useState('')
    const [ weekdays, setWeekdays ] = useState('')
    const [ meetingTime, setMeetingTime ] = useState('')
    const [ meetingTimeOther, setMeetingTimeOther ] = useState('')

    console.log(businessType)

    function handleCheckBoxChange(e: React.ChangeEvent<HTMLInputElement>){
        const { value, checked } = e.target
        setBusinessType((prev) => {
            if(checked){
                return [...prev, value]
            }

            return prev.filter((item) => item !==value)
        })
    }

    const FARM_TO_TABLE_APPLICATION_GOOGLE_URL = ""

    async function handleFarmToTable(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true)
        // setSubmitMessage("")

        const validationErrors : Record<string, string> = {}
        const businessNameError = validateBusinessName(businessName)
        const firstNameError = validatePersonName(firstName)
        const lastNameError = validatePersonName(lastName)
        const emailError = validateEmail(email)
        const phoneError = validatePhone(phone)
        const referredError = validateBusinessName(referred)
        const marketPlatformError = validateRequiredRadioSelection(marketPlatform)
        const weekdaysError = validateRequiredRadioSelection(weekdays)
        const meetingTimeError = validateRequiredRadioSelection(meetingTime)

        if(businessNameError) { validationErrors.businessName = businessNameError }
        if(firstNameError) { validationErrors.firstName = firstNameError } 
        if(lastNameError) { validationErrors.lastName = lastNameError }
        if(emailError) { validationErrors.email = emailError }
        if(phoneError) { validationErrors.phone = phoneError }
        if(referredError) { validationErrors.referred = referredError }
        if(marketPlatformError) {validationErrors.marketPlatform = marketPlatformError}
        if(weekdaysError) { validationErrors.weekdays = weekdaysError}
        if(meetingTimeError) { validationErrors.meetingTime = meetingTimeError}

        if(Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})

        const farmToTableData = {
            businessName,
            firstName,
            lastName,
            businessRole,
            businessRoleOther,
            email,
            phone,
            marketPlatform,
            weekdays,
            referred,
        }

        try {
            await fetch(FARM_TO_TABLE_APPLICATION_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(farmToTableData)
            })

            setSubmitMessage('')
            setLoading(false)

            setTimeout(() => {
                // requestFormReset();
                setSubmitMessage('')
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.")
            setLoading(false);
        }
    }

    return(
        <main style={{width:"100%", display:'flex', flexDirection:'column', alignItems:"center", background:'purple'}}>
            <PageHeroSection
                eventHost = {''} 
                mainHeading = {'Farm To Council interest Form'}
                subHeading = {''}
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
                className={style.symFormSection}
                style={{background:'green'}}
            >
                <form
                    className={style.symForm}
                    onSubmit={handleFarmToTable}
                    noValidate
                >
                    <h3
                        className={style.symFormH3}
                    >
                        Company Information
                    </h3>
                    
                    {/* Business Name */}
                    <TextInput
                        name = {'businessName'} 
                        label = {'Business Name'}
                        value = {businessName}
                        onChange = {(e) => setBusinessName(e.target.value)}
                        error = {errors.businessName}
                        // required = {true}
                    />

                    {/* Business Type - select */}
                    <CheckInput
                        name = {'businessType'}
                        legend = {"Based on the days you selected, when are you available to participate in the council's meetings and events?"}
                        value = {businessType}
                        onChange = {handleCheckBoxChange}
                        options = {[
                            { value : "Restaurant", label : "Restaurant"},
                            { value : "FoodTruck_Trailer_Stand", label : "Food Truck/Trailer/Stand"},
                            { value : "Catering", label : "Catering"},
                            { value : "Carry-out", label : "Carry-out"},
                            { value : "Bar_BeverageService", label : "Bar/Beverage Service"},
                            { value : "Distributor", label : "Distributor"},
                            { value : "Co-packer", label : "Co-packer"},
                            { value : "Farmer", label : "Farmer"},
                            { value : "Supplier", label : "Supplier"},
                            { value : "Other", label : "Other"},
                        ]}
                        error = {errors.meetingTime}
                        otherOption = {{
                            value : "Other",
                            inputLabel : "Please specify",
                            inputValue : businessTypeOther,
                            onInputChange : ((e) => setBusinessTypeOther(e.target.value)),
                        }}
                    />
                    
                    {/* First Name */}
                    <TextInput
                        name = {'firstName'} 
                        label = {'First Name'}
                        value = {firstName}
                        onChange = {(e) => setFirstName(e.target.value)}
                        error = {errors.firstName}
                    />

                    {/* Last Name */}
                    <TextInput
                        name = {'lastName'} 
                        label = {'Last Name'}
                        value = {lastName}
                        onChange = {(e) => setLastName(e.target.value)}
                        error = {errors.lastName}
                    />

                    {/* Role with business - Radio Buttons */}
                    <RadioInput
                        name = {'businessRole'}
                        legend = {"Your Role within the business"}
                        value = {businessRole}
                        onChange = {(e) => setBusinessRole(e.target.value)}
                        options = {[
                            { value : 'Owner', label : 'Owner' },
                            { value : 'Partner', label : 'Partner' },
                            { value : 'General-Manager', label : 'General Manager' },
                            { value : 'Manage', label : 'Manager' },
                            { value : 'Chef', label : 'Chef' },
                            { value : 'Other', label : 'Other' },
                        ]}
                        otherOption = {{
                            value : "Other",
                            inputLabel : "Please specify",
                            inputValue : businessRoleOther,
                            onInputChange : ((e) => setBusinessRoleOther(e.target.value)),
                        }}
                    />

                    <EmailInput
                        name = {'email'}
                        label = {"Email"}
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        error = {errors.email}
                    />

                    <PhoneInput
                        name = {'phone'}
                        label = {'Phone'}
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        error = {errors.phone}
                    />

                    {/* days of the week - checkbox */}
                    {/* <CheckInput
                        name = {'weekdays'}
                        legend = {"What days of the week are you available to participate in the council's meetings and events?"}
                        value = {weekdays}
                        onChange = {(e) => setWeekdays(e.target.value)}
                        options = {[
                            { value : "Monday", label : "Monday"},
                            { value : "Tuesday", label : "Tuesday"},
                            { value : "Wednesday", label : "Wednesday"},
                            { value : "Thursday", label : "Thursday"},
                            { value : "Friday", label : "Friday"},
                            { value : "Saturday", label : "Saturday"},
                            { value : "Sunday", label : "Sunday"},
                        ]}
                        error = {errors.weekdays}
                    /> */}

                    {/* week day times for meeting  - checkbox*/}
                    {/* <CheckInput
                        name = {'meetingTime'}
                        legend = {"Based on the days you selected, when are you available to participate in the council's meetings and events?"}
                        value = {meetingTime}
                        onChange = {(e) => setMeetingTime(e.target.value)}
                        options = {[
                            { value : "Morning", label : "Morning (8 - 10 am)"},
                            { value : "Mid-Morning", label : "Mid-Morning (10 - 12 pm)"},
                            { value : "Afternoon", label : "Afternoon (12 - 4 pm)"},
                            { value : "5pmStart", label : "5 pm Start"},
                            { value : "Evening-6-8pm", label : "Evening (6 - 8 pm)"},
                            { value : "Other", label : "Other"},
                        ]}
                        error = {errors.meetingTime}
                        otherOption = {{
                            value : "Other",
                            inputLabel : "Please specify",
                            inputValue : meetingTimeOther,
                            onInputChange : ((e) => setMeetingTimeOther(e.target.value)),
                        }}
                    /> */}

                    {/* how did you hear about the Council - radio */}
                    {/* <RadioInput
                        name = {'marketPlatform'}
                        legend = {"How did you hear about the Council?"}
                        value = {marketPlatform}
                        onChange = {(e) => setMarketPlatform(e.target.value)}
                        options = {[
                            { value : 'Website', label : 'BCoM Website' },
                            { value : 'Email', label : 'Email' },
                            { value : 'SocialMedia', label : 'Social Media' },
                            { value : 'Event', label : 'Event' },
                            { value : 'Referral', label : 'Referral' },
                            { value : 'Other', label : 'Other' },
                        ]}
                        error = {errors.marketPlatform}
                        required
                    /> */}

                    <TextInput
                        name = {'referred'}
                        label = {"Please provide the organization or person who referred you to the program?"}
                        value = {referred}
                        onChange = {(e) => setReferred(e.target.value)}
                        error = {errors.referred}
                    />

                    <SelectInput
                        name = {'marketPlatform'}
                        label = {'How did you hear about the Council?'}
                        value = {marketPlatform}
                        onChange = {(e) => setMarketPlatform(e.target.value)}
                        selectOptions = {[
                            { value : 'Website', label : 'BCoM Website' },
                            { value : 'Email', label : 'Email' },
                            { value : 'SocialMedia', label : 'Social Media' },
                            { value : 'Event', label : 'Event' },
                            { value : 'Referral', label : 'Referral' },
                        ]}
                    />

                    <button type="submit">
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    {submitMessage ? 
                        <p
                            className={style.submitMessage}
                            
                        >
                            {submitMessage}
                        </p>
                    : null}
                </form>
            </section>
        </main>
    )
}