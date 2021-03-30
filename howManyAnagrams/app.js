//write a function that takes in an array of strngs 
//and returns an array for each array item
//it returns a new array that has two items
//one is a boolean - are there anagrams in this array
//and the other is how many anagram pairs 
//ie. ['raey', 'year'] -> [true, 1] // one pair

const isAnagram = (string1, string2) => {
    if (string1.length !== string2.length) return false;
    const sortedString1 = string1.split('').sort().join('').toUpperCase();
    const sortedString2 = string2.split('').sort().join('').toUpperCase();
    return sortedString1 === sortedString2 ? true : false;
}
const howManyAnagrams = array => {
    if (!Array.isArray(array)) return `This is not an array this is a ${typeof array}`;
    if (array.length === 0) return 'Please enter an array with values';
    let count = 0;
    let anagramBoolean;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (i === j) {
                continue;
            }
            const getAnagram = isAnagram(array[i], array[j]);
            if (getAnagram === true) {
                count++
            }
        }
    }
        
    if (count > 0) {
        anagramBoolean = true
    } else {
        anagramBoolean = false
    }
    return [anagramBoolean, count]
}

console.log('test1', howManyAnagrams(['stacy', 'yacts'])); // [true, 1]
console.log('test2', howManyAnagrams(['raey', 'stacy', 'year', 'pat', 'tap', 'sully', 'rat', 'tar'])) // [true, 3] 
console.log('test3', howManyAnagrams(['stacy', 'year', 'pat', 'sully', 'rat'])) //[false, 0]
console.log('test4', howManyAnagrams(['raey', 'stacy', 'year', 'pat', 'tap', 'sully', 'rat', 'tar', 'silent', 'listen', 'yllus', 'ycats'])) // [true, 6]
console.log('test5', howManyAnagrams([])) // epmty array msg 
console.log('test6', howManyAnagrams({})) //not array- object msg 
console.log('test7', howManyAnagrams('')) //not array- object string

