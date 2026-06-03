import ConfirmationSection from '@/components/forms/Confirmed'

export default function FormSuccess(){
    const ctaButtons = [
        {
            path: '/partnerships',
            type: 'globalGoldButton',
            name: 'Our Partnerships'
        },
        {
            path: '/membership',
            type: 'globalGoldButton',
            name: 'Membership'
        }, 
        {
            path: '/business-directory',
            type: 'globalGoldButton',
            name: 'Directory'
        }
    ]

    return(
        <main>
            <ConfirmationSection
                pageHeading = {"You're All Set!"}
                pageSecondHeading = {'Thank you for reaching out to the Black Chamber of Memphis.'}
                pageText = {`
                    <p>We have received your partnership enquiry and a confirmation has been sent to your email address. Our team will review the details you've shared and be in touch with you shortly.</p>
                    <p>We look forward to exploring what we can build together for Memphis's Black business community.</p>`}
                ctaButtons = {ctaButtons}
            />
        </main>
    )
}