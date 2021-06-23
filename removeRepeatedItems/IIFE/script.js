(function(){
  let a = [21, 45, 21, 4, 9, 87, 9];
  console.log("Array With Duplicate Values : "+a);
  let res = [...new Set(a)];
  console.log("Array Without Duplicate Values : "+res);
})();