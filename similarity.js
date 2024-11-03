function checkSimilarity(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonElements = arr2.filter(num => set1.has(num));
    return commonElements;
}

const arr3 = [7, 8, 9];
const arr4 = [7, 9, 10, 11];
console.log("Similarity:", checkSimilarity(arr3, arr4));