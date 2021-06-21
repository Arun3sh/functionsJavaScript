//var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
//var m = document.getElementById("from").value;

var res = function(){
  var m = document.getElementById("from").value;
  var n = document.getElementById("to").value;
  
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
}