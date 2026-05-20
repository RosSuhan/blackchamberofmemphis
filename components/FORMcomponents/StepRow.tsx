import StepButtons from './StepButtons'
import style from './StepRow.module.css'

type StepRowProps = {

    stepNumber : string
    stepName : string
    stepLeftButton? : React.MouseEventHandler<HTMLButtonElement>
    stepRightButton? : React.MouseEventHandler<HTMLButtonElement>
}

export default function StepRow({stepNumber, stepName, stepLeftButton, stepRightButton}: StepRowProps){
    return(
        <section
            className={style.stepRowSection}
        >
            <div
                className={style.stepRowButtonBlock}
            >
                {stepLeftButton ? 
                    <StepButtons
                        leftArrow = {true}
                        handleButtonClick={stepLeftButton}
                    />
                :null}
            </div>

            <div
                className={style.stepRowStepsIndicator}
            >
                Step {stepNumber} of 3 - {stepName}
            </div>

            <div
                className={style.stepRowButtonBlock}
            >
                {stepRightButton ? 
                    <StepButtons
                        leftArrow = {false}
                        handleButtonClick={stepRightButton}
                    />
                :null}
            </div>
        </section>
    )
}