var BtnsignIn= document.querySelector("#signIn")
var BtnsignUp= document.querySelector("#signUp")
var body= document.querySelector('body')

BtnsignIn.addEventListener("click", function () {
    body.className= "sign-in";
})

BtnsignUp.addEventListener("click", function(){
    body.className="sign-up";

})