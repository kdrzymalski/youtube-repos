function sortEvenOdd(numbers) {
    return numbers.reduce((accumulator, current) => {
        const key = current % 2 === 0 ? 'even' : 'odd';
        accumulator[key].push(current);

        return accumulator;
    }, { even: [], odd: [] });
}

console.log(sortEvenOdd([1, 2, 3, 4, 5, 6])); // { even: [2, 4, 6], odd: [1, 3, 5] }
console.log(sortEvenOdd([7, 8, 9, 10, 11, 12])); // { even: [8, 10, 12], odd: [7, 9, 11] }
console.log(sortEvenOdd([2, 4, 6, 8, 10])); // { even: [2, 4, 6, 8, 10], odd: [] }
console.log(sortEvenOdd([1, 3, 5, 7, 9])); // { even: [], odd: [1, 3, 5, 7, 9] }
console.log(sortEvenOdd([1, 2, 2, 3, 3, 4, 4])); // { even: [2, 2, 4, 4], odd: [1, 3, 3] }
console.log(sortEvenOdd([])); // { even: [], odd: [] }