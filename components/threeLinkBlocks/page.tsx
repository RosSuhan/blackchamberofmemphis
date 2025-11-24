'use client'
import style from '@/styles/threeLinkBlock.module.css'
import LinksButton from "./LinksButton";

export default function ThreeLinkBlock(){
    return(
        <section
            className={style.threeLinkSection}
        >
            <div className={style.threeLinkSectionWhiteBlock}/>

            <LinksButton
                path = {'/about-us'}
                image = {"/assets/linkButton1.png"}
                buttonText = {"What We Do"}
            />
            <LinksButton
                path = {'/programs'}
                image = {"/assets/linkButton2.jpg"}
                buttonText = {"How We Help"}
            />
            <LinksButton
                path = {'https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw'}
                image = {"/assets/linkButton3.png"}
                buttonText = {"Join BCOM"}
            />

            <LinksButton
                path = {'/memphis-ten'}
                image = {"/assets/back-office-support.webp"}
                buttonText = {"MemphisTEN"}
            />
        </section>
    )
}