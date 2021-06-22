let median = function(){
  let a = [21, 43, 65, 87, 9];
  let b = [45, 12, 34, 15, 75];

  let n1 = a.length;
  let n2 = b.length;

  if(n1 == n2){
    let c = [...a, ...b];
    let sum = 0;
    c.forEach(ele =>{
      sum += ele;
    });
    console.log(sum/n1);
  }

}