var a = [1,2,5,8];
convert = () => {
  let a = document.getElementById("inputArea").value.split(" ");
  
  let c=0;
  a.forEach(b => {
    c += +b;
  });
  document.getElementById("result").innerHTML = c;
  console.log(c);
  return;
}