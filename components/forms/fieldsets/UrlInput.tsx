'use client'
import type { ChangeEvent } from "react"
import './TextInput.css'

type UrlInputProps = {
    name : string
    label : string
    value : string
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
    placeholder? : string
    required? : boolean
    error? : string
    disabled? : boolean
}

export default function UrlInput({
    name, 
    label,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    disabled = false
} : UrlInputProps){

    const inputId = `form-${name}`

    return(
        <div
            className="textInputBlock"
        >
            <label 
                htmlFor={inputId}
                className="textInpuLabel"
            >
                {label}
                {required && <span aria-hidden="true" className='requiredStar'>*</span>}
            </label>

            <input 
                id = {inputId}
                type = "url" 
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