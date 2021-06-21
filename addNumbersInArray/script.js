/*let convert = function(){
  let a = document.getElementById("inputArea").value
  let b = a.split(" ");
  var res=[];
  b.forEach(c => {
    res.push(c[0].toUpperCase()+c.slice(1,c.length))
  });
  console.log(b, res);
  document.getElementById("result").innerHTML = res.join(" ");
}
var a = ["poda","antha","andavanae","namma","pakkam","irukan"];*/

var a = [1,2,5,8];
let convert = function(){
  let a = document.getElementById("inputArea").value.split(" ");
  
  let c=0;
  a.forEach(b => {
    c += +b;
  });
  document.getElementById("result").innerHTML = c;
  console.log(c);
  return;
}
