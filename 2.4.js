function extractSushiWord(inputString) {
    const words = inputString.split(' ');
    for (const word of words) {
        if (word.toLowerCase() === 'sushi') {
            return word;
        }
    }
    return null;
}


const input1 = "One of the recommended food from japan is Sushi";
const input2 = "Indonesian doesn’t eat Sushi";

const output1 = extractSushiWord(input1);
const output2 = extractSushiWord(input2);

console.log(output1);
console.log(output2);
