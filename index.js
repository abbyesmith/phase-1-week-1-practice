// This is just allowing us to use the dataset from the other file. You can ignore this line.
const UFO_SIGHTINGS = require("./nyc-ufo-sightings.json");

function calculateMinutes (seconds){
    return Math.floor(seconds / 60);
}
seconds = 800
//console.log(calculateMinutes(seconds))

const getRandomSighting = Math.floor(Math.random()*UFO_SIGHTINGS.length)

//I do not know why this function is not working when the above function works.
// function getRandomSighting(random){
//     let random = Math.floor(Math.random()*UFO_SIGHTINGS.length)
//     return random;

//console.log(UFO_SIGHTINGS[getRandomSighting])

//This brings in a set number of random sightings from the UFO_SIGHTINGS array; however, it will always be objects 0 - number.

function getRandomSightings(number1, number2){
    if(number1< number2){
        return UFO_SIGHTINGS.slice(number1, number2);
    } else {
        return UFO_SIGHTINGS.slice(number2, number1);
    }
}
let number1 = Math.floor(Math.random()*UFO_SIGHTINGS.length)
let number2 = Math.floor(Math.random()*UFO_SIGHTINGS.length)
//console.log(number1)
//console.log(number2)
//console.log(getRandomSightings(number1, number2))

function getLongestSighting(UFO_SIGHTINGS){
    let longestSighting = UFO_SIGHTINGS[0]
    for(let i = 0; i < UFO_SIGHTINGS.length; i++){
        if(UFO_SIGHTINGS[i].duration > longestSighting.duration){
            longestSighting = UFO_SIGHTINGS[i]
        }
    }
    return longestSighting
}
//console.log(getLongestSighting([getLongestSighting(UFO_SIGHTINGS)]))
//why doesn't this work?
// function getComment(UFO_SIGHTINGS){
//     let i = Math.floor(Math.random()*UFO_SIGHTINGS.length)
//     return UFO_SIGHTINGS[i].comment
// }

// console.log(getComment(UFO_SIGHTINGS))

function getComment(UFO_SIGHTINGS){
    return UFO_SIGHTINGS[a].comments
}
let a = Math.floor(Math.random()*UFO_SIGHTINGS.length)
// console.log(getComment(UFO_SIGHTINGS))

const getFirstWordInComment = UFO_SIGHTINGS[5].comments.split(" ")[0]
//console.log(getFirstWordInComment)

const shapeTypes = [];
    for(let i = 0; i < UFO_SIGHTINGS.length; i++){
        if(!shapeTypes.includes(UFO_SIGHTINGS[i].shape)){
            shapeTypes.push(UFO_SIGHTINGS[i].shape)
        }
}
//console.log(shapeTypes)

function calculateViewDuration(UFO_SIGHTINGS){
    if (UFO_SIGHTINGS.duration < 120){
        return "Short";
    } else if (UFO_SIGHTINGS.duration <= 240){
        return "Average";
    } else {
        return "Long";
    }
}
//console.log(calculateViewDuration(UFO_SIGHTINGS[0]))

function averageDuration(UFO_SIGHTINGS){
    let sum = 0;
    for(let i = 0; i < UFO_SIGHTINGS.length; i++){
        sum += UFO_SIGHTINGS[i].duration;
    }
    return sum/UFO_SIGHTINGS.length;
}
//console.log(averageDuration(UFO_SIGHTINGS))

function firstTenMinSighting(UFO_SIGHTINGS){
    for(let i = 0; i < UFO_SIGHTINGS.length; i++){
        if(UFO_SIGHTINGS[i].duration > 600){
            return UFO_SIGHTINGS[i]
        }
    }
}
//console.log(firstTenMinSighting(UFO_SIGHTINGS))

const lessThanOneMinuteSighting = [];
    for(let i = 0; i < UFO_SIGHTINGS.length; i++){
        if(UFO_SIGHTINGS[i].duration < 60){
            lessThanOneMinuteSighting.push(UFO_SIGHTINGS[i].comments)
        }
    }
console.log(lessThanOneMinuteSighting)
