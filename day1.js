const fs = require('fs');

const filePath = 'day1.txt';
let calibrationValSum = 0

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }


    const lines = data.split('\n');

    const pattern = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
    const characPattern = /[a-z]/g;


    lines.forEach((line, index) => {
        line = expandText(line)
        const match = line.match(pattern);

        if (match) {
            let firstNumber = match[0];
            let lastNumber = match[match.length-1];
            console.log(match)
            if (firstNumber.match(characPattern)) firstNumber = convertToInt(firstNumber)
            if (lastNumber.match(characPattern)) lastNumber = convertToInt(lastNumber)
            const combinedValues = firstNumber.toString() + lastNumber.toString();
            console.log(`Line ${index + 1} : ${firstNumber} and ${lastNumber} combined is ${combinedValues} for ${line}`);
            calibrationValSum = calibrationValSum + parseInt(combinedValues);
        } else {
            console.log(`Line ${index + 1} : No match found for ${line}`);
        }
    });

    console.log(`Sum of All Calibration Values is ${calibrationValSum}`)
});

function convertToInt(numberInLetters) {
    switch (numberInLetters) {
        case "one" : return 1
        break;
        case "two" : return 2
        break;
        case "three" : return 3
        break;
        case "four" : return 4
        break;
        case "five" : return 5
        break;
        case "six" : return 6
        break;
        case "seven" : return 7
        break;
        case "eight" : return 8
        break;
        case "nine" : return 9
        break;
    }
}

function expandText (text) {
    let expandedText = text;
    expandedText = expandedText.replaceAll("one", "o1ne");
    expandedText = expandedText.replaceAll("two", "t2wo");
    expandedText = expandedText.replaceAll("three", "t3hree");
    expandedText = expandedText.replaceAll("four", "f4our");
    expandedText = expandedText.replaceAll("five", "f5ive");
    expandedText = expandedText.replaceAll("six", "s6ix");
    expandedText = expandedText.replaceAll("seven", "s7even");
    expandedText = expandedText.replaceAll("eight", "e8ight");
    expandedText = expandedText.replaceAll("nine", "n9ine");

    return expandedText;
}