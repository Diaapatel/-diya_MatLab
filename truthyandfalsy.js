if(0){
    console.log("false is falsy");

}
if(1){
    console.log("true is truthy");
}
if(""){
    console.log("empty string is truthy");
}
if(" "){
    console.log("space string is truthy");
}
if(null){
    console.log("null is falsy");
}
if(undefined){
    console.log("undefined is falsy");
}
if(-1){
    console.log("negative number is truthy");
}

const values =[0,1,""," ",null,undefined, -1, {}, [], 0n, 42n, NaN, false, true];
for(const v of values)
{
    console.log(String(v), "=>",Boolean(v));
}