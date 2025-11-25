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
                image = {"/assets/linkbutton1.webp"}
                buttonText = {"What We Do"}
            />
            <LinksButton
                path = {'/programs'}
                image = {"/assets/linkbutton2.webp"}
                buttonText = {"How We Help"}
            />
            <LinksButton
                path = {'https://theblackbusinessassociationofmemphis.growthzoneapp.com/ap/Membership/Application/EPKm4Grw'}
                image = {"/assets/linkbutton3.webp"}
                buttonText = {"Join BCOM"}
            />

            <LinksButton
                path = {'/memphis-ten/back-office-support'}
                image = {"/assets/back-office-support.webp"}
                buttonText = {"BOSS"}
            />
        </section>
    )
}