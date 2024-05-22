function areAnagrams(inputString1, inputString2) {
    // 1 lower case
    const lowerCased1 = inputString1.toLowerCase();
    const lowerCased2 = inputString2.toLowerCase();

    // 2 Without unwanted characters
    const withoutUnwantedCharacters1 = lowerCased1.replace(/[^a-zA-Z0-9]/g, '');
    const withoutUnwantedCharacters2 = lowerCased2.replace(/[^a-zA-Z0-9]/g, '');

    // 3 Check Anagram by sorting
    const sorted1 = withoutUnwantedCharacters1.split('').sort().join('');
    const sorted2 = withoutUnwantedCharacters2.split('').sort().join('');
    console.log(sorted1)
    console.log(sorted2)

    return sorted1 === sorted2
}

// Version 2
// function areAnagrams(str1, str2) {
//     const normalize = (str) =>
//         str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('');
//     return normalize(str1) === normalize(str2);
// }

console.log(areAnagrams("hello", "world")); // should be false
console.log(areAnagrams("banana", "ananas")); // should be false
console.log(areAnagrams("listen", "silent")); // should be true
console.log(areAnagrams("liSten", "sIlent")); // should be true
console.log(areAnagrams("Evil", "viLe")); // should be true
console.log(areAnagrams("Dormitory", "Dirty room!")); // should be true
console.log(areAnagrams("A gentle,man", "Elegant man")); // should be true
console.log(areAnagrams("Clint Eastwood", "Old West action")); // should be true