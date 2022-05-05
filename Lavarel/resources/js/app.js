// require('./bootstrap');

let x = [1, 2, 3, 4]

Array.prototype.map2 = function(func) {
    let result = []
    console.log(this)
}

console.log(x.map2((pt, i)=>{pt*2}));
