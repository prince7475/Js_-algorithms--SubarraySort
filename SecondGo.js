function subarraySort (array){
    let maxUnsorted = -Infinity
    let minUnsorted = Infinity
    for (let i = 0; i < array.length; i ++){
        let num = array[i]
        if(isOutOfOrder(i,num,array)){
            maxUnsorted = Math.max(maxUnsorted,num)
            minUnsorted = Math.min(minUnsorted,num)
        }
    }
    if (maxUnsorted === -Infinity) return [-1,-1]
    let maxIndex = array.length - 1;
    let minIndex = 0;
    while(array[minIndex] <= minUnsorted){
        minIndex++;
    }
    while (array[maxIndex] >= maxUnsorted){
        maxIndex--;
    }
  return [minIndex,maxIndex]

}

function isOutOfOrder(idx, num, array){
    if (idx === 0) return num > array[idx + 1]
    if (idx === array.length - 1) return num < array[idx - 1]
    return num < array[idx - 1] || num > array[idx + 1]
}
exports.subarraySort = subarraySort 