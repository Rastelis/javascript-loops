document.write("<div><<<<<<<<<<<<<<<<<<<< task 4 >>>>>>>>>>>>>>>>>>>></div>")

let squareBorderLength = 25;
result = "";

for (let i = 0; i < squareBorderLength; i++) {
    for (let j = 0; j < squareBorderLength; j++) {
        result += "*";
    }
    result += "<br/>"
}
document.write('<div style="line-height: .5; letter-spacing: .5px;">' + result + '</div>')
document.write("<div>****************************************</div>")