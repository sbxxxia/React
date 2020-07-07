import hello, {bye, birthday, add} from "./hello";

let menu: number = 2
let name,profile: string = ""
switch (menu) {
    case 0:
        name = "홍길동"
        const message = bye(name)
        console.log(message)
        break

    case 1:
        name = "김유신"
        let year = 2002
        profile = birthday(name,year)
        console.log(profile)
        break

    case 2:
        let num1:number = 10
        let num2:number = 30
        let addResult:number = add(num1,num2)
        console.log(`덧셈 결과: ${addResult}`)
        break

    default:
        console.log("존재하지 않는 케이스입니다.")
        break
}