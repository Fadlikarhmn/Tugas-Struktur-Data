function findUniqueElements(arr) {
    const elementCount = {};

    // Hitung frekuensi setiap elemen
    arr.forEach(num => {
        elementCount[num] = (elementCount[num] || 0) + 1;
    });

    // Ambil elemen yang muncul hanya sekali
    const uniqueElements = Object.keys(elementCount).filter(num => elementCount[num] === 1).map(Number);

    return uniqueElements;
}

const inputArray = [1, 2, 2, 3, 3, 4, 5, 5];
const uniqueElements = findUniqueElements(inputArray);

console.log('Ada:', uniqueElements.length > 0 ? uniqueElements : '[]');
console.log('Ga ada:', uniqueElements.length === 0 ? '[]' : '[]');