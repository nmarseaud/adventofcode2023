const fs = require('fs');

const filePath = 'day2.txt';
let gameIDsSum = 0
let totalSumOfPowerOfMinCubesRequired = 0

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const lines = data.split('\n');
    
    lines.forEach((line, index) => {
        if (line !== "") {
            console.log("---------------------------")
            console.log(line)
            const gameID = parseInt(line.split(':')[0].replace("Game ", ""));
            const redColorMaxCount = getMaxColorCountFromLine(line, "red")
            const greenColorMaxCount = getMaxColorCountFromLine(line, "green")
            const blueColorMaxCount = getMaxColorCountFromLine(line, "blue")
            
            console.log(`Game ${gameID} : Red ${redColorMaxCount} Green ${greenColorMaxCount} Blue ${blueColorMaxCount}`)
            
            // Part 1
            if (redColorMaxCount <= 12 && greenColorMaxCount <= 13 && blueColorMaxCount <= 14) {
                gameIDsSum = gameIDsSum + gameID
                console.log(`Game ${gameID} is possible, new count is ${gameIDsSum}`)
            }

            // Part 2
            const sumOfPowerOfMinCubesRequired = redColorMaxCount * greenColorMaxCount * blueColorMaxCount
            totalSumOfPowerOfMinCubesRequired = totalSumOfPowerOfMinCubesRequired + sumOfPowerOfMinCubesRequired
            console.log(`Game ${gameID} sum of power of the minimum set required for it to succeed is ${redColorMaxCount} * ${greenColorMaxCount} * ${blueColorMaxCount} = ${sumOfPowerOfMinCubesRequired}`)
            console.log(`New Sum of Power is ${totalSumOfPowerOfMinCubesRequired}`)

            console.log("---------------------------")
        }
    });

    console.log(`Sum of All Possible Game IDs is ${gameIDsSum}`)
    console.log(`Total of the Sum of Power of the Minimum Set Required for each of this game to succeed is ${totalSumOfPowerOfMinCubesRequired}`)
});

function getMaxColorCountFromLine(line, color) {
    const pattern = new RegExp(`(\\d+)(?= ${color})`, 'gi');
    let colorCountArray = line.match(pattern).map(function (x) {  return parseInt(x, 10); });
    console.log(color, colorCountArray, Math.max(...colorCountArray))
    
    return Math.max(...colorCountArray)
}