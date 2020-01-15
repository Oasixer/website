  export function arrayIntersect(array_first, array_second){
    return array_first.filter(function(x) {
      // checking second array contains the element "x"
      return (array_second.indexOf(x) != -1)
    });
  }
