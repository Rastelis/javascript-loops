document.write("<div><<<<<<<<<<<<<<<<<<<< task 6 >>>>>>>>>>>>>>>>>>>></div>")

let coin = "SH";
let loopCounter = 0;
let headCounter = 0;
let limit = 100;

document.write("<div><<<<<<<<<<<<<<<<<<<< stop loop when Head >>>>>>>>>>>>>>>>>>>></div>")

while (true) {
    if (loopCounter === limit) {
        document.write("LIMIT REACHED!!!")
        break;
    }
    let buffer = coin[rand(0, 1)];
    document.write(buffer)
    if (buffer === "H") break;
    document.write(", ");
}

document.write("<div><<<<<<<<<<<<<<<<<<<< stop loop when 3x Head >>>>>>>>>>>>>>>>>>>></div>")

while (true) {
    if (loopCounter === limit) {
        document.write("LIMIT REACHED!!!")
        break;
    }
    let buffer = coin[rand(0, 1)];
    document.write(buffer)
    if (buffer === "H") headCounter++;
    if (headCounter === 3) break;
    document.write(", ");
}

document.write("<div><<<<<<<<<<<<<<<<<<<< stop loop when 3x Head in a row >>>>>>>>>>>>>>>>>>>></div>")

while (true) {
    if (loopCounter === limit) {
        document.write("LIMIT REACHED!!!")
        break;
    }
    let buffer = coin[rand(0, 1)];
    document.write(buffer)
    if (buffer === "H") headCounter++;
    if (buffer === "S") headCounter = 0;
    if (headCounter === 3) break;
    document.write(", ");
}


document.write("<div>****************************************</div>")

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}