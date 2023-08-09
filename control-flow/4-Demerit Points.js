//Speed Limit = 70
// 5 -> 1 Point
// Math.floor(1.3)
// 12 Points -> suspended

checkSpeed(77);

function checkSpeed(speed){
  const speedLimit = 70;
  const KmPerPoint = 5;

  if (speed < speedLimit + KmPerPoint ){
    console.log("ok");
    return;
  }
  const points = Math.floor((speed - speedLimit) / KmPerPoint); 
  if (points >= 12)
    console.log("License Suspended")
  else{
    console.log("Points", points);
  }
}