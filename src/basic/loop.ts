export default function loop() {
    whileLoop() //0 es5
    doWhileLoop() //1 es5
    forLoop() //2 es5
    forInArrayLoop() //3
    forInObjectLoop() //4
    forOfArrayLoop() //5
    forOfMapLoop() //6
    forOfSetLoop() //7
    forOfStringLoop() //8
    symbolIterator() //9

}
function whileLoop() {
    console.log(`---------- 0. while-loop ----------`)
    let count:number = 0
    let sum:number = 0
    while (count<101) {
        sum += count++
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function doWhileLoop() {
    console.log(`---------- 1. doWhileLoop ----------`)
    let sum:number = 0
    let count:number = 0
    do {
        sum += count++
    } while (count !== 101)
    console.log(`1부터 100까지 합: ${sum}`)
}
function forLoop() {
    console.log(`---------- 2. forLoop ----------`)
    let count:number = 0
    let sum:number = 0
    for (;count<101;count++){
        sum+=count
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function forInArrayLoop() {
    console.log(`---------- 3. forInArrayLoop ----------`)
    let array:Array<number> = []
    let count:number = 0
    for(;count<101;count++){
        array.push(count)
    }
    console.log(`1부터 100까지의 수: ${array}`)
}
function forInObjectLoop() {
    console.log(`---------- 4. forInObjectLoop ----------`)
}
function forOfArrayLoop() {
    console.log(`---------- 5. forOfArrayLoop ----------`)
}
function forOfMapLoop() {
    console.log(`---------- 6. forOfMapLoop ----------`)
}
function forOfSetLoop() {
    console.log(`---------- 7. forOfSetLoop ----------`)
}
function forOfStringLoop() {
    console.log(`---------- 8. forOfStringLoop ----------`)
}
function symbolIterator() {
    console.log(`---------- 9. symbolIterator ----------`)
}