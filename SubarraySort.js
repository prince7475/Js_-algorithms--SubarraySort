function subarraySort (array){
    let minOutOfOrder = Infinity
    let maxOutOfOrder = -Infinity
    for(let i = 0; i < array.length; i++){
        let num = array[i]
        if(isOutOfOrder(i,num,array)){
            minOutOfOrder = Math.min(minOutOfOrder, num)
            maxOutOfOrder = Math.max(maxOutOfOrder,num)
        }
    }
    if(minOutOfOrder === Infinity) return [-1,-1]
    
    let minNumberPlace = 0
    let maxNumberPlace = array.length - 1
    while (minOutOfOrder >= array[minNumberPlace]){
        minNumberPlace++;
    }
    while (maxOutOfOrder <= array[maxNumberPlace]){
        maxNumberPlace--;
    }
    return [minNumberPlace,maxNumberPlace]
}

const isOutOfOrder =(index, num,array) =>{
    if(index === 0) return num > array[index + 1]
    if(index === array.length - 1) return num < array[index - 1]
    return num < array[index - 1] || num > array[index + 1]
}

console.log(subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]))
exports.subarraySort = subarraySort