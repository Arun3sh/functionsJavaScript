1. ADD Numbers In an Array

var arr = [1,2,5,8];
let convert = function(arr){
  
  let c=0;
  arr.forEach(b => {
    c += +b;
  });
 
  console.log(c);
  return;
}
convert(arr);

2. Median of Array

let a = [21, 43, 65, 87, 9];
let b = [45, 12, 34, 15, 75];
let median = function(a,b){
  
  let n1 = a.length;
  let n2 = b.length;
  let n = n1+n2;
  if(n1 == n2){
    let c = [...a, ...b];
    let sum = 0;
    c.forEach(ele =>{
      sum += ele;
    });
    console.log(sum/n);
  }
}
median(a,b);

3. Palindrome In Array

var res = function(a){ 

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
}
let a = ["arn", "racecar",120,121,"tat"];
res(a);

4. Prime Numbers In Array

var res = function(m,n){
  
  let total = (n-m+1);
  var a = [];
  var b = +m;
  if(+m > +n){
    console.log("Enter correct Value");
    return;
  }
  console.log(`Prime Numbers Between ${m} and ${n}`)
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
        break;
      }else if(+newArr[j]%p == 0 && +newArr[j]!=p ){
        break;
      }else{
        p++;
      }
    }
        
  }

}
res(1,10);

5. Print Odd Numbers

var res = function(m,n){
  
  var a = [];
  var b = +m;
  if(+m > +n){
    console.log("Enter correct Value");
    return;
  }
  console.log(`Odd numbers from ${m} to ${n}`);
  for(let i = 0; i<(n-m); i++){
    a[i] = b;
    b += 1;
  }
  for(let j = 0; j<(n-m); j++){
    if(+a[j]%2 != 0){
      console.log(a[j]);
    }
  }
  return;
}
res(1,12);

6. Remove Duplicate from array

var arr = [21, 45, 21, 4, 9, 87, 9];
var dup = function(arr){
  
  console.log("Array With Duplicate Values : "+arr);
  let res = [...new Set(arr)];
  console.log("Array Without Duplicate Values : "+res);
}

dup(arr);

7. Title Caps

var convertCaps = function(a){

  let b = a.split(" ");
  var res=[];
  b.forEach(c => {
    res.push(c[0].toUpperCase()+c.slice(1,c.length))
  });
  console.log(b, res);
}
let a = "hi guvi this is title caps problem";
convertCaps(a);

8. Rotate Array K times

let arr = [1,2,3,4,5];
let n = arr.length;
var res = function(k){
  console.log(`Original Array ${arr}`);
  for(let i =1; i<=k; i++){
  
    let re = arr.pop();
    arr.unshift(re);
  }
  console.log(`Array after rotating ${k} times ${arr}`);
};

res(3);
