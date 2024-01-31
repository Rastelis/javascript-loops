document.write ("<div><<<<<<<<<<<<<<<<<<<< task 3 >>>>>>>>>>>>>>>>>>>></div>")
let result = ""
let amountIndex = 0;

for (let i = 1; i <= 3000; i++) {
    if (i % 77 === 0) {
        if (amountIndex !== 0) result += ", ";
        result += i;
        amountIndex ++;
    }
}

document.write (result);
document.write ("<div>****************************************</div>")