(function(){
  var a = ["arn", "racecar",120,121,"tat"];

let arr = [];
a.forEach(res =>{
  
  if(typeof(res)== "number"){
    res = res.toString();
  }
  
  let str = res.split("");
  let revStr = str.reverse();
  let fStr = revStr.join("");
  if(res == fStr){
    arr.push(fStr);
  }
});
console.log(arr);
document.getElementById("content").innerHTML = arr;
})();