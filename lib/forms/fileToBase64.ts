export function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.onload = () => {
            if(typeof reader.result !== "string") {
                reject(new Error("Unable to read the file."))
                return
            }
            
            const base64Data = reader.result.split(",")[1]

            resolve(base64Data)
        }

        reader.onerror = () => {
            reject(new Error("Unable to read the file."))
        }

        reader.readAsDataURL(file)
    })
}