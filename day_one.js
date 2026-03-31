//primitive
const demonumber=100;
console.log("demono is=",demonumber)
const demostring="hello diya";
console.log("demostring is=",demostring)
const demoboolean=true;
console.log("demoboolean is=",demoboolean)
// console.log("hello")

//non-primitive and typeof
const dataobject={}
console.log( typeof dataobject);
const dataarray=[]
console.log(dataarray);
const demodate= new Date();
console.log("demodate is=",demodate);
const  demofunction=function() {};
console.log("demofunction is=",demofunction);

// variable with let,const,var

const democonst=500;
console.log("demonumber=",democonst);
var demovar=300;
console.group("demovariable is=",demovar);
let demolet=200;
console.log("demo let is=",demolet);

function timeinterval()
{
setTimeout( ()=>{
    console.log("settimeout");
},2000);
}
timeinterval()

//typeof
console.log(a);
var a = 9;
//console.log(a);