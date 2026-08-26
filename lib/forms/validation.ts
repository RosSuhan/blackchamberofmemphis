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