// given a sorted array of ints and an int find the first index where that int appears 

// Input : arr[] = [1, 3, 5, 7, 8, 9, 20, 21],  x = 5
// Output : First Occurrence = (index) 2

const findInt = (arr, int) => {
    //find index of num appearance 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === int) return i
    }
    //return -1 if num doesn't exist in []
    return -1
}

findInt('test1', [1, 3, 5, 7, 8, 9, 20, 21], 5) // 2
findInt('test2', [1, 3, 5, 7, 8, 9, 20, 21], 2) // -1
findInt('test3', [], 5) // []
findInt('test4', [1, 3, 5, 7, 8, 9, 20, 21],) //2