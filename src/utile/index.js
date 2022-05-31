let utileIndex = {}
utileIndex.dbArrToObj = (arr)=>{
  for(i in arr){
    arr[i] = arr[i][0];
  }
  return arr;
}