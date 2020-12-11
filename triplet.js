//find triplet in array

console.clear()

let input = [1,3,4,6,8,9,10]

let findTriplet = (data) =>{
    let n1,n2,n3,resultArr=[]
    for(let i=0; i<data.length; i++){
        n1 = data[i]
        for(let j=i+1; j<data.length ; j++){
            n2 = data[j]
            for(let k= j+1; k<data.length; k++){
                n3 = data[k]
                if(n1+n2===n3) resultArr.push({n1:n1,n2:n2,n3:n3})
            }
        }
    }
    return resultArr
}

findTriplet(input)
