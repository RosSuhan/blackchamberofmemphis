'use client'
import './TextInput.css'
import type { ChangeEvent } from 'react'

type PhoneInputProps = {
    name : string
    label : string
    value : string
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
    placeholder? : string
    required? : boolean
    error? : string
    disabled? : boolean
}

export default function PhoneInput({
    name,
    label,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    disabled = false
} : PhoneInputProps){

    const inputId = `form-${name}`

    return(
        <div
            className='textInputBlock'
        >
            <label 
                htmlFor={inputId}
                className='textInputLabel'
            >
                {label}
                {required && <span aria-hidden="true" className='requiredStar'>*</span>}
            </label>

            <input 
                id = {inputId}
                type = "tel" 
                name = {name}
                value = {value}
                onChange = {onChange}
                placeholder = {placeholder}
                required = {required}
                disabled = {disabled}
                aria-invalid = {Boolean(error)}
                aria-describedby = {error ? `${inputId}-error` : undefined}
                className='textInput'
            />

            {error && (
                <p 
                    id={`${inputId}-error`}
                    className='errorMessage'
                >
                    {error}
                </p>
            )}
        </div>
    )
}