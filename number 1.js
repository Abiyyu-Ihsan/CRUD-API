function mergeArrays(arr1, arr2) {

    return [...arr1, ...arr2];
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

const mergedArray = mergeArrays(list1, list2);
console.log(mergedArray); 