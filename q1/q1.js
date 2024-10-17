const innerDiv=document.querySelector(".innerDiv");
const middleDiv=document.querySelector(".middleDiv");
const outerDiv=document.querySelector(".outerDiv");

// bubble
outerDiv.addEventListener('click', () => {
    console.log("Bubbling outerDiv")
  })
  
  middleDiv.addEventListener('click', () => {
    console.log("Bubbling middleDiv")
  })
  
  innerDiv.addEventListener('click', (event) => {
    // event.stopPropagation()
    console.log("INNER DIV was clicked")
  })



// capturing




const capturing =()=>{
    console.log("Capturing outerDiv")
}
const inner =()=>{
    // console.log("inneer DIV CAPTURING")
}
const middle =(event)=>{
    // event.stopPropagation()
    console.log("middle DIV CAPTURING")
}

outerDiv.addEventListener('click',capturing,true)
middleDiv.addEventListener('click',middle,true)
innerDiv.addEventListener('click',inner,true)
