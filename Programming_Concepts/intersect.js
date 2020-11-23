

function intersect(sortedArrays) {
    let newArray = [];

    let a = sortedArrays[0].split(', ');
    let b = sortedArrays[1].split(', ');
    
    newArray = a.filter(value => b.includes(value));
    
    console.log('Intersect results of two sets: ' + newArray);
    return newArray;
}

let sortedArray = ["1, 2, 4, 10, 11, 211", "1, 2, 3, 10, 11, 15, 20, 211"];
console.log('Two sets: ' + sortedArray);
intersect(sortedArray);
