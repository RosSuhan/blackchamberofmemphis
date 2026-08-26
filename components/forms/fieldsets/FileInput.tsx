'use client'
import type { ChangeEvent } from "react"

type FileInputProps = {
    name : string
    label : string
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
    accept? : string
    required? : boolean
    error? : string
    disabled? : boolean
    maxSize? : number
    description? : string
}

export default function FileInput({
    name,
    label,
    onChange,
    accept,
    required = false,
    error,
    disabled = false,
    maxSize,
    description
}: FileInputProps ){

    const fileInputId = `form-${name}`
    const descriptionId = `${fileInputId}-description`
    const errorId = `${fileInputId}-error`

    const describedby = [
        description ? descriptionId : null,
        error ? errorId : null
    ].filter(Boolean).join(" ") || undefined

    return(
        <div>
            <label 
                htmlFor = {fileInputId}
            >
                {label}
                {required && <span aria-hidden='true'>*</span>}
            </label>

            {description && (
                <span id={descriptionId}>
                    {description}
                </span>
            )}
            

            <input 
                id = {fileInputId}
                type = "file" 
                name = {name}
                accept = {accept}
                onChange = {onChange}
                required = {required}
                disabled = {disabled}
                aria-invalid = {Boolean(error)}
                aria-describedby = {describedby}
            />

            {error && (
                <p
                    id={`${fileInputId}-error`}
                    
                >
                    {error}
                </p>
            )}
        </div>
    )
}