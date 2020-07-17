function brickCalculator(floor){

if(floor==0){
 console.log("Lol You are Mad! You need 0 brick");
}
else if(floor==1 && floor<=10){
    var numberOfBrickForFirstlevelfloor=10*15*1000;//First 10 floor -> FirstLevelFloor,Next10Floor->Secondlevelfloor,RestOfthefloor->Thirdlevelfloor
    return numberOfBrickForFirstlevelfloor;
}
else if(floor>10 && floor<=20){
    var numberOfBrickForFirstlevelfloor=10*15*1000;
    var numberOfBrickForsecondlevelfloor=(floor-10)*12*1000;
    return numberOfBrickForFirstlevelfloor+numberOfBrickForsecondlevelfloor;
}
else{
    var numberOfBrickForFirstlevelfloor=10*15*1000;
    var numberOfBrickForsecondlevelfloor=10*12*1000;
    var numberOfBrickForthirdlevelFloor=(floor-20)*10*1000;
    return numberOfBrickForFirstlevelfloor+numberOfBrickForsecondlevelfloor+numberOfBrickForthirdlevelFloor;
}

}
var totalBrick = brickCalculator(567);
console.log("TotalBrick :",+totalBrick);