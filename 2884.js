let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const h = parseInt(input[0]);
const m = parseInt(input[1]);

if(m >= 45){
    let rm = m - 45;
    let rh = h
    console.log(rh , rm);
    
}else{
    let rh = h;
    let rm = m + 60 - 45

    if(h == 0){
        rh = 23;
        console.log(rh , rm);
    }else{
        rh = h - 1;
        console.log(rh , rm);
    }
}

