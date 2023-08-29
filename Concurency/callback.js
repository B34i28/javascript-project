// executeStuff is or could be callback
function doFlexibleStuff(executeStuff) {
    executeStuff();
}

const function1 = () => console.log("Hello from function 1");
const function2 = () => console.log("Hello from function 2");


doFlexibleStuff(function1)
doFlexibleStuff(function2)
