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