'use client'
import type { ChangeEvent } from "react"

type TextareaInputProps = {
    name : string
    label : string
    helpText? : string
    value : string 
    onChange : (e: ChangeEvent<HTMLTextAreaElement>) => void
    placeholder? : string
    required? : boolean
    error? : string
    disabled? : boolean
    rows? : number
    minLength? : number
    maxLength? : number
}

export default function TextareaInput({
    name,
    label,
    helpText,
    value,
    onChange,
    placeholder,
    required = false,
    error,
    disabled = false,
    rows = 5,
    minLength,
    maxLength
} : TextareaInputProps) {

    const textareaId = `form-${name}`

    return(
        <div>
            <label 
                htmlFor={textareaId}

            >
                {label}
                {required && (
                    <span aria-hidden="true" className='requiredStar'>*</span>
                )}
            </label>

            {helpText && (
                <p>
                    {helpText}
                </p>
            )}

            <textarea 
                id = {textareaId}
                name = {name}
                value = {value} 
                onChange = {onChange}
                placeholder = {placeholder}
                required = {required}
                disabled = {disabled}
                rows = {rows}
                minLength = {minLength}
                maxLength = {maxLength}
                aria-invalid = {Boolean(error)}
                aria-describedby = {error ? `${textareaId}-error` : undefined}
            />

            {error && (
                <p
                    id = {`${textareaId}-error`}
                >
                    {error}
                </p>
            )}
        </div>
    )
}