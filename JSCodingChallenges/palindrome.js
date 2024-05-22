function isPalindrome(inputString) {
    // 1 lower case
    const lowerCased = inputString.toLowerCase();

    // 2 Without unwanted characters
    const withoutUnwantedCharacters = lowerCased.replace(/[^a-zA-Z0-9]/g, '');

    console.log(withoutUnwantedCharacters)

    // 3. reverse
    const reversed = withoutUnwantedCharacters.split('').reverse().join('');
    return reversed === withoutUnwantedCharacters;
}



isPalindrome("Test"); // should be false
isPalindrome("kajak"); // should be true
isPalindrome("Kajak"); // should be true
isPalindrome("No lemon, no melon"); // should be true
isPalindrome("A man, a plan, a canal. Panama"); // should be true