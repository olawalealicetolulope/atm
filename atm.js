var bal= 2000
var disp="welcome,click on any to start"
function turnOn(){
    userBalance.innerText="Your balance is"+ bal
    userDetails.innerText=disp
}
function depositMoney(){
    userDetails.innerText="kindly enter amount to deposit"
    // if (userInput.value=="") {
    //     userDetails.innerText="kindly enter amount to deposit"
    // }
    // else {
    //     bal=Number(userInput.value)+bal
    //     userBalance.innerText="your balance is" + bal
    //     alert("Deposit successful")
    //     userDetails.innerText= disp
    //     userInput.value=""

    // }
}
function withdrawMoney(){
    // if ( userInput.value ==''  ) {
    //     p.innerText ='pls put in amount you want to withdraw'
        userDetails.innerText="kindly enter amount to withdraw";
}  
function makeTransaction(){
    if (userBalance.innerText=""){
        alert("Pls select the right input")
    }
    else if(userDetails.innerText=="kindly enter amount to withdraw"){
        bal=bal-Number(userInput.value);
       userBalance.innerText="your balance is" + bal;
    //    place.innerText ="withdraw successful"
     alert("withdraw successful");
       userDetails.innerHTML= disp;
       userInput.value="";
    }
    else if (userDetails.innerText=="kindly enter amount to deposit"){
        bal=Number(userInput.value)+bal;
        userBalance.innerText="your balance is" + bal;
        alert("Deposit successful");
        userDetails.innerHTML= disp;
        userInput.value="";
    }
    else if (userBalance.innerText=="Your balance is"+ bal) {
        userBalance.innerText="Your balance is"+ bal;
        userDetails.innerText=disp;
    } 
    else {
        alert("Pls seleect a valid option");
    }
}
