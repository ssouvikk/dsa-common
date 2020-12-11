//sort an array
console.clear()

let sortArray = (inp) =>{
    let temp
    for(let i=0; i<inp.length; i++){
        for(let j=i+1; j<inp.length ; j++){
            if(inp[i]>inp[j]){
                temp = inp[i]
                inp[i] = inp[j]
                inp[j] = temp
            }
        }
    }
    console.log(inp)
}

sortArray([10,7,3,6,4,2,8,5,9,1,11,12])
