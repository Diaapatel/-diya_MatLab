//function
function demofunction(){
    console.log("demo func");

}
demofunction();

const demoarray = () => {
    console.log("demo arrow");
}
const demothisfunc =function() {
    console.log("demo");
    const demochildfunc = function(){
        console.log("demo child func");
    }
    demochildfunc();
}
demothisfunc();

const car = {
    model:"bmw",
    year:2024,
    getcar:function(){
        console.log('car:$(this.model)');
    }
};
car.getcar();

// there are two ways of creating function in javascript 
 
function greet()
{

}

// 2.

const arrowFunction=()=>{

}
