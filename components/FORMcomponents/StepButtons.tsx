'use client'
import style from './StepButtons.module.css'
import { BaselineArrowBack } from "../icons/BaselineArrowBack"
import { BaselineArrowForward } from "../icons/BaselineArrowForward"

type StepButtonsProp = {
    leftArrow? : boolean
    handleButtonClick? : React.MouseEventHandler<HTMLButtonElement>
}

export default function StepButtons({leftArrow, handleButtonClick} : StepButtonsProp){

    return(
        <button 
            type="button"
            className={style.stepButton}
            onClick={handleButtonClick}
        >
            {leftArrow ? <BaselineArrowBack/> : <BaselineArrowForward/>}

            {leftArrow ? <span className={style.buttonText}>Back</span> : <span className={style.buttonText}>Next</span>}
        </button>
    )
}