document.write("<div><<<<<<<<<<<<<<<<<<<< task 8 >>>>>>>>>>>>>>>>>>>></div>")

const nailLength = 85;
const nailsAmount = 5;
let nailLengthIn = 0;
let nailsDone = 0;
let hitCounter = 0;

while (nailsDone < nailsAmount) {
    nailLengthIn += weakHit();
    hitCounter++;
    if( nailLengthIn>= nailLength) {
        nailsDone++;
    }
}

document.write("It took " + hitCounter + " weak hits to nail down " + nailsAmount + " nails.<br/>")

nailLengthIn = 0;
nailsDone = 0;
hitCounter = 0;

while (nailsDone < nailsAmount) {
    nailLengthIn += StrongHit();
    hitCounter++
    if( nailLengthIn>= nailLength) {
        nailsDone++;
    }
}

document.write("It took " + hitCounter + " strong hits to nail down " + nailsAmount + " nails.<br/>")


document.write("<div>****************************************</div>")

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function weakHit() {
    buffer = rand(5, 20);
    return buffer;
}

function StrongHit() {
    rand(0, 1) > 0 ? buffer = rand(20, 30) : buffer = 0;
    return buffer;
}