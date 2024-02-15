

export default function textDelay (text: string, timeout :number) {
    return new Promise (resolve => setTimeout(() => resolve(text), timeout))
}