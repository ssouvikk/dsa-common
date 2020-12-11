//showing nextGreatestElemArrayElement in each position
//for last position -1

console.clear()

let findMax = (startIndex,arr) =>{
    let max = arr[startIndex+1]
    for(let j=startIndex+1; j<arr.length; j++){
       if(arr[j]>max) max = arr[j] 
    }
    if(startIndex=== arr.length-1) max = -1
    return max
}

let nextGreatestElemArray = (inp) =>{
    for(let i=0; i<inp.length; i++){
        inp[i] = findMax(i,inp)
    }
    return inp
}

console.log(nextGreatestElemArray([7,3,6,5,2,4]))
