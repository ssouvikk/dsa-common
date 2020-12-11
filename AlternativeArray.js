//Alternative array of a sorted array
console.clear()
let input = [1,2,3,4,5]
let altArr = (data) =>{
    let result = []
    let len = input.length
    let addFromLast = true
    let j = 0

    for(let i=0; i<len ;i++ ){
        if(addFromLast){
            result.push(input[len-(j+1)])
        }else{
            result.push(input[j++])
        }
        addFromLast = !addFromLast
    }
    return result
}

console.log(altArr(input))
