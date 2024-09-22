function createObjects(name,mass,height)
{
    var x=new Object();
    x.name=name;
    x.mass=mass;
    x.height=height;
    x.findBMI=function()
    {
        var BMI=this.mass/(this.height**2);
        return BMI;
    }
    x.BMI=x.findBMI();
    return x;
}

var kasun=createObjects('Kasun',56,5.4);
var sandun=createObjects('Sandun',60,5.8);
var nimal=createObjects('Nimal',40,6.0);

var students = [kasun,sandun,nimal];

var max=0;
for(i=0;i<students.length;i++)
{
   if(max<students[i].BMI){
      max=students[i].BMI;
   }    
}

for(i=0;i<students.length;i++)
{
   if(max==students[i].BMI){
      console.log(students[i].name+" has the largest BMI "+students[i].BMI+"\n");
   }    
}
    