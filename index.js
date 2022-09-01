// Code your solution here
//findMatching- This function takes an array of drivers' names and a string as arguments, 
//and returns the matching list of drivers. The function should be case insensitive.

/**Console log res before you return it to see if that contains Bobby.
For the second condition you can convert both sides to lowerCase when comparing between
then, this way if the bobby is being passed. Notice the first letter is small it will still pass.
For the third one res will always be true as an array so that case won't pass you can check
if the length is 1 or more that will be more accurate. */
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

function findMatching(drivers,string) {
    const res =drivers.filter(function(item) {
        return (item.toLowerCase() === string.toLowerCase());
    });
    return res
}
findMatching(drivers,'bobby');



function fuzzyMatch(drivers, letter) {
    var filteredNames = drivers.filter(function (word) {
        return (word.charAt(0) === letter.charAt(0));
    });
    return filteredNames;
}
fuzzyMatch(drivers, "Sarah")
//console.log(fuzzyMatch(drivers, 0, 'S'));



const drivers1 = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];



function matchName(drivers,driversNames) {
    const names=drivers1.filter(element => {
        return element.name === driversNames;
    })
    return names 
}
matchName(drivers,"Bobby")
//console.log(matchName)

// function filterByID(item) {
//     if (Number.isFinite(item.id) && item.id !== 0) {
//       return true;
//     }
//     invalidEntries++;
//     return false;
//   }
  
//   const arrByID = arr.filter(filterByID);



//   function superbowlWin(record) {
//     const res = record.find((record) =>
//         record.result === 'W'
//     );
//     return res ? res.year : undefined;

// }
// superbowlWin(record);