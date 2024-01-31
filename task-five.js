document.write("<div><<<<<<<<<<<<<<<<<<<< task 5 >>>>>>>>>>>>>>>>>>>></div>")

result = "";

for (let i = 0; i < squareBorderLength; i++) {
    for (let j = 0; j < squareBorderLength; j++) {
        if (i === j || j === squareBorderLength - 1 - i) result += '<span style="color: red;">*</span>'
        else result += "*";
    }
    result += "<br/>"
}
document.write('<div style="line-height: .5; letter-spacing: .5px;">' + result + '</div>')
document.write("<div>****************************************</div>")