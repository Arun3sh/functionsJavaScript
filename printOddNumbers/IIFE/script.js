(function() {
  var m = 1;
  var n = 20;
  
  var a = [];
  var b = +m;
  if(+m > +n){
    console.log("Enter correct Value");
    return;
  }
  for(let i = 0; i<(n-m); i++){
    a[i] = b;
    b += 1;
  }
  for(let j = 0; j<(n-m); j++){
    if(+a[j]%2 != 0){
      console.log(a[j]);
      document.getElementById("answer").innerHTML += a[j] + " \n";
    }
  }
  return;
})();