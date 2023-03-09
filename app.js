    Assignment-01

               CHAPTER-06-09        

Question-01
var a=10;
document.write("<h1>Result</h1>");
document.write("The value of a is:"+a+"<br/>");
document.write("-------------------------------<br/>");
++a;
document.write("The value of ++a is:"+a+"<br/>");
document.write(" Now the value of a is:"+a+"<br/><br/>");
document.write("The value of a++ is:"+a+++"</br>");
document.write("Now the value of a is:"+a+"<br><br>");
document.write("The value of --a is:"+--a+"<br/>");
document.write("Now the value of a is:"+a+"<br><br>");
document.write("The value of a-- is:"+a--+"<br>");
document.write("Now the value of a is:"+a);

Question-02
var a=2,b=1;
var result= --a - --b + ++b + b--;//1+1+1=3
document.write(a+"<br>");//1
document.write(b+"<br>");//0
document.write(result);//3

Question-03
var inputfromUser=prompt("Enter Your name");
alert("Asslamulikum Sir , "+inputfromUser);

Question-04
var inputFromUserInput=+prompt("Enter a number",5);
var i;
for(i=1;i<=10;i++){
    document.write(inputFromUserInput+" X "+i+" = "+inputFromUserInput*i+"<br>");
}

Question-05
var sub_1=prompt("Enter First subject name");
var sub_2=prompt("Enter Second subject name");
var sub_3=prompt("Enter Third subject name");
var totalMarks_sb=100;
var totalMarksAllsb=3*totalMarks_sb;
var obtainMarks_sb1=+prompt("Enter First subject Obtain Marks");
var obtainMarks_sb2=+prompt("Enter Second subject Obtain Marks");
var obtainMarks_sb3=+prompt("Enter Third subject Obtain Marks");
var sumAllObtained=obtainMarks_sb1+obtainMarks_sb2+obtainMarks_sb3;
var percentage_sb1=obtainMarks_sb1/totalMarks_sb*100;
var percentage_sb2=obtainMarks_sb2/totalMarks_sb*100;
var percentage_sb3=obtainMarks_sb3/totalMarks_sb*100;
var getAllPercentage=sumAllObtained/totalMarksAllsb*100;
percentage_sb1=percentage_sb1+"%";
percentage_sb2=percentage_sb2+"%";
percentage_sb3=percentage_sb3+"%";
document.write("Subject  Total Marks Obtained Marks Percentage <br/>");
document.write(sub_1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb1+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+percentage_sb1+"<br/>");
document.write(sub_2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+percentage_sb2+"<br/>");
document.write(sub_3+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+totalMarks_sb+"  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+obtainMarks_sb3+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"+percentage_sb3+"<br/>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     "+totalMarksAllsb+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   "+sumAllObtained+" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+getAllPercentage+"%");

           CHAPTER-09-11 :USER INPUT & CONDITIONAL STATEMENT

Question-01
var cityName=prompt("Enter city name:");
if(cityName=="Karachi"){
    alert("Welcom to city of lights");
}

Question-02
var gender=prompt("Enter your gender");
if(gender=="male"){
    alert("Good Morning Sir.");
}
else if(gender=="female"){
    alert("Good Morning Ma'am.");
}

Question-03
var inputColor=prompt("Enter Any Color (Red,Yellow,Green)");
if(inputColor=="Red"){
    alert("Must Stop");
}
else if(inputColor=="Yellow"){
    alert("Ready to move");
}
else if(inputColor=="Green"){
    alert("Move now");
}

Question-04
var fuel=+prompt("Fill Fuel Into Your Car ");
if(fuel<0.25){
    alert("Please refill the fuel in your car");
}

Question-05
a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is false (this message do not show)");
}
c
var c = 12;
if (c++ === 13){
alert("condition 1 is false (this message do not show)");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is false (this message do not show)");
}
if(c === 14){
alert("condition 4 is true");
}
d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost are equals");
}
e
if (true){
    alert("True");
    }
    if (false){
    alert("False (this message do not display)");
    }
f
if("car" < "cat"){
    alert("car is smaller than cat");
    }

Question-06
var grade;
var obtainMarks=+prompt("Enter Your Obtained Marks");
var totalMarks=+prompt("Enter Total Marks");
var percentage=Math.floor(obtainMarks/totalMarks*100);
if(percentage>=80){
    grade="A-one";
    remarks="Excellent";
}
else if(percentage>=70){
    grade="A";
    remarks="Good"; 
}
else if(percentage>=60){
    grade="B";
    remarks="You need to improve";
}
else if(percentage<60){
    grade="Fail";
    remarks="Sorry";
}
document.write("<h1>Marks Sheet</h1><br/><br/>")
document.write("Total Marks : "+totalMarks+"<br/>");
document.write("Marks obtained : "+obtainMarks+"<br/>");
document.write("Percentage : "+percentage+"% <br/>");
document.write("Grade : "+grade+"<br/>");
document.write("Remarks : "+remarks);

Question-07
var guessNum=Math.floor((Math.random()*10));
var userGuess=+prompt("Enter a number");
if(guessNum==userGuess){
    alert("Bingo! Corret answer");
}
else if(guessNum+1==userGuess){
    alert("Close enough to the correct answer");
}

Question-08
var userInput=+prompt("Enter a number");
if(userInput%3==0){
    alert("The given number is divisible by 3");
}

Question-09
var inputNumber=+prompt("Enter a number");
if(inputNumber%2==0){
    alert("The given number is Even number");
}
else{
    alert("The given number is Odd number");
}

Question-10
var inputTemp=+prompt("Enter temprature");
if(inputTemp>40){
    alert("It is too hot outside.")
}
else if(inputTemp>30){
    alert("The Weather today is Normal.");
}
else if(inputTemp>20){
    alert("Today’s Weather is cool.");
}
else if(inputTemp>10){
    alert("OMG! Today’s weather is so Cool.");
}

Question-11
var result;
var firstInput=+prompt("Enter first number");
var secondInput=+prompt("Enter second number");
var operator=prompt("Enter any operator (+,-,*,/,%):");
if(operator=="+"){
    result=firstInput+secondInput;
}
else if(operator=="-"){
    result=firstInput-secondInput;
}
else if(operator=="*"){
    result=firstInput*secondInput;
}
else if(operator=="/"){
    result=firstInput/secondInput;
}
else if(operator=="%"){
    result=firstInput%secondInput;
}
alert(result);
 
             CHAPTER-12-13
Question-01

var inputNumOrStr=prompt("Enter a number or string");
if(inputNumOrStr>="A"&&inputNumOrStr<="Z"){
  alert("the given number is Uppercase");
}
else if(inputNumOrStr>="a"&&inputNumOrStr<="z"){
  alert("the give number is lowercase");
} 
else if((inputNumOrStr>="0"&&inputNumOrStr<="9")){
  alert("the given input is number");
}

Question-02
var var1=+prompt("Enter first number");
var var2=+prompt("Enter second number");
if(var1>var2){
    alert("var1 is greater than var2");
}
else if(var2>var1){
    alert("var2 is greater than var1");
}
else if(var2==var1){
    alert("var1 and var2 are equal");
}

Question-03
var inputNum=+prompt("Enter a number");
if(inputNum<0){
    alert("Your number is Negative.");
}
else if(inputNum>0){
    alert(" Your number is Positive.");
}
else{
    alert("Your number is zero.");
}

Question-04
var inputChar=prompt("Enter only one character");
if(inputChar=="b"||inputChar=="c"||inputChar=="d"||inputChar=="f"||inputChar=="g"||inputChar=="h"||inputChar=="j"||inputChar=="k"||inputChar=="l"||inputChar=="m"||inputChar=="n"||inputChar=="p"||inputChar=="q"||inputChar=="r"||inputChar=="s"||inputChar=="t"||inputChar=="v"||inputChar=="w"||inputChar=="x"||inputChar=="y"||inputChar=="z"){
    alert("true");
}
else if(inputChar=="a"||inputChar=="e"||inputChar=="i"||inputChar=="o"||inputChar=="u"){
    alert("false");
}
else{
    alert("outside input invalid");
}

Question-05
var varPassword="ashraq";
var userInsertPassword=prompt("Enter Your Password");
if(userInsertPassword==varPassword){
    alert("Correct! The password youentered matches the original password")
}
else {
    alert("Icorret Password!!!");
}

Question-06
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{     
greeting = "Good evening";
}
alert(greeting);

Question-07
var inputTime=prompt("Enter Your Time");
if(inputTime>="0000" && inputTime<"12:00"){
    alert("Good Morning");
}
else if(inputTime>="12:00" && inputTime<"17:00"){
    alert("Good afternoon");
}
else if(inputTime>="17:00" && inputTime<"21:00"){
    alert("Good evening");
}
else if(inputTime>="21:00" && inputTime<="23:59"){
alert("Good night");
}