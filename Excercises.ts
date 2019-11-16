console.log("----------------------Exercise 1-------------------------");
let message: string = 'Hello World';
let greetings = () =>  console.log(message);  
greetings();

console.log("----------------------Exercise 2-------------------------");
let leapYear = (year:number) =>  ((year % 4)==0 && year % 100 !=0) ? year +" Leap year" : year +"Not Leap Year" ;
console.log(leapYear(2017));

console.log("----------------------Exercise 3-------------------------");
let listNumOfDaysInYear = new Map<string,number>();
listNumOfDaysInYear.set("EARTH", 365);
listNumOfDaysInYear.set("MERCURY", 88);
listNumOfDaysInYear.set("VENUS",225 );
listNumOfDaysInYear.set("MARS",687  );
listNumOfDaysInYear.set("JUPITER",4333);
listNumOfDaysInYear.set("SATURN",10756);
listNumOfDaysInYear.set("URANUS",30687);
listNumOfDaysInYear.set("NEPTUNE",60190);

let GetAgeInYears = (_ageInSeconds:number,_planet:string):void => {
    let _ageInYears = _ageInSeconds / (3600*24*listNumOfDaysInYear.get(_planet));
    console.log(Math.round(_ageInYears));
}

GetAgeInYears(3150000000,"EARTH");
GetAgeInYears(3150000000,"MERCURY");
GetAgeInYears(3150000000,"VENUS");
GetAgeInYears(3150000000,"MARS");
GetAgeInYears(3150000000,"JUPITER");
GetAgeInYears(3150000000,"SATURN");
GetAgeInYears(3150000000,"URANUS");
GetAgeInYears(3150000000,"NEPTUNE");
    
console.log("----------------------Exercise 4-------------------------");
let input = "She sells sea shells on the sea shore";
let words = input.trim().split(" ");
let wordsMap  = new Map();
let createWordMap = (words: string[]) => {   
  words.forEach((word) => {(wordsMap.hasOwnProperty(word)) ? wordsMap[word]++ : wordsMap[word] = 1;});
  return wordsMap;
};
let wordsCount = createWordMap(words);
console.log(wordsCount);

console.log("----------------------Exercise 5-------------------------");
let reverse = (word: string) => word.split('').reverse().join();
console.log(reverse("Sanket"));

console.log("----------------------Exercise 6-------------------------");
let triangleType =(side1: number,side2:number, side3:number)=>{
    if(side1===side2 && side2===side3)
    {
        return "Equilateral Triangle";
    }
        else if(side1===side2 || side2===side3 || side3===side1)
        {
            return "Isosceles Triangle";
        }
            else{
                return "Scalene Triangle";
            }
}
console.log(triangleType(8,8,8));

console.log("----------------------Exercise 7-------------------------");
let IsArmstrong = (no:number) => {
    return new Promise(function(resolve,reject){
    let num = no.toString(10).split('').map(Number);
    let output;
    let sum: number = 0;
    for (let i = 0; i < num.length; i++) {
      sum +=  Math.pow(num[i], num.length);
    }
      (sum == no) ?  resolve("The number "+ no  +" is an Armstrong number") : resolve ("The number:" + no + " is not an Armstrong number");
      return output;
    })
    }
    let fnxn = (message:string)=>console.log(message);
    let error = (message:string)=>console.log(message);
    IsArmstrong(370).then(fnxn,error);	