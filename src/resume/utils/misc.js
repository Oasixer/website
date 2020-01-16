export function arrayIntersect(array_first, array_second){
  console.log('arrayIntersect');
  console.log(array_second);
  let new_arr = array_first.filter(function(x) {
    // checking second array contains the element "x"
    return (array_second.indexOf(x) != -1)
  });
  console.log(new_arr);
  return new_arr;
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
