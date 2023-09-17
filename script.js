let side =document.querySelector("#side")
let sideOne=document.querySelector("#side-one")
let sideTwo=document.querySelector("#side-two")
let sideThree=document.querySelector("#side-three")
let pp=document.querySelector(".pp")
let ppt=document.querySelector(".ppt")
let pptt=document.querySelector(".pptt")






let projectOne=document.querySelector("#project-one")

projectOne.addEventListener("mouseover",()=>{
    side.style.left="0%"
    side.style.zIndex="999"
    sideOne.style.zIndex=2
    sideTwo.style.zIndex=0
    sideThree.style.zIndex=0
    pp.style.background="rgba(0, 0, 0, 0.397)"
})
projectOne.addEventListener("mouseleave",()=>{
    side.style.left="-100%"
    side.style.transition="all ease 1000ms"
    pp.style.background="transparent"
    
})








let projectTwo=document.querySelector("#project-two")

projectTwo.addEventListener("mouseover",()=>{
    side.style.left="0%"
    side.style.zIndex="999"
    sideOne.style.zIndex=0
    sideTwo.style.zIndex=2
    sideThree.style.zIndex=0
    ppt.style.background="rgba(0, 0, 0, 0.397)"
})
projectTwo.addEventListener("mouseleave",()=>{
    side.style.left="-100%"
    side.style.transition="all ease 1000ms"
    ppt.style.background="transparent"
})









let projectThree=document.querySelector("#project-three")

projectThree.addEventListener("mouseover",()=>{
    side.style.left="0%"
    side.style.zIndex="999"
    sideOne.style.zIndex=0
    sideTwo.style.zIndex=0
    sideThree.style.zIndex=2
    pptt.style.background="rgba(0, 0, 0, 0.397)"
})
projectThree.addEventListener("mouseleave",()=>{
    side.style.left="-100%"
    side.style.transition="all ease 1000ms"
    pptt.style.background="transparent"
})





















// throttling: Kisi function k execution k number ko kaam krna


var main=document.querySelector("#main")

const btn=document.querySelector("#throttle");
    const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now + prev> delay){
          prev = now;
          return func(...args); 
        }
      }
    }


    document.querySelector("#hero_content")
    .addEventListener("mousemove", 
    throttleFunction((dets)=>{
      


       var div=document.createElement("div")
        div.classList.add("imagediv")
        div.style.top=dets.clientY+"px"
        div.style.left=dets.clientX+"px"
        

        

        var img=document.createElement("img")
        img.setAttribute("src","https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60")

        div.appendChild(img)


        document.body.appendChild(div)


      gsap.from(img,{
        
        borderRadius:"100%",
        ease: Power2,
        duration:.2,
       
        
      })
     
        setTimeout(function () {
            div.remove()
        },1000)


    },500));






