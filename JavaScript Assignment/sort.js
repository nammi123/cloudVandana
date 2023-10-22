function Descending(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
               
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const originalArray = [10,3,9,5,8,2,1];
const sortedArray =Descending(originalArray);

console.log(sortedArray); 
