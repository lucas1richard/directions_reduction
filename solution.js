function dirReduc(arr){
  var map = arr.map(function(elem) {
    switch(elem) {
      case('NORTH'): return 1;
      case('SOUTH'): return -1;
      case('EAST'): return 2;
      case('WEST'): return -2;
    }
  });

  function recurse(arr) {
    console.log(arr);
    for(i=0; i<arr.length-1; i++) {
      if(arr[i+1] === -arr[i]) {
        arr.splice(i,2);
        return recurse(arr);
        break;
      }
    }
    return arr;
  }

  map = recurse(map);

  return map.map(function(elem) {
    switch(elem) {
      case(1): return 'NORTH';
      case(-1): return 'SOUTH';
      case(2): return 'EAST';
      case(-2): return 'WEST';
    }
  });
}