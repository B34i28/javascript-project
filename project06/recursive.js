function getRecursive(nr) {
    console.log("Started function iteration" , nr);
    if (nr > 0){
    getRecursive(--nr);
    } else {
        console.log("Recurtion completed");
    }
    console.log("Function Ended" ,nr);
}

getRecursive(5)
