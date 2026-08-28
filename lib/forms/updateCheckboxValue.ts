export function updateCheckboxValues(
    currentValues : string[],
    value : string,
    checked : boolean
): string[] {

    if(checked) {
        return [...currentValues, value]
    }

    return currentValues.filter((item) => item !== value)
}