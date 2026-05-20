'use client'
import StepRow from "@/components/FORMcomponents/StepRow";
import GetListedMainForm from "@/components/forms/GetListedMainForm";
import React, { useState } from "react";


export default function ListingFormComponent(){
    const [ stepOne, setStepOne ] = useState(true)
    const [ stepTwo, setStepTwo ] = useState(false)
    const [ stepThree, setStepThree ] = useState(false)
    const [ stepFour, setStepFour ] = useState(false)

    function stepOneAction() {
        setStepOne(true)
        setStepTwo(false)
        setStepThree(false)
        setStepFour(false)
    }

    function stepTwoAction(){
        setStepOne(false)
        setStepTwo(true)
        setStepThree(false)
        setStepFour(false)
    }

    function stepThreeAction(){
        setStepOne(false)
        setStepTwo(false)
        setStepThree(true)
        setStepFour(false)
    }

    function stepFourAction(){
        setStepOne(false)
        setStepTwo(false)
        setStepThree(false)
        setStepFour(true)
    }

    return(
        <>
            {stepOne ? 
                <StepRow
                    stepNumber="1"
                    stepName = {'Contact Details'}
                    // stepLeftButton = {}
                    stepRightButton = {stepTwoAction}
                />
            :null}

            {stepTwo ? 
                <StepRow
                    stepNumber="2"
                    stepName = {'Business Details'}
                    stepLeftButton = {stepOneAction}
                    stepRightButton = {stepThreeAction}
                />
            :null}

            {stepThree ? 
                <StepRow
                    stepNumber="3"
                    stepName = {'Address Information'}
                    stepLeftButton = {stepTwoAction}
                    stepRightButton = {stepFourAction}
                />
            :null}

            {stepFour ? 
                <StepRow
                    stepNumber="4"
                    stepName = {'Social Media'}
                    stepLeftButton = {stepThreeAction}
                    // stepRightButton = {}
                />
            :null}

            <GetListedMainForm
                stepOne = {stepOne}
                stepTwo = {stepTwo}
                stepThree = {stepThree}
                stepFour = {stepFour}
                stepTwoNextBtn = {stepTwoAction}
                stepThreeNextBtn = {stepThreeAction}
                stepFourNextBtn = {stepFourAction}
            />
        </>
    )
}