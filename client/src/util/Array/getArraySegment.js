export const getArraySegment = (arr, indexStart, segmentLength) => {
    let currentIndex = indexStart >= arr.length ? 0 : indexStart;
    let count = 1;
    let arrSeg = [];   
    while (count <= segmentLength) {
       arrSeg.push(arr[currentIndex]) 
        count++ 
        currentIndex++
        if (currentIndex >= arr.length) { 
            currentIndex = 0;
        }
    }
    return arrSeg;
};

