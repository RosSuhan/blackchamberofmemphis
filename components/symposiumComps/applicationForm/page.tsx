'use client'
import style from './application.module.css'

export default function SymposiumApplication(){
    return(
        <section
            className={style.symFormSection}
        >
            <form action=""
                className={style.symForm}
            >
                <h3
                    className={style.symFormH3}
                >
                    Company Information
                </h3>

                {/* business Name */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Business Name
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* primary contact */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Primary Contact
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* title / role */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Title / Role
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* email */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Email
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* phone */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Phone
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* business Address */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Business Address
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* website */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Website
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                    />
                </fieldset>

                {/* social handles */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Social Media Handles:
                    </legend>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* member? */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Are you a member of the Black Chamber of Memphis
                    </legend>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Yes
                    </div>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        No
                    </div>
                    <div
                        className={style.symFormRadioBlock}
                    >
                        <input 
                            type="radio" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Not Sure
                    </div>
                </fieldset>

                <h3
                    className={style.symFormH3}
                >
                    Service Category
                </h3>

                {/* primary services */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Primary Services Categorie
                    </legend>
                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Florals
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Event Production
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Photography
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Videography
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Decor & Design
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Logistical Support
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Marketing & Public Relations
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Signage & Environmental Branding
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Content Creation
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Creative Media Services (Design)
                    </div>

                    <div
                        className={style.symFormCheckBlock}
                    >
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormRadio}
                        />
                        Entertainment
                    </div>

                    <div
                        className={style.symFormOther}
                    >
                        Other:
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            className={style.symFormOtherInput}
                        />
                    </div>
                </fieldset>
                
                {/* scope of proposed services */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Scope of Proposed Services
                    </legend>
                    <span
                        className={style.symFormcaption}
                    >
                        Briefly describe the services you propose to provide, including key deliverables and how they align with the needs of a multi-day, 250+ attendee event.
                    </span>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                {/* estimate fair market */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Estimate Fair Market
                    </legend>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className={style.symFormInput}
                        placeholder='$'
                    />
                </fieldset>

                {/* relevant experience */}
                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Relevant Experience
                    </legend>   

                    <span
                        className={style.symFormcaption}
                    >
                        Briefly describe your experience supporting events of similar size, scope, or audience.
                    </span>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Capacity of Execution
                    </legend>
                    <select 
                        name="" 
                        id=""
                        className={style.symFormSelect}
                    >
                        <option value="">option 1</option>
                    </select>
                </fieldset>

                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Execution Approuch
                    </legend>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        List any Equipment, tech or resources
                    </legend>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Availability:
                    </legend>
                    <div>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormInput}
                        />
                        August 27, 2026
                    </div>
                    <div>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormInput}
                        />
                        August 28, 2026
                    </div>
                </fieldset>

                <fieldset
                    className={style.symFormFieldset}
                >
                    <legend
                        className={style.symFormLegend}
                    >
                        Optional Enhancements
                    </legend>
                    <textarea 
                        name="" 
                        id="" 
                        rows={5}
                        className={style.symFormTextarea}
                    ></textarea>
                </fieldset>

                <h3>
                    Agreement & Acknowledgement
                </h3>
                <fieldset
                    className={style.symFormFieldset}
                >
                    <div>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormInput}
                        />
                        <p></p>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormInput}
                        />
                        <p></p>
                    </div>
                    
                    <div>
                        <input 
                            type="checkbox" 
                            name="" 
                            id="" 
                            className={style.symFormInput}
                        />
                        <p></p>
                    </div>
                </fieldset>
            </form>
        </section>
    )
}