'use client'
import style from '@/styles/popup.module.css'
import { useEffect, useState } from 'react';

type BcPopupProps = {
    storageKey: string;
    delay?: number;
}

export default function BcPopup({
    storageKey,
    delay = 900,
}:BcPopupProps){

    const [ isOpen, setIsOpen ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const [ submitMessage, setSubmitMessage ] = useState("")
    const [ formData, setFormData ] = useState({
        name: '',
        email: '',
        tel: ''
    })

    useEffect(() => {
        const handleSaveContact = () => {
            if(localStorage.getItem(storageKey)) return;

            const timer = setTimeout(() => {
                setIsOpen(true);
            }, delay);

            return () => clearTimeout(timer);
        };

        window.addEventListener('bcm:contact-saved', handleSaveContact);
        return () => window.removeEventListener('bcm:contact-saved', handleSaveContact);
    }, [storageKey, delay]);
    
        const closeModal = () => {
            localStorage.setItem(storageKey, "true");
            setIsOpen(false);
        };
    
        if(!isOpen) return null;

    const BUSCARD_GOOGLE_URL = "https://script.google.com/macros/s/AKfycbxKiotiSQXDXKbocX9jdmNUMRtlD7eUlLRkS46i7i8-27KEny1sUpQv94sZzPEBUaaEiA/exec";

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    async function busCardFormSubmittion(e:React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setSubmitMessage("")

        try {
            await fetch(BUSCARD_GOOGLE_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })

            console.log(formData)

            setSubmitMessage("Thank you for sharing your details. We will keep in touch with you.")
            setLoading(false)

            setTimeout(() => {
                setSubmitMessage("");
                closeModal()
            }, 5000);
        } catch (err) {
            console.error(err);
            setSubmitMessage("Something went wrong. Please try again.")
            setLoading(false);
        }
    }

    
    return(
        <div
            className={style.popupOverlay}
        >
            <div
                className={style.popup}
            >
                <div
                    className={style.closeButtonRow}
                >
                    <button
                        className={style.popupCloseBtn}
                        onClick={closeModal}
                        aria-label="Close announcement"
                    >
                        X
                    </button>
                </div>
                <h2
                    className={style.popupTitle}
                >
                    Great connecting with you
                </h2>

                <p
                    className={style.popupDescription}
                >
                    Add your details so we can follow up - no spam, just updates from the Black Chamber of Memphis worth your time.
                </p>

                <form 
                    className={style.popupContactRequestForm}
                >
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='Name'
                        className={style.popupFormInput}
                        onChange={handleOnChange}
                        value={formData.name}
                    />

                    <input 
                        type="email" 
                        name="email" 
                        placeholder='Email'
                        className={style.popupFormInput}
                        onChange = {handleOnChange}
                        value={formData.email}
                    />

                    <input 
                        type="tel" 
                        name="tel"
                        placeholder='Contact Number'
                        className={style.popupFormInput}
                        onChange = {handleOnChange}
                        value={formData.tel}
                    />

                    <button 
                        type="submit"
                        className='globalGoldButton'
                        onClick={busCardFormSubmittion}
                    >
                        {loading ? "Sending your Data" : "Add my details"}
                    </button>

                    {submitMessage ? 
                        <p
                            className="globalText"
                        >
                            {submitMessage}
                        </p>
                    : null }
                </form>
                <cite
                    className={style.popupDescription}
                >
                    We&apos;ll only use this to send Chamber updates - never shared with third parties.
                </cite>
            </div>
        </div>
    )
}