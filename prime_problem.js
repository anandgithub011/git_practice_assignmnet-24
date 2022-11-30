let num=19;

let count=0;
for(let i = 2; i < num; i++){

  if(num % 2 == 0){
   count++;
  }
}
if(count>0){
   console.log("Not Prime");
}
else{
   console.log("Prime");
}