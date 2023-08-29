const promise = new Promise(function (resolve , reject){
    resolve ("Javascript")
});

promise.then (function (result) {
    console.log("Sucess: " ,result);
}, function(error) {
    console.log("Error: " ,error);
})


//  .catch is always use for error method