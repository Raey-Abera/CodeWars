//Write a function that capitalizes the first letter of every word in a given sentence 

//using for of loop
const capitalize = str => {
    const words = [];
    //split string by spaces to target first letter of word and get an array
    for (let word of str.split(' ')){
        //uppeCase 1t letter of word and slice 
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

///////////////////////////////////////////////////////////////////////////

// const capitalize = str => {
//     //create 'result' which is the first char of the input str 
//     let result = str[0].toUpperCase();
//     //loop through each char in str
//     for (let i = 1; i < str.length; i++) {
//         //condition to check if the char to the left has a space
//         if (str[i - 1] === ' ') {
//             //capitalize it and add it to the result
//             result += str[i].toUpperCase()
//             //else
//         } else {
//             //add it to the result
//             result += str[i];
//         }
//     }
//     return result;
// }

console.log(capitalize('bitch better have my money'))