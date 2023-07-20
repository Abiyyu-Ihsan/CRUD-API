function combineAlternately(arr1, arr2) {
    const combined = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combined.push(arr1[i]);
        }
        if (i < arr2.length) {
            combined.push(arr2[i]);
        }
    }

    return combined;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

const combinedArray = combineAlternately(list1, list2);
console.log(combinedArray);
