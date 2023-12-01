const fs = require('fs');

const filePath = 'day1.txt';
let calibrationValSum = 0

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }


    const lines = data.split('\n');

    const pattern = /(\d)/g;


    lines.forEach((line, index) => {
        const match = line.match(pattern);

        if (match) {
            const firstNumber = match[0];
            const lastNumber = match[match.length-1];
            console.log(match)
            const combinedValues = firstNumber.toString() + lastNumber.toString();
            console.log(`Line ${index + 1} : ${firstNumber} and ${lastNumber} combined is ${combinedValues} for ${line}`);
            calibrationValSum = calibrationValSum + parseInt(combinedValues, 10);
        } else {
            console.log(`Line ${index + 1} : No match found for ${line}`);
        }
    });

    console.log(`Sum of All Calibration Values is ${calibrationValSum}`)
});