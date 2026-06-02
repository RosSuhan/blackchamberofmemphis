'use client'
import style from './becomePartnerForm.module.css'

export default function BecomePartnerForm(){
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

                    <input 
                        type="text" 
                        name="" 
                        placeholder='Business Name'
                        className={style.becomePartnerInput}
                    />

                    <input 
                        type="text" 
                        name="" 
                        placeholder='Website'
                        className={style.becomePartnerInput}
                    />
                    
                    <input 
                        type="text" 
                        name="" 
                        placeholder='Industry / Sector'
                        className={style.becomePartnerInput}
                    />

                    <textarea 
                        name="" 
                        id=""
                        placeholder='Brief description of what you do.'
                        rows={5}
                        className={style.becomePartnerTextArea}
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
                
                    <input 
                        type="text" 
                        name="" 
                        placeholder='Full Name'
                        className={style.becomePartnerInput}
                    />

                    <input 
                        type="text" 
                        name="" 
                        placeholder='Position in the Company'
                        className={style.becomePartnerInput}
                    />

                    <input 
                        type="text" 
                        name="" 
                        placeholder='Email Address'
                        className={style.becomePartnerInput}
                    />

                    <input 
                        type="text" 
                        name="" 
                        placeholder='Phone number'
                        className={style.becomePartnerInput}
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
                            name="" 
                            id=""
                            rows={8}
                            className={style.becomePartnerTextArea}
                        ></textarea>
                    </fieldset>

                    <fieldset
                        className={style.becomePartnerFieldset}
                    >
                        <legend>
                            What resources or opportunities can your organisation bring?
                        </legend>
                        <textarea 
                            name="" 
                            id=""
                            rows={8}
                            className={style.becomePartnerTextArea}
                        ></textarea>
                    </fieldset>
                </div>

                <div
                    className={style.becomePartnerSubmitRow}
                >
                    <button 
                        type="submit"
                        className='globalGoldButton'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}