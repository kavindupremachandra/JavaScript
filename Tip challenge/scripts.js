var bills=[1230,982,1640,1460,944];

function getTips(bills){
    // Returns the value to where we called the function
    // Exit the function
    var Tip=new Array();
    for(i=0;i<bills.length;i++)
    {
       Tip[i]=findTip(bills[i]);
    }
    return Tip;
}
var Tips=getTips(bills);
console.log(Tips);

function findTip(billval)
{
    if(billval<1000){
        tip=billval*0.2;
    }
    else if(billval>=1000 && billval<1500){
        tip=billval*0.15;
    }
    else{
        tip=billval*0.1;
    }
    return tip;
}

function getFinalAmounts(bills,tips)
{
    var finalamount=new Array();
    for(i=0;i<bills.length;i++)
    {
       finalamount[i]=bills[i]+tips[i];
    }
    return finalamount;

}
var finalamounts=new Array();
finalamounts=getFinalAmounts(bills,Tips);
console.log(finalamounts);


