let Counter= document. getElementById("counter")
let EntriesCount= document. getElementById("Entries-count")
let Error= document. getElementById("error")
let Num1= document. getElementById("num1")
let Num2=document. getElementById("num2")
let Sum=document. getElementById("sum")
let ScoresA=document. getElementById("scoresA")
let ScoresB=document. getElementById("scoresB")

let number1=8
let number2=2
Num1.textContent= number1
Num2.textContent= number2
let summary=0
let scoreA=0
let scoreB=0


let count= 0
function increment(){
    count+=1
    Counter.textContent= count
}
function save(){
    let countDash= " - ";
    let countString= count+countDash
    EntriesCount.innerText+= " "+countString
    count= 0
    Counter.textContent=count
}
function makePurchase(){
    Error.textContent="Something went wrong, Please try again"
}
function plus(){
    summary=number1+number2
    Sum.textContent="Sum: "+summary
}
function substract(){
    summary=number1-number2
    Sum.textContent="Sum: "+summary 
}
function multiply(){
    summary=number1*number2
    Sum.textContent="Sum: "+summary
}
function divide(){
    summary=number1/number2
    Sum.textContent="Sum: "+summary
}
function Add1PointA(){
    scoreA+=1
    ScoresA. textContent=scoreA
}
function Add2PointsA(){
    scoreA+=2
    ScoresA.textContent=scoreA
}
function Add3PointsA(){
    scoreA+=3
    ScoresA.textContent=scoreA
}
function Add1PointB(){
    scoreB+=1
    ScoresB.textContent=scoreB
}
function Add2PointsB(){
    scoreB+=2
    ScoresB.textContent=scoreB
}
function Add3PointsB(){
    scoreB+=3
    ScoresB.textContent=scoreB
}
function Reset(){
    scoreA=0
    ScoresA.textContent=scoreA
    scoreB=0
    ScoresB.textContent=scoreB
}


let welcomeBack = document. getElementById("welcome-back")
let myName= "Elsie"
let greeting= "Welcome Back! "
welcomeBack. textContent= greeting+myName+"😶‍🌫️";

