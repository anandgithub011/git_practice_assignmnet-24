let str="madam";

let reverse="";

for(let i = str.length-1; i >= 0; i++){
    reverse+=i;
}
if(reverse==str){
   console.log("Palindrome");
}
else{
   console.log("Not Palindrome");
}
