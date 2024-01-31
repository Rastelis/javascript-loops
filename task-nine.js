document.write("<div><<<<<<<<<<<<<<<<<<<< task 9 >>>>>>>>>>>>>>>>>>>></div>")

numbersInString = 50;
min = 1;
max = 200;


document.write("<div><<<<<<<<<<<<<<<<<<<< String of random numbers >>>>>>>>>>>>>>>>>>>></div>")

let newString = generateString(numbersInString, min, max);
document.writeln(newString);

document.write("<div><<<<<<<<<<<<<<<<<<<< String of primes only >>>>>>>>>>>>>>>>>>>></div>")

let primesOnlyString = primesOnly(newString);
document.writeln(primesOnlyString);

document.write("<div><<<<<<<<<<<<<<<<<<<< Sorted string of primes only >>>>>>>>>>>>>>>>>>>></div>")

let sortedPrimesOnlyString = sortString(primesOnlyString);
document.writeln(sortedPrimesOnlyString);



document.write("<div>****************************************</div>")


function primesOnly(string) {
    let stringBuffer = "";
    let numberBuffer = "";
    for (let i = 0; i < string.length; i++) { //loop for getting number from string
        if (newString[i] != " ") { //checking if number ended if not add char to number buffer
            numberBuffer += string[i]
        }
        else { // if number ended check if number is prime
            let prime = true;
            for (let j = 2; j < parseInt(numberBuffer); j++) {//loop for checking if  number is prime by dividing the number by all possible divisors
                let temp = parseInt(numberBuffer)
                if (temp % j == 0) { // if it is possibel do divide without remainder number is not prime
                    prime = false;
                }
                if (prime == false) break; // if number is not prime stop checking
            }
            if (prime == true) { // if number is prime save it to the prime number string
                stringBuffer += numberBuffer + " ";
                numberBuffer = ""; // empty buffer
            }
            else numberBuffer = ""; // empty buffer
        }
    }
    return stringBuffer; // return prime numbers only string
}

function sortString(string) {
    let unsortedNumberBuffer = "";
    let sortedString = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            unsortedNumberBuffer += string[i];
        }
        else {
            if (sortedString == "") {  // if it is the first nuber read from string then add it to sorted string
                sortedString = unsortedNumberBuffer + " ";
                unsortedNumberBuffer = "";
            }
            else { // otherwise sort it 
                let sortedNumberBuffer = ""; // buffer for saving number from sorted number string 
                for (let j = 0; j < sortedString.length; j++) { // loop for sorting numbers in sorted string 
                    if (sortedString[j] != " ") { // read the number from sorted string, stop reading if there is empty space
                        sortedNumberBuffer += sortedString[j]; // if there is no empty space then add the char to the sorted number buffer for checking with unsorted number
                    }
                    else { // if there is space in the string check last sorted number with unsorted number,
                        if (parseInt(unsortedNumberBuffer) < parseInt(sortedNumberBuffer) && j - sortedNumberBuffer.length === 0) { // if unsorted number is smaller than sorted number and the sorted number is the first number in the string add the unsorted number at the begining of the string(that is current index of sorted string minus the lenght of last number read from sorted string  )
                            let temp = sortedString
                            sortedString = unsortedNumberBuffer + " " + temp;
                            unsortedNumberBuffer = ""; // empty buffer
                            break;

                        }
                        else if (parseInt(unsortedNumberBuffer) < parseInt(sortedNumberBuffer)) { // if unsorted number is smaller than the sorted number but the sorted number is not the first number in the string. add the unsorted number before the sorted number
                            let temp = sortedString.slice(j - sortedNumberBuffer.length -1) // slice sorted string at the previous empty space (that is current sorted string index minus the lenght of last number read from sorted string -1 to position to the empty space)
                            sortedString = sortedString.slice(0, j - sortedNumberBuffer.length -1) + " " + unsortedNumberBuffer + temp; // save the unsorted number in between of smaler and bigger numbers
                            unsortedNumberBuffer = "";// empty buffer
                            break;
                        }
                        else { //if the unsorted number is larger than sorted number 
                            if (j == sortedString.length - 1) { // if the sorted number is the last number in the string add the unsorted number after it
                                sortedString += unsortedNumberBuffer + " ";
                                unsortedNumberBuffer = ""; // empty buffer
                                break;
                            }
                            sortedNumberBuffer = ""; // empty buffer
                        }
                    }
                }
            }
        }
    }
    return sortedString; //return sorted string
}

function generateString(n, min, max) {
    let bufferString = "";
    numberCounter = 0;
    while (numberCounter < n) {
        let buffer = rand(min, max);
        if (bufferString.indexOf(buffer) < 0) {
            bufferString += buffer + " ";
            numberCounter++;
        }
    }
    return bufferString;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}