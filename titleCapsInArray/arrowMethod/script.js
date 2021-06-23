convert = () => {
  let a = document.getElementById("inputArea").value
  let b = a.split(" ");
  var res=[];
  b.forEach(c => {
    res.push(c[0].toUpperCase()+c.slice(1,c.length))
  });
  console.log(b, res);
  document.getElementById("result").innerHTML = res.join(" ");
}
