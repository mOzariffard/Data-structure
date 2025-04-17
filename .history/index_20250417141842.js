let arr = [1, 3, 8, 6, 2];
const bubble_sort = function(arr) {
    for (let i = 0; i < arr.length; i++) { 
        for (let j = 0; j < arr.length - i - 1; j++) { 
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]; 
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; 
};

console.log(bubble_sort(arr)); 