 let me=(calc)=>{
    userInput.value= userInput.value+calc 
}
function clr(){
    userInput.value= userInput.value.slice(0,-1) 
}
function mm() {
    if ( userInput.value ==''  ) {
        disr.innerText ='pls put in your pin'
    }else if (userInput.value.length==4){
      location= "atm.html"
    }
   
}
// function enter(){
//     userInput.atm.html= userInput.atm.html
// }