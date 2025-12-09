// Common Form Types for React + TypeScript

import React from "react"

import {
    InputChangeHandler,
    TextareaChangeHandler,
    SelectChangeHandler,
    FormSubmitHandler,
    FileInputChangeHandler,
} from "./eventTypes"

// 🔹 Generic Form Field (controlled input)
export type FieldProps<T = string> = {
    name: string
    value: T
    onChange: InputChangeHandler | TextareaChangeHandler | SelectChangeHandler
    label?: string
    placeholder?: string
    required?: boolean
}

// 🔹 Example: Input Field
export type InputFieldProps = {
    name: string
    value: string
    onChange: InputChangeHandler
    type?: "text" | "email" | "password" | "number" | "tel" | "url"
    label?: string
    placeholder?: string
    required?: boolean
}

// 🔹 Example: Textarea Field
export type TextareaFieldProps = {
    name: string
    value: string
    onChange: TextareaChangeHandler
    label?: string
    placeholder?: string
    rows?: number
    required?: boolean
}

// 🔹 Example: Select Field
    export type SelectOption = {
    value: string
    label: string
}

export type SelectFieldProps = {
    name: string
    value: string
    onChange: SelectChangeHandler
    options: SelectOption[]
    label?: string
    required?: boolean
}

// 🔹 Form Wrapper
export type FormProps = {
    onSubmit: FormSubmitHandler
    children: React.ReactNode
    className?: string
}

export type FileInputFieldProps = {
    name: string
    files: FileList | null
    onChange: FileInputChangeHandler
    label?: string
    required?: boolean
    accept?: string // e.g. "image/*,.pdf"
    multiple?: boolean
}