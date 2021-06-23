res = () => {
  var m = document.getElementById("from").value;
  var n = document.getElementById("to").value;
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
    //console.log(newArr);
  }else{
    var newArr = a;
  }
  //console.log(newArr);
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
  //console.log(newArr);
  document.getElementById("res").style.display = "block";
  return newArr;
}
