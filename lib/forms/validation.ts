// Person name and lastname
export function validatePersonName(value : string): string | undefined {
    const trimmedValue = value.trim()

    if(!trimmedValue){
        return "Please enter your name."
    }

    if(trimmedValue.length < 2){
        return "Please enter a valid name."
    }

    return undefined
}

// Business name - including numbers for business eg 100 Black Business Men
export function validateBusinessName(value: string): string | undefined {
    const trimmedValue = value.trim()

    if(!trimmedValue){
        return "Please enter your business name."
    }

    if(trimmedValue.length < 2){
        return "Please enter a valid business name."
    }

    return undefined
}

// Email - forcing the @ sign for email.
export function validateEmail(value : string): string | undefined {
    const trimmedValue = value.trim()

    if(!trimmedValue){
        return "Please enter your email address."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!emailRegex.test(trimmedValue)) {
        return "Please enter a valid email address."
    }

    return undefined
}

// Phone Regex for America
export function validatePhone(value: string): string | undefined {
    const trimmedValue = value.trim()

    if(!trimmedValue) {
        return "Please enter your phone number."
    }

    const digitsOnly = trimmedValue.replace(/\D/g, "")

    const normalizedNumber = digitsOnly.length === 11 && digitsOnly.startsWith("1") ? digitsOnly.slice(1) : digitsOnly

    const phoneRegex = /^[2-9]\d{2}[2-9]\d{6}$/

    if(!phoneRegex.test(normalizedNumber)) {
        return "Please enter a valid phone number."
    }

    return undefined
}

// radio selection and select input
export function validateRequiredRadioSelection(value : string) : string | undefined {
    if (!value.trim()) {
        return "Please select an option."
    }
    return undefined
}

// checkbox group
export function validateRequiredCheckbox(value : string[]) : string | undefined {
    if(value.length === 0) {
        return "Please select at least one option."
    }

    return undefined
}

// url
export function validateUrl(value : string): string | undefined {
    if(!value.trim()){
        return undefined
    }

    try {
        const url = new URL(value)

        if(!['http:', 'https:'].includes(url.protocol)) {
            return "Please enter a valid website URL."
        }

        return undefined
    } catch {
        return "Please enter a valid website URL."
    }
}

// if url is required - to be placed with the error calls in handlesubmit function
// const errors: Record<string, string> = {}
// if (!website.trim()) {
//     errors.website = "Please provide your website."
// } else {
//     const websiteError = validateUrl(website)

//     if (websiteError) {
//         errors.website = websiteError
//     }
// }

export function validateRequiredAgreements(agreements: boolean[]): string | undefined {
    if(agreements.some((agreement) => !agreement)) {
        return "Please read and acknowledge all agreements before submitting."
    }
    return undefined
}