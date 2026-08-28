// 'use client'
// import { updateCheckboxValues } from '@/lib/forms/updateCheckboxValue'
// import Logo from '@/components/LOGO/page'
// import './sandbox.css'
// import { useRef, useState } from 'react'
// import { validateBusinessName, validateEmail, validatePersonName, validatePhone, validateRequiredAgreements, validateRequiredCheckbox, validateRequiredRadioSelection } from '@/lib/forms/validation'
// import TextInput from '@/components/forms/fieldsets/TextInput'
// import FileInput from '@/components/forms/fieldsets/FileInput'
// import EmailInput from '@/components/forms/fieldsets/EmailInput'
// import PhoneInput from '@/components/forms/fieldsets/PhoneInput'
// import UrlInput from '@/components/forms/fieldsets/UrlInput'
// import TextareaInput from '@/components/forms/fieldsets/TextareaInput'
// import RadioInput from '@/components/forms/fieldsets/RadioInput'
// import CheckInput from '@/components/forms/fieldsets/CheckInput'
// import SelectInput from '@/components/forms/fieldsets/SelectInput'
// import TermsConditions from '@/components/forms/fieldsets/TermsConditions'
// import { MenuClose } from '@/components/icons/menuClose'
// import { MenuHamburger } from '@/components/icons/menuHamburger'
// import clsx from 'clsx'
// import { menuList } from '@/lib/menuList'
// import Link from 'next/link'
// import { ChevronDown } from '@/components/icons/ChevronDown'
// import { ChevronUp12 } from '@/components/icons/ChevronUp'
// import Navigation from '@/components/nav/Header/navigation/page'
// import SpeakerSection from '@/components/symposiumComps/speakerSection/page'


export default function Sandbox(){
    // const [ menuOpen, setMenuOpen ] = useState(false)

    // const submittingRef = useRef(false)
    // const [ loading, setLoading ] = useState(false)
    // const [ submitMessage, setSubmitMessage ] = useState('')
    // const [ errors, setErrors ] = useState<Record<string, string>>({})

    // const [ busName, setBusName ] = useState('')
    // const [ busLogo, setBusLogo ] = useState<File | null>(null)
    // const [ primPerson, setPrimPerson ] = useState('')
    // const [ jobTitle, setJobTitle ] = useState('')
    // const [ email, setEmail ] = useState('')
    // const [ phone, setPhone ] = useState('')
    // const [ busAddress, setBusAddress ] = useState('')
    // const [ website, setWebsite ] = useState('')
    // const [ socialHandles, setSocialHandles ] = useState('')
    // const [ memberStatus, setMemberStatus ] = useState('') 
    // const [ serviceCat, setServiceCat ] = useState<string[]>([])
    // const [ otherServiceCat, setOtherServiceCat ] = useState('')
    // const [ scopeOfServ, setScopeOfServ ] = useState('')
    // const [ estMarketValue, setEstMarketValue ] = useState('')
    // const [ experience, setExperience ] = useState('')
    // const [ capExecution, setCapExecution ] = useState('')
    // const [ executApproach, setExecutApproach ] = useState('')
    // const [ equipment, setEquipment ] = useState('')
    // const [ dateAvailable, setDateAvailable ] = useState<string[]>([])
    // const [ enhancements, setEnhancements ] = useState('')
    // const [ agreements, setAgreements ] = useState({
    //     agreement1 : false,
    //     agreement2 : false,
    //     agreement3 : false
    // })

    // const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { value, checked } = e.currentTarget

    //     setServiceCat((prev) =>
    //         updateCheckboxValues(prev, value, checked)
    //     )

    //     setDateAvailable((prev) =>
    //         updateCheckboxValues(prev, value, checked)
    //     )

    //     if(value === 'Other' && !checked) {
    //         setOtherServiceCat('')
    //     }
    // }

    // const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, checked } = e.currentTarget

    //     setAgreements((prev) => ({
    //         ...prev,
    //         [name]: checked
    //     }))
    // }

    // const SYMPOSIUM_GOOGLE_URL = ''

    // async function handleInkindSponsForm(e: React.FormEvent){
    //     e.preventDefault();

    //     const validationErrors : Record<string, string> = {}

    //     const busNameError = validateBusinessName(busName)
    //     if(busNameError) { validationErrors.busName = busNameError }

    //     const primPersonError = validatePersonName(primPerson)
    //     if(primPersonError) { validationErrors.primPerson = primPersonError }

    //     const emailError = validateEmail(email)
    //     if(emailError) { validationErrors.email = emailError }

    //     const phoneError = validatePhone(phone)
    //     if(phoneError) { validationErrors.phone = phoneError }

    //     const memberStatusError = validateRequiredRadioSelection(memberStatus)
    //     if(memberStatusError) { validationErrors.memberStatus = memberStatusError }

    //     const serviceCatError = validateRequiredCheckbox(serviceCat)
    //     if(serviceCatError) { validationErrors.serviceCat = serviceCatError }

    //     const experienceError = validateBusinessName(experience)
    //     if(experienceError) { validationErrors.experience = experienceError }

    //     const capExecutionError = validateRequiredRadioSelection(capExecution)
    //     if(capExecutionError) { validationErrors.capExecution = capExecutionError }

    //     const dateAvailableError = validateRequiredCheckbox(dateAvailable)
    //     if(dateAvailableError) { validationErrors.dateAvailable = dateAvailableError }

    //     const agreementError = validateRequiredAgreements(Object.values(agreements))
    //     if(agreementError) { validationErrors.agreements = agreementError }

    //     if(Object.keys(validationErrors).length > 0) {
    //         setErrors(validationErrors)
    //         return
    //     }
    //     setErrors({})

    //     const formData = {
    //         busName,
    //         busLogo,
    //         primPerson,
    //         jobTitle,
    //         email,
    //         phone,
    //         busAddress,
    //         website,
    //         socialHandles,
    //         memberStatus,
    //         serviceCat,
    //         otherServiceCat,
    //         scopeOfServ,
    //         estMarketValue,
    //         experience,
    //         capExecution,
    //         executApproach,
    //         equipment,
    //         dateAvailable,
    //         enhancements,
    //         agreements
    //     }

    //     if(submittingRef.current) return

    //     submittingRef.current = true

    //     setLoading(true)
    //     setSubmitMessage('')

    //     try{
    //         await fetch(SYMPOSIUM_GOOGLE_URL, {
    //             method : "POST",
    //             mode : "no-cors",
    //             headers : { "Content-Type" : "application/json"},
    //             body : JSON.stringify(formData)
    //         })

    //         setSubmitMessage("Thank you! Your application has been submitted successfully.")

    //         setTimeout(() => {
    //             setSubmitMessage('');
    //         }, 5000);
    //     } catch (err) {
    //         console.error(err);
    //         setSubmitMessage("Something went wrong. Please try again later.")
    //         setLoading(false)
    //     } finally {
    //         setLoading(false)
    //         submittingRef.current = false
    //     }
    // }

    return(
        <main
            className='pageHeroSection'
        >
            {/* <header
                className={style.header}
                style={{position:"relative"}}
            >
                <Link
                    href={'/'}
                    className={style.headerLogo}
                >
                    <Logo
                        colorScheme={'blackGold'}
                    />
                </Link>

                <Navigation
                    menuOpen = {menuOpen}
                />

                <button 
                    type="button"
                    className={style.mobileNavMenuButton}
                    onClick={() => {
                        setMenuOpen(!menuOpen)
                    }}    
                >
                    {menuOpen ? 
                        <MenuClose
                            width="1.6rem"
                            height="1.6rem"
                        /> 
                        :
                        <MenuHamburger
                            width="1.6rem"
                            height="1.6rem"
                        />
                    }
                </button>
            </header> */}

            {/* in-kind Sponsorshipsection */}
            {/* <section
                className='formSection'
            >
                <form 
                    action=""
                    className='form'
                >
                    <h3
                        className='globalThirdHeading'
                    >
                        Company Information
                    </h3> */}

                    {/* BusName */}
                    {/* <TextInput
                        name = {'busName'}
                        label = {"Business Name"}
                        value = {busName}
                        onChange = {(e) => setBusName(e.target.value)}
                        error = {errors.busName}
                        required = {true}
                    />

                    <FileInput
                        name = {'busLogo'}
                        label = {"Business Logo"}
                        description="Upload your business logo if available. PNG, JPG, JPEG, or SVG. Maximum 5 MB."
                        accept=".png,.jpg,.jpeg,.svg"
                        maxSize={5 * 1024 * 1024}
                        onChange={(e) => setBusLogo(e.target.files?.[0] ?? null)}
                    />

                    <TextInput
                        name = {'primPerson'}
                        label = {"Primary Contact Person"}
                        value = {primPerson}
                        onChange = {(e) => setPrimPerson(e.target.value)}
                        error = {errors.primPerson}
                        required = {true}
                    />

                    <TextInput
                        name = {'jobTitle'}
                        label = {"Title / Role"}
                        value = {jobTitle}
                        onChange = {(e) => setJobTitle(e.target.value)}
                    />

                    <EmailInput
                        name = {'email'}
                        label = {"Email"}
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                        error = {errors.email}
                        required = {true}
                    />

                    <PhoneInput
                        name = {'phone'}
                        label = {'Phone'}
                        value = {phone}
                        onChange = {(e) => setPhone(e.target.value)}
                        error = {errors.phone}
                        required = {true}
                    />

                    <TextInput
                        name = {"busAddress"}
                        label = {"Business Address"}
                        value = {busAddress}
                        onChange = {(e) => setBusAddress(e.target.value)}
                    />

                    <UrlInput
                        name = {'website'}
                        label = {"Website"}
                        value = {website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />

                    <TextareaInput
                        name = {'socialHandles'}
                        label = {"Social Media Handles"}
                        value = {socialHandles}
                        onChange = {(e) => setSocialHandles(e.target.value)}
                    />

                    <RadioInput
                        name = {"memberStatus"}
                        legend = {"Are you a member of the Black Chamber of Memphis?"}
                        required = {true}
                        value = {memberStatus}
                        onChange = {(e) => setMemberStatus(e.target.value)}
                        options = {[
                            { value : "Yes", label : "Yes" },
                            { value : "No", label : "No" },
                            { value : "notSure", label : "Not Sure"}
                        ]}
                    />

                    <h3
                        className='globalThirdHeading'
                    >
                        Service Category
                    </h3>

                    <CheckInput
                        name = {"serviceCat"}
                        legend = {"Primary Services Category"}
                        value = {serviceCat}
                        onChange = {handleCheckbox}
                        options = {[
                            { value : 'Florals', label : 'Florals' },
                            { value : 'Event_Production', label : 'Event Production'},
                            { value : 'Photography', label : 'Photography' },
                            { value : 'Videography', label : 'Videography' },
                            { value : 'Decor_Design', label : 'Decor & Design' },
                            { value : 'Logistical_Support', label : 'Logistical Support' },
                            { value : 'Marketing_PublicRelations', label : 'Marketing & Public Relations' },
                            { value : 'Signage_EnvironmentalBranding', label : 'Signage & Environmental Branding' },
                            { value : 'Content_Creation', label : 'Content Creation' },
                            { value : 'Creative_Media_Services', label : 'Creative Media Services (Design)' },
                            { value : 'Entertainment', label : 'Entertainment' },
                            { value : 'Other', label : 'Other' },
                        ]}
                        error = {errors.serviceCat}
                        otherOption = {{
                            value : "Other",
                            inputLabel : "Please specify",
                            inputValue : otherServiceCat,
                            onInputChange : ((e) => setOtherServiceCat(e.target.value)),
                        }}
                    />

                    <TextareaInput
                        name = {"scopeOfServ"}
                        label = {'Scope of Proposed Services'}
                        helpText = {'Briefly describe the services you propose to provide, including key deliverables and how they align with the needs of a multi-day, 250+ attendee event.'}
                        value = {scopeOfServ}
                        onChange = {(e) => setScopeOfServ(e.target.value)}
                        rows = {5}
                    />

                    <TextInput
                        name = {"estMarketValue"}
                        label = {'Estimate Fair Market'}
                        value = {estMarketValue}
                        onChange = {(e) => setEstMarketValue(e.target.value)}
                        placeholder = {'$'}
                    />

                    <TextareaInput
                        name = {'experience'}
                        label = {"Relevant Experience"}
                        helpText = {'Briefly describe your experience supporting events of similar size, scope, or audience.'}
                        value = {experience}
                        onChange = {(e) => setExperience(e.target.value)}
                        required = {true}
                        error = {errors.experience}
                        rows = {5}
                    />

                    <SelectInput
                        name = {'capExecution'}
                        label = {"Capacity & Execution"}
                        value = {capExecution}
                        onChange = {(e) => setCapExecution(e.target.value)}
                        required = {true}
                        error = {errors.capExecution}
                        selectOptions = {[
                            { value : "Solo_Operator", label : "Solo Operator" },
                            { value : "Small_Team", label : "Small Team (2 - 5)" },
                            { value : "Mid-size_Team", label : "Mid-size Team (6-15)" },
                            { value : "Large-scale_Production_Team", label : "Large-scale Production Team (15+)" },
                        ]}
                    />

                    <TextareaInput
                        name = {'executApproach'}
                        label = {"Execution Apporach"}
                        helpText = {'Briefly describe how you would execute your services for this event.'}
                        value = {executApproach}
                        onChange = {(e) => setExecutApproach(e.target.value)}
                    />

                    <TextareaInput
                        name = {'equipment'}
                        label = {'List any equipment, technology, or resources you will provide (if applicable)'}
                        value = {equipment}
                        onChange = {(e) => setEquipment(e.target.value)}
                    />

                    <CheckInput
                        name = {'dateAvailable'}
                        legend = {'Availability:'}
                        value = {dateAvailable}
                        onChange = {handleCheckbox}
                        required = {true}
                        options = {[
                            { value : 'Sep_24_2026', label : 'Thursday, September 24, 2026'},
                            { value : 'Oct_2_2026', label : 'Friday, October 2, 2026'},
                        ]}
                    />

                    <TextareaInput
                        name = {'enhancements'}
                        label = {'Optional Enchancements'}
                        value = {enhancements}
                        onChange = {(e) => setEnhancements(e.target.value)}
                    />

                    <h3
                        className='globalThirdHeading'
                    >
                        Agreement & Acknowledgement
                    </h3>

                    <TermsConditions
                        legend = {'Please tick all the boxes:'}
                        agreements = {[
                            { name : 'agreement1', text : 'I understand that sponsorship tier placement is based on the fair market value of my in-kind contribution and is subject to review and approval by the Black Chamber of Memphis.' },
                            { name : 'agreement2', text : 'I understand that selection is not guaranteed and that BCoM reserves the right to request revisions, clarification, or adjust scope as needed.' },
                            { name : 'agreement3', text : 'I understand that a Memorandum of Understanding (MOU) will be required if selected.' }
                        ]}
                        value = {agreements}
                        onChange={handleAgreementChange}
                        error = {errors.agreements}
                    />

                    <button type="submit">
                        {loading ? "Sending..." : "Submit"}
                    </button>

                    {submitMessage ? 
                        <p
                            className='submitMessage'
                            
                        >
                            {submitMessage}
                        </p>
                    : null}
                </form>
            </section> */}
        </main>
    )
}