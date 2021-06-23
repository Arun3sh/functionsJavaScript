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
