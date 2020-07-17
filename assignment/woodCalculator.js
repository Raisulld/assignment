function woodCalculator(Chair,Table,Bed){
    var woodForChair=Chair*1;
    var woodForTable=Table*3;
    var woodForBed=Bed*5;
    var TotalWood=woodForTable + woodForBed + woodForChair;
    return TotalWood;
 }
 var TotalWood=woodCalculator(157,89,45);
 console.log("Totalwood :",+TotalWood);