'use client'
import type { ChangeEvent } from "react"
import './SelectInput.css'

type SelectOptionProp = {
    value : string
    label : string
}

type SelectInputProps = {
    name : string
    label : string
    value : string
    onChange : (e: React.ChangeEvent<HTMLSelectElement>) => void
    required? : boolean
    error? : string
    disabled? : boolean
    placeholder? : string
    selectOptions : SelectOptionProp[]
}

export default function SelectInput({
    name,
    label,
    value,
    onChange,
    required = false,
    error,
    disabled = false,
    placeholder = "Please select an option",
    selectOptions,
} : SelectInputProps){

    const groupId = `form-${name}`

    return(
        <div
            className="selectInputBlock"
        >
            <label 
                htmlFor={groupId}
                className="textInputLabel"
            >
                {label}
                {required && (
                    <span aria-hidden="true" >*</span>
                )}
            </label>
            <select 
                id = {groupId}
                name = {name}
                value = {value}
                onChange={onChange}
                required = {required}
                disabled = {disabled}
                aria-invalid = {Boolean(error)}
                aria-describedby = {error ? `${groupId}-error` : undefined}
                className = "selectInput"
            >
                <option 
                    value="" 
                    disabled   
                >
                    {placeholder}
                </option>

                {selectOptions.map((option) => {
                    const optionId = `${groupId}-${option.value}`
                    return(
                        <option 
                            key={optionId}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    )
                })}
            </select>

            {error && (
                <p
                    id={`${groupId}-error`}
                >
                    {error}
                </p>
            )}
        </div>
    )
}