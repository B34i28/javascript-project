const product = ["shirt","Trouser","jacket"];
const gifts = ["Pen","Keychain","Tie"];

for (let i=0;i<product.length;i++){
    // console.log(product[i])
    for (let j=0; j<gifts.length; j++){
        console.log(product[i] + " - " + gifts[j])
    }
}