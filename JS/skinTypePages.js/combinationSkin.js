//=================== CREATE HEADER 
let header=document.createElement("header")
    document.body.appendChild(header)
    header.setAttribute("id","header")
let divCont=document.createElement("div")
    divCont.setAttribute("class","container")
    header.appendChild(divCont)
let divHD=document.createElement("div")
    divHD.setAttribute("class","header")
    divCont.appendChild(divHD)

///=====================create main logo

let divLG=document.createElement("div")
    divLG.setAttribute("class","logo") 
    divHD.appendChild(divLG) 
    let linkLG=document.createElement("a")
        linkLG.setAttribute("href","../index.html")
        divLG.appendChild(linkLG)
    let img=document.createElement("img")
        img.setAttribute("src","../images/index.html_images/main.logo.png")
        linkLG.appendChild(img)
    let span=document.createElement("span")
        span.setAttribute("class","span1")
        span.innerText="&BEAUTY"
        linkLG.appendChild(span)

         //============================== create nav_menu 

 let divNav=document.createElement("div") 
 divNav.setAttribute("class","nav")
 divHD.appendChild(divNav)
 let ul=document.createElement("ul")
      divNav.appendChild(ul)
 let li_1=document.createElement("li")
 ul.appendChild(li_1)
     let li_1_Link=document.createElement("a")
     li_1_Link.setAttribute("href","#")
     li_1_Link.innerText="COMBINATION SKIN CARE & TREATMENT"
     li_1_Link.setAttribute("href","./combinationSkin.html")
     li_1.appendChild(li_1_Link)
      
//=============================create social  icons

let divSoc=document.createElement("div")
     divSoc.setAttribute("class","social nav_social")
     divHD.appendChild(divSoc)
    let link3=document.createElement("a")
     link3.setAttribute("href","#")
     divSoc.appendChild(link3)
     let i3=document.createElement("i")
     i3.setAttribute("class","fas fa-edit") 
     link3.appendChild(i3)
    let link1=document.createElement("a")
        link1.setAttribute("href","#")
        divSoc.appendChild(link1)
        let i1=document.createElement("i")
        i1.setAttribute("class","fas fa-user fa-lg") 
        link1.appendChild(i1)
    let link2=document.createElement("a")
        link2.setAttribute("href","#")
        divSoc.appendChild(link2)
        let i2=document.createElement("i")
        i2.setAttribute("class","fas fa-lightbulb fa-lg")
        link2.appendChild(i2)

           ///======================== show subscribe section

           let subscribe_section=document.getElementById("subscribe_div")
           i3.addEventListener("click",function(){
               subscribe_section.classList.toggle("switch_user_section")
               if(user_section.classList.contains("switch_user_section")){
                user_section.classList.remove("switch_user_section")
            }
           })

       ///=================== show user information

       let user_section=document.getElementById("section_user")
       let user_info=document.getElementById("user_info")
        i1.addEventListener("click",function(){
            user_section.classList.toggle("switch_user_section")
            if(subscribe_section.classList.contains("switch_user_section")){
                subscribe_section.classList.remove("switch_user_section")
            }
        })
///================ hide subscribe section  // hide user innformation

        window.onclick=function(event){
            if(event.target==user_section || event.target==subscribe_section){
                if(user_section.classList.contains("switch_user_section") || i1.classList.contains("switch_userIcon")){
                    user_section.classList.remove("switch_user_section")
                    i1.classList.remove("switch_userIcon")
                }
                if(subscribe_section.classList.contains("switch_user_section") || i3.classList.contains("switch_userIcon")){
                    subscribe_section.classList.remove("switch_user_section")
                    i3.classList.remove("switch_userIcon")
                }
            }
          }
          let close_btn=document.querySelectorAll(".close_btn")
          close_btn.forEach((item)=>{
              item.addEventListener("click",()=>{
                 if(user_section.classList.contains("switch_user_section") || subscribe_section.classList.contains("switch_user_section")){
                     subscribe_section.classList.remove("switch_user_section")
                     user_section.classList.remove("switch_user_section") 
                 } 
              })
          }) 
          
////=========================create burger menu icon 

let burgerIcon=document.createElement("div")
    burgerIcon.setAttribute("id","burgerIcon")
    burgerIcon.setAttribute("class","burgerIcon")
    document.body.appendChild(burgerIcon)
    let line1=document.createElement("div")
    line1.setAttribute("class","line line1")
    burgerIcon.appendChild(line1)
    let line2=document.createElement("div")
    line2.setAttribute("class","line line2")
    burgerIcon.appendChild(line2)
    let line3=document.createElement("div")
    line3.setAttribute("class","line line3")
    burgerIcon.appendChild(line3)


    ////=============================== burger menu show function

    burgerIcon.addEventListener("click", function(){
        burgerIcon.classList.toggle("change")
        divNav.classList.toggle("switch_nav")
        divSoc.classList.toggle("switch_soc")
      
    })

          
                  ////=========== lightmode function

i2.addEventListener("click",switchFunction)
function switchFunction(e){
    e.preventDefault()
    document.body.classList.toggle("nightmode")  
    for(let l=0;l<document.getElementsByClassName("line").length;l++){
        let line=document.getElementsByClassName("line")
        line[l].classList.toggle("switch_line")
    }
        
}


// // //================== get information from local storige

let userInfo_skin_type=JSON.parse(localStorage.getItem(`users`)) 
for(let i=0; i<userInfo_skin_type.length; i++){
    let user_age=document.getElementById("user_age")
    let user_skin_type=document.getElementById("user_skin_type")
    user_age.innerText=userInfo_skin_type[i].entered_age + " years "
    user_skin_type.innerText=userInfo_skin_type[i].entered_skin_type + " skin type "
}