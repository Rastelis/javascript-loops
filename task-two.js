document.write ("<div><<<<<<<<<<<<<<<<<<<< task 2 >>>>>>>>>>>>>>>>>>>></div>")

let count = 0;

for (let i = 0; i < 300; i++) {
    let buffer = rand(0,300);
    if ( buffer > 150) count ++;
    if (buffer >275) document.write ('<span style="color: red;">' + buffer + '</span>' + ' ') 
    else document.write ('<span>' + buffer + '</span>' + ' ')
}

document.write ('<div> There are ' + count + ' numbers larger than 150</div>' + ' ')


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

document.write ("<div>****************************************</div>")