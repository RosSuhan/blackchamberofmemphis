'use client'
import GetListedForm from '@/components/forms/GetListedForm'
import PageHeroSection from '@/components/heroSections/pageHeroSection'
import style from '@/styles/getListed.module.css'

export default function GetListed(){
    return(
        <main>
            <PageHeroSection
                mainHeading = "Get Your Business Listed"
                subHeading = "Share your business with the community - we'll help you refine and present it professionally so it stands out and gets discovered."
                searchbar = {false}
                ctaButtons={[]}
                placeholder=""
            />
            
            <section
                className={style.getListedSection}
            >
                <h2
                    className={style.getListedHeading}
                >
                    Get Your Business Listed in the Black-Owned Business Directory
                </h2>
                <p
                    className={style.getListedText}
                >
                    The Black Chamber of Memphis welcomes all Black-owned businesses located in Memphis, Tennessee to join our online directory. This resource is completely free, and you do not need to be a Chamber member to be listed. Our goal is to highlight and uplift the incredible range of Black entrepreneurs who strengthen and serve our community every day.
                </p>
                <p
                    className={style.getListedText}
                >
                    By completing the form below, you’ll provide the details we need to create an accurate and appealing profile for your business. Once your information is submitted, our team will review it and begin preparing your listing. Approved listings are typically added to the directory within 1–2 business days.
                </p>
                <p
                    className={style.getListedText}
                >
                    We’re excited to showcase your business and help more customers discover your products, services, and story.
                </p>

                <GetListedForm/>
            </section>
        </main>
    )
}