(function() {
  var m = 1;
  var n = 25;
  let total = (n-m+1);
  var a = [];
  var b = +m;
  if(+m > +n){
    console.log("Enter correct Value");
    return;
  }
  for(let i = 0; i<total; i++){
    a[i] = b;
    b += 1;
  }
  if(+a[0]==1){
    var newArr = a.slice(1,a.length);

  }else{
    var newArr = a;
  }

  for(let j = 0; j<=total; j++){
    let p = 2;
    
    while(p<= +newArr[j]){
      
      if(+newArr[j]%p == 0 && +newArr[j]==p){
        console.log(newArr[j]);
        document.getElementById("answer").innerHTML += newArr[j] + " \n";
        break;
      }else if(+newArr[j]%p == 0 && +newArr[j]!=p ){
        break;
      }else{
        p++;
      }
    }
    
        
  }

  document.getElementById("res").style.display = "block";
  return newArr;
})();
