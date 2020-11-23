const name = 'James'
console.log(name)

const stack = []

function reverseString(string) {
    let stringArray = []
    for (let i = 0; i < string.length; i++) {
        stack.push(string[i])
    }
    for (let i = 0; i < string.length; i++) {
        stringArray.push(stack.pop(string[i]))
    }
    const reverseString = stringArray.toString()
    return reverseString.replace(/[^a-zA-Z ]/g, '')
}

console.log(reverseString(name))