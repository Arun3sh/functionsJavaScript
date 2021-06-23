(function(){
  let b = ["i", 'am', "iron", "man"];
  var res=[];
  b.forEach(c => {
    res.push(c[0].toUpperCase()+c.slice(1,c.length))
  });
  console.log(b, res);
  document.getElementById("result").innerHTML = res.join(" ");
})();
