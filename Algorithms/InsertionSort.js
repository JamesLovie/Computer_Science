const unsortedArray = [9, 5, 1, 4, 3]

// const testArray = Array.from({
//     length: 400
// }, () => Math.floor(Math.random() * 400));

console.log(testArray)

function insertionSort(array) {
    array.forEach((key, index) => {
        let j = index - 1
        if (index > 0) {
            while (j >= 0 && key < array[j]) {
                array[j + 1] = array[j]
                j = j - 1
            }
            array[j + 1] = key
        }
    })
    return array
}

console.log(insertionSort(unsortedArray))