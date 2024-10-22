let counter = 0;
let btn = document.getElementById('btn')
let lastClickTime = null;

document.addEventListener("click",()=>{
console.log("addEventListener");

if(lastClickTime!=null){
const now = Date.now()
if(now -lastClickTime <3000){
     console.log(counter++);
     
}
lastClickTime = now
}
else{
    lastClickTime = Date.now()
}
if (counter >= 5){
    alert("نکن")
    let overlay = document.getElementById('overlay').style.display = "block"

}
})

