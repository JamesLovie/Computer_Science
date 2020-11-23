function makeAdder(number) {
    let count = 1
    return function add() {
        count = count + number
        return count
    }
}

let instance1 = makeAdder(10)
let instance2 = makeAdder(20)
console.log(instance1())
console.log(instance1())
console.log(instance2())
console.log(instance2())