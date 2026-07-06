'use client'
import ConfirmationSection from "@/components/forms/Confirmed";
import Footer from "@/components/nav/Footer/page";
import Header from "@/components/nav/Header/page";

export default function Confirmed(){
    const ctaButtons = [
        {
            path: '/business-directory',
            type: 'globalGoldButton',
            name: 'Directory'
        },
        {
            path: '/membership',
            type: 'globalGoldButton',
            name: 'Membership'
        }, 
        {
            path: '/events',
            type: 'globalGoldButton',
            name: 'Events'
        }
    ]
    return(
        <>
            <Header/>
            <ConfirmationSection
                pageHeading = {'Your Business Has Been Submitted'}
                pageSecondHeading = {'What Happens Next'}
                pageText = {`
                    <p>Our team will review your listing.<br/>You will receive confirmation once it's live</p>`}
                ctaButtons={ctaButtons}
            />
            <Footer/>
        </>
    )
}