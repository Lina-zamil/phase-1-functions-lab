// Code your solution in this file!

let Scuber = 42;
let blockToFeet = 264;
function distanceFromHqInBlocks(number) {
    if ((number - Scuber) > 0) return number - Scuber;
    else return Scuber - number;
};

function distanceFromHqInFeet(number) {
    let feets = distanceFromHqInBlocks(number);
    if (feets > 0) return distanceFromHqInBlocks(number) * blockToFeet;
    else return -1 * (distanceFromHqInBlocks(number) * blockToFeet);
};

function distanceTravelledInFeet(start, destination) {
    let feetsDistance = (destination - start) * blockToFeet;
    if (feetsDistance > 0) return feetsDistance;
    else return (-1 * (feetsDistance));
};
function calculatesFarePrice(start, destination) {
    let feets = distanceTravelledInFeet(start, destination);
    if (feets <= 400) return 0;
    else if (400 < feets && feets <= 2000) return ((feets - 400) * 0.02);
    else if (2000 < feets && feets <= 2500) return 25;
    else if (feets > 2500) return 'cannot travel that far';
};
