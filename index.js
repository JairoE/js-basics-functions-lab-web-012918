// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(num-42)
}

function distanceFromHqInFeet(num){
  return distanceFromHqInBlocks(num)*264;
}

function distanceTravelledInFeet(b1, b2){
  return Math.abs((b1-b2)*264);
}
