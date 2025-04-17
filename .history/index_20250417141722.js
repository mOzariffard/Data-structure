let arr = [1, 3, 8, 6, 2];
const bubble_sort = function(arr) {
    for (let i = 0; i < arr.length; i++) { // Fixed 'lenght' to 'length'
        for (let j = 0; j < arr.length - i - 1; j++) { // Fixed 'lenght' to 'length'
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]; // Fixed 'temp' assignment
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; // Added return statement
};

console.log(bubble_sort(arr)); // Logs the sorted array