'use client'
import type { ChangeEvent } from "react"
import './RadioCheckInput.css'

type RadioOption = {
    value : string
    label : string
}

type OtherOption = {
    value : string
    label? : string
    inputLabel : string
    inputValue : string
    placeholder? : string
    onInputChange : (e: React.ChangeEvent<HTMLInputElement>) => void
    inputRequired? : boolean
}

type RadioGroupProps = {
    name : string
    legend : string
    value : string
    options : RadioOption[]
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
    required? : boolean
    error? : string
    disabled? : boolean
    otherOption? : OtherOption
}

export default function RadioInput({
    name,
    legend,
    value,
    options,
    onChange,
    required = false,
    error,
    disabled = false,
    otherOption
} : RadioGroupProps) {
    
    const groupId = `form-${name}`

    return(
        <fieldset
            aria-describedby = {error ? `${groupId}-error` : undefined}
            className="fieldset"
        >
            <legend>
                {legend}
                {required && (
                    <span aria-hidden="true" className='requiredStar'>*</span>
                )}
            </legend>

            {options.map((option) => {
                const optionId = `${groupId}-${option.value}`
                const isOther = otherOption?.value === option.value

                return(
                    <div 
                        key={option.value}
                    >
                        <div
                            className="inputBlock"
                        >
                            <input 
                                id = {optionId}
                                type = "radio"
                                name = {name}
                                value = {option.value}
                                checked = {value === option.value}
                                onChange = {onChange}
                                required = {required}
                                disabled = {disabled}
                            />

                            <label 
                                htmlFor = {optionId}
                            >
                                {option.label}
                            </label>
                        </div>

                        {isOther && value === option.value && (
                            <div
                                className="otherRow"
                            >
                                <label 
                                    htmlFor = {`${optionId}-input`}
                                >
                                    {otherOption.inputLabel}
                                </label>

                                <input 
                                    id = {`${optionId}-input`}
                                    type = "text"
                                    value = {otherOption.inputValue}
                                    placeholder = {otherOption.placeholder}
                                    onChange = {otherOption.onInputChange}
                                    required = {otherOption.inputRequired}
                                    disabled = {disabled}
                                    className="otherInputText"
                                />
                            </div>
                        )}
                    </div>
                )
            })}

            {error && (
                <p
                    id={`${groupId}-error`}
                    className="errorMessage"
                >
                    {error}
                </p>
            )}
        </fieldset>
    )
}