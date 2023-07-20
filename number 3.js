function compareStrings(str1, str2) {

    const lowerStr1 = str1.toLowerCase();
    const lowerStr2 = str2.toLowerCase();

    return lowerStr1 === lowerStr2;
}

const string1 = "I like to drink water";
const string2 = "I Like Too Drink Water";

const areStringsEqual = compareStrings(string1, string2);
console.log(areStringsEqual); 