export default function hello(name: string):string {
    return `Hello ${name}`
}
export function bye(name: string):string {
    return `goodbye ${name}`
}
export function birthday(name: string, year: number): string {
    const profile = {
        name: name,
        age: new Date().getFullYear() - year
    }
    return `프로필: 이름 ${profile.name}, ${profile.age}세`
}
export function add(num1: number, num2: number) {
    return num1+num2
}
