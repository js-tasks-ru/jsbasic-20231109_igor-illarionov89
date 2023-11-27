function getMinMax(str) {
  
  let arr = str.split(' ').map((item) => parseFloat(item)).filter((item)=>!isNaN(item));
  
  let result = {
    
  };
  
  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  
  return result;
}
