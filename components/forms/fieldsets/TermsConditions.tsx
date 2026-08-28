'use client'
import type { ChangeEvent } from "react"
import './RadioCheckInput.css'

type AgreementProp = {
    name : string
    text : string
}

type TermsCondProps = {
    legend : string
    value : Record<string, boolean>
    agreements : AgreementProp[]
    onChange : (e: ChangeEvent<HTMLInputElement>) => void
    error? : string
    disabled? : boolean
}

export default function TermsConditions({
    legend,
    value,
    agreements,
    onChange,
    error,
    disabled = false
}: TermsCondProps){

    const termsId = `form-${name}`

    return(
        <fieldset
            aria-describedby = {error ? `${termsId}-error` : undefined}
            className="fieldset"
        >
            <legend
                
            >
                {legend}
                <span aria-hidden="true" className="requiredStar">*</span>
            </legend>

            {agreements.map((agreement) => (
                <div
                    key={agreement.name}
                    className="inputBlock"
                >   
                    <input 
                        id = {`form-${agreement.name}`}
                        type = "checkbox" 
                        name = {agreement.name}
                        checked = {value[agreement.name] ?? false}
                        onChange = {onChange}
                        disabled = {disabled}
                    />

                    <label 
                        htmlFor = {`form-${agreement.name}`}
                    >
                        {agreement.text}
                    </label>
                </div>
            ))}

            {error && (
                <p
                    id = {`${termsId}-error`}
                    className="errorMessage"
                >
                    {error}
                </p>
            )}
        </fieldset>
    )
}