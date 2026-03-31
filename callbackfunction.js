//sychronous callback
function greet(name,callback)
{
    const mess='hello, ${name}!';
    callback(mess);
}
greet("diya" , (msg) => console.log("sync callback:",msg));

//asynchronous callback
function fetchdaata(id,callback)
{
    setTimeout(() => {
        const data={id,value:"sample"};
        callback(data);
    },500);
}
fetchdaata(1,(result) => console.log("async",result));

//array method using callback

const num=[1,2,3];
const doubled= num.map(n =>n*2);
console.log("mapcallback",doubled);
