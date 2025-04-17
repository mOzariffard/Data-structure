let arr =[1,3, 8 , 6 , 2];
const bubble_sort = function(arr){

    for(let i=0 ; i<arr.lenght ; i++){
        for(let j = 0 ; j<arr.lenght - i - 1 ; j++){
            if(arr[j]> arr[j+1]){
                const temp = arr[i]; 
                arr[i]= arr[j+1];
                arr[j+1]=temp;
            }
        }
    }

    return arr;
}
console. log(bubble_sort(arr));