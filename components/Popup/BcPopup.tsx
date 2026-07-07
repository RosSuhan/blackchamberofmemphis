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

    const [isOpen, setIsOpen ] = useState(false)

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
                        name="" 
                        id="" 
                        placeholder='Name'
                        className={style.popupFormInput}
                    />

                    <input 
                        type="email" 
                        name="" 
                        id="" 
                        placeholder='Email'
                        className={style.popupFormInput}
                    />

                    <input 
                        type="tel" 
                        name="" 
                        id="" 
                        placeholder='Contact Number'
                        className={style.popupFormInput}
                    />

                    <button 
                        type="submit"
                        className='globalGoldButton'
                    >
                        Add my details
                    </button>
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