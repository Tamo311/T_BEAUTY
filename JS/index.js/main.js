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
        linkLG.setAttribute("href","#")
        divLG.appendChild(linkLG)
    let img=document.createElement("img")
        img.setAttribute("src","./images/index.html_images/main.logo.png")
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
        ul.setAttribute("class","ul")
         divNav.appendChild(ul)
    let li_1=document.createElement("li")
    ul.appendChild(li_1)
        let li_1_Link=document.createElement("a")
        li_1_Link.setAttribute("href","#")
        li_1_Link.innerText="HOME"
        li_1.appendChild(li_1_Link)
    let li_2=document.createElement("li") 
    ul.appendChild(li_2)
        let li_2_Link=document.createElement("a")
        li_2_Link.setAttribute("href","#services")
        li_2_Link.innerText="SERVICES"
        let i_services=document.createElement("i")
        i_services.setAttribute("class","fas fa-chevron-down")
        li_2_Link.appendChild(i_services)
        li_2.appendChild(li_2_Link)
        li_2_Link.appendChild(document.getElementById("service_dropdown"))
    let li_3=document.createElement("li")
    ul.appendChild(li_3)
           let li_3_Link=document.createElement("a")
           li_3_Link.setAttribute("href","#products")
           li_3_Link.innerText="PRODUCTS"
           let i_product=document.createElement("i")
           i_product.setAttribute("class","fas fa-chevron-down")
           li_3_Link.appendChild(i_product)
           li_3.appendChild(li_3_Link)
           li_3_Link.appendChild(document.getElementById("product_dropdown"))
    let li_4=document.createElement("li")
    ul.appendChild(li_4)
       let li_4_Link=document.createElement("a")
       li_4_Link.setAttribute("href","#team")
       li_4_Link.innerText="TEAM"
       li_4.appendChild(li_4_Link)
    let li_5=document.createElement("li")
    ul.appendChild(li_5)
         let li_5_Link=document.createElement("a")
          li_5_Link.setAttribute("href","#contact")
          li_5_Link.innerText="CONTACT"
          li_5.appendChild(li_5_Link)
      
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
            i3.classList.toggle("switch_userIcon")
            subscribe_section.classList.toggle("switch_user_section")
            if(user_section.classList.contains("switch_user_section")){
                user_section.classList.remove("switch_user_section")
            }
        })

       ///=================== show user information

       let user_section=document.getElementById("section_user")
        i1.addEventListener("click",function(){
            i1.classList.toggle("switch_userIcon")
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

///=========================create burger menu 

let divBGmenu=document.createElement("div")
divBGmenu.setAttribute("id","burger_menu")
divBGmenu.setAttribute("class","burger_menu")
document.body.appendChild(divBGmenu)

///=============================create burger menu header

let BG_header=document.createElement("div")
BG_header.setAttribute("class","social")
divBGmenu.appendChild(BG_header)
    let BG_header_a1=document.createElement("a")
        BG_header_a1.setAttribute("href","#")
        BG_header.appendChild(BG_header_a1)

        //================show subscribe section

        BG_header_a1.addEventListener("click",function(){
               subscribe_section.classList.toggle("switch_user_section")
               burgerIcon.classList.toggle("change")
               document.getElementById("burger_menu").classList.toggle("move_burger_menu")
               if(user_section.classList.contains("switch_user_section")){
                user_section.classList.remove("switch_user_section")
            }
            })
        //=============================================

        let BG_header_a1_i1=document.createElement("i")
        BG_header_a1_i1.setAttribute("class","fas fa-edit") 
        BG_header_a1.appendChild(BG_header_a1_i1)
    let BG_header_a2=document.createElement("a")
        BG_header_a2.setAttribute("href","#")
        BG_header.appendChild(BG_header_a2)

        //============show user section

        BG_header_a2.addEventListener("click", function(){
                user_section.classList.toggle("switch_user_section")
                burgerIcon.classList.toggle("change")
                document.getElementById("burger_menu").classList.toggle("move_burger_menu")
                if(subscribe_section.classList.contains("switch_user_section")){
                    subscribe_section.classList.remove("switch_user_section")
                }
            })
        ///==============================================

        let BG_header_a2_i2=document.createElement("i")
        BG_header_a2_i2.setAttribute("class","fas fa-user fa-lg") 
        BG_header_a2.appendChild(BG_header_a2_i2)
        let BG_header_a3=document.createElement("a")
        BG_header_a3.setAttribute("href","#")
        BG_header.appendChild(BG_header_a3)
        i2.addEventListener("click",switchFunction)

        ///=================burgermenu lightmode function

        BG_header_a3.addEventListener("click",switchFunction)
        
        //==================================================
        
        let BG_header_a3_i3=document.createElement("i")
        BG_header_a3_i3.setAttribute("class","fas fa-lightbulb fa-lg") 
        BG_header_a3.appendChild(BG_header_a3_i3)


////===========================create burger menu list

  let BG_menu_list=document.createElement("div")
  BG_menu_list.setAttribute("class","BG_list")
  divBGmenu.appendChild(BG_menu_list)
  let BG_a1=document.createElement("a")
      BG_a1.setAttribute("href","#")
      BG_a1.innerText="HOME"
      BG_menu_list.appendChild(BG_a1)
  let BG_a2=document.createElement("a")
      BG_a2.setAttribute("href","#services")
      BG_a2.innerText="SERVICES"
      let BG_i_services=document.createElement("i")
      BG_i_services.setAttribute("class","fas fa-chevron-down")
      BG_a2.appendChild(BG_i_services)
      BG_a2.appendChild(document.getElementById("BG_service_dropdown"))
      BG_menu_list.appendChild(BG_a2)
  let BG_a3=document.createElement("a")
      BG_a3.setAttribute("href","#products")
      BG_a3.innerText="PRODUCTS"
      let BG_i_product=document.createElement("i")
      BG_i_product.setAttribute("class","fas fa-chevron-down")
      BG_a3.appendChild(BG_i_product)
      BG_a3.appendChild(document.getElementById("BG_product_dropdown"))
      BG_menu_list.appendChild(BG_a3)
  let BG_a4=document.createElement("a")
      BG_a4.setAttribute("href","#team")
      BG_a4.innerText="TEAM"
      BG_menu_list.appendChild(BG_a4)
  let BG_a5=document.createElement("a")
      BG_a5.setAttribute("href","#contact")
      BG_a5.innerText="CONTACT"
      BG_menu_list.appendChild(BG_a5)

///==================burger_menu soc.icons

  let BG_soc=document.createElement("div")
  BG_soc.setAttribute("class","burger_soc")
  divBGmenu.appendChild(BG_soc)
    let BG_soc_i1=document.createElement("i")
    BG_soc_i1.setAttribute("class","fab fa-facebook fa-x")
    BG_soc.appendChild(BG_soc_i1)
    let BG_soc_i2=document.createElement("i")
    BG_soc_i2.setAttribute("class","fab fa-github fa-x")
    BG_soc.appendChild(BG_soc_i2)
    let BG_soc_i3=document.createElement("i")
    BG_soc_i3.setAttribute("class","fab fa-twitter fa-x")
    BG_soc.appendChild(BG_soc_i3)

////=============================== burger menu show function

    burgerIcon.addEventListener("click", function(){
        burgerIcon.classList.toggle("change")
        document.getElementById("burger_menu").classList.toggle("move_burger_menu")
      
    })
/////============================= burger menu dropdown
    
     BG_a2.addEventListener("click",function(){
        document.getElementById("BG_service_dropdown").classList.toggle("burger_dropdown")
        BG_i_services.classList.toggle("burger_arrow_rotate") 
        if(document.getElementById("BG_product_dropdown").classList.contains("burger_dropdown")
          || BG_i_product.classList.contains("burger_arrow_rotate")){
            document.getElementById("BG_product_dropdown").classList.remove("burger_dropdown")
            BG_i_product.classList.remove("burger_arrow_rotate")
        }
     })
    BG_a3.addEventListener("click",function(){
        document.getElementById("BG_product_dropdown").classList.toggle("burger_dropdown")
        BG_i_product.classList.toggle("burger_arrow_rotate")
    })

////========================== menu list functions

li_1_Link.addEventListener("click",function(){
     li_1_Link.classList.add("active_nav")
     li_2_Link.classList.remove("active_nav")
     li_3_Link.classList.remove("active_nav")
     li_4_Link.classList.remove("active_nav")
     li_4_Link.classList.remove("active_nav")
})
li_2_Link.addEventListener("click",function(){
    document.getElementById("FAQ").style.animation="move_FAQ_div 2s"
    li_1_Link.classList.remove("active_nav")
    li_2_Link.classList.add("active_nav")
    li_3_Link.classList.remove("active_nav")
    li_4_Link.classList.remove("active_nav")
    li_5_Link.classList.remove("active_nav")
})
li_3_Link.addEventListener("click",function(){
    li_1_Link.classList.remove("active_nav")
    li_2_Link.classList.remove("active_nav")
    li_3_Link.classList.add("active_nav")
    li_4_Link.classList.remove("active_nav")
    li_5_Link.classList.remove("active_nav") 
   })
 li_4_Link.addEventListener("click",function(){
    li_1_Link.classList.remove("active_nav")
    li_2_Link.classList.remove("active_nav")
    li_4_Link.classList.add("active_nav")
    li_3_Link.classList.remove("active_nav")
    li_5_Link.classList.remove("active_nav") 
   })
 li_5_Link.addEventListener("click",function(){
    li_1_Link.classList.remove("active_nav")
    li_2_Link.classList.remove("active_nav")
    li_5_Link.classList.add("active_nav")
    li_4_Link.classList.remove("active_nav")
    li_3_Link.classList.remove("active_nav") 
   })
       
        ////=========== lightmode function

i2.addEventListener("click",switchFunction)
function switchFunction(e){
    e.preventDefault()
    document.body.classList.toggle("nightmode") 
    header.classList.toggle("header_nightmode") 
    document.getElementById("BG_service_dropdown_ul").classList.toggle("switch_burger_dropdown") 
    document.getElementById("BG_product_dropdown_ul").classList.toggle("switch_burger_dropdown") 
    document.getElementById("service_dropdown_ul").classList.toggle("switch_dropdown")  
    document.getElementById("product_dropdown_ul").classList.toggle("switch_dropdown") 
    document.getElementsByClassName("slider__btn")[0].classList.toggle("switch_slider_btn") 
    document.getElementsByClassName("slider__btn")[1].classList.toggle("switch_slider_btn") 
    i1.classList.toggle("switch_color") 
    i2.classList.toggle("switch_color") 
    divBGmenu.classList.toggle("burger_menu_lightmode") 
    document.getElementById("link").classList.toggle("switch_submit_a")
    for(let i=0; i<document.querySelectorAll("a").length;i++){
        let a=document.querySelectorAll("a")
            a[i].classList.toggle("switch_color")
    }
    for(let k=0; k<document.getElementsByClassName("product_content").length; k++){
        let product_content=document.getElementsByClassName("product_content")
        product_content[k].classList.toggle("switch_product_content")
    }
    for(let l=0;l<document.getElementsByClassName("line").length;l++){
        let line=document.getElementsByClassName("line")
        line[l].classList.toggle("switch_line")
    }     
}

///============================ service section buttons function

let service_btn=document.querySelectorAll(".service_text_btn")
let service_span=document.querySelectorAll(".service_text_span")
    for( let i=0; i<service_btn.length; i++){
        service_btn[i].addEventListener("click", function(){
                if(service_span[i].style.display=="block" || service_btn[i].innerText=="read less"){
                        service_span[i].style.display="none"
                        service_btn[i].innerText="read more"  
                }
                else{
                        service_span[i].style.display="block"
                        service_btn[i].innerText="read less"
                }
                }
        ) }

///=================================== interior slider function  =======================================

let slide_INT=document.querySelectorAll(".intorior_slider_slide")
let slideText=document.querySelectorAll(".slide_text")
let Left_arrow=document.getElementById("left")
let Right_arrow=document.getElementById("right");
let counter_slider=0;

slide_INT.forEach((value, index)=>{
    value.style.transform=`translate(${(index)*100}%)` 
})


///=========================  interior slider  auto play function

function sliderFunction_autoPlay(){
    if(counter_slider==slide_INT.length-1){
        counter_slider=0
    }
    else{
        counter_slider++
    }
    slide_INT.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter_slider)*100}%)`  
    })
     slideText[counter_slider].classList.toggle("slider_text_animation")
    
    setTimeout(sliderFunction_autoPlay,5000)
}

sliderFunction_autoPlay()


/// ========================  interior slider  right button function

Right_arrow.addEventListener('click', function(){
    if(counter_slider==slide_INT.length-1){
        counter_slider=0
    }
    else{
        counter_slider++
    }
    slide_INT.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter_slider)*100}%)`  
    })
    slideText[counter_slider].classList.toggle("slider_text_animation")
})

///===========================  interior slider  left button function

Left_arrow.addEventListener('click', function(){
  if(counter_slider==0){
    counter_slider=slide_INT.length-1;
  }
  else{
    counter_slider--
  } 
    slide_INT.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter_slider)*100}%)` 
    })
    slideText[counter_slider].classList.toggle("slider_text_animation")
})

///============================ customer review slider function   ==========================

let slide=document.querySelectorAll('.slide');
let arrowLeft=document.querySelector('.slider__btn--left')
let arrowRight=document.querySelector('.slider__btn--right');
// let counter_slider=0;
slide.forEach((value, index)=>{
    value.style.transform=`translate(${(index)*100}%)` 
})

/// ======================== slider right button function

arrowRight.addEventListener('click', function(){
    if(counter_slider==slide.length-1){
        counter_slider=0
    }
    else{
        counter_slider++
    }
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter_slider)*100}%)`  
    })
})

///=========================== slider left button function

arrowLeft.addEventListener('click', function(){
  if(counter_slider==0){
    counter_slider=slide.length-1;
  }
  else{
    counter_slider--
  } 
    slide.forEach((value, index)=>{
        value.style.transform=`translate(${(index-counter_slider)*100}%)` 
    })
})



//=========================FAQ (accordion)

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


////////////============== window.scroll function

window.onscroll= function(){
        let aside=document.getElementById("aside")
        let btt=document.getElementById("backToTop")
        if(document.body.scrollTop>150 || document.documentElement.scrollTop >150){
            header.style.boxShadow="3px 8px 15px -11px black";
            header.style.backdropFilter="blur(7px)" ;
        }
        else{
            header.style.boxShadow="none"
            header.style.backdropFilter="blur(0)" ;
        }
        for(let i=0; i<document.querySelectorAll("a").length;i++){
            let a=document.querySelectorAll("a")
            if(document.body.scrollTop>250 || document.documentElement.scrollTop >250){
                header.classList.add("header_animation")
                img.classList.add("img_animation")
                a[i].classList.add("a_animation")
                burgerIcon.classList.add("burgerIcon_animation")
                 BG_header.style.paddingTop="7px"
            }
         else{
                header.classList.remove("header_animation")
                img.classList.remove("img_animation")
                a[i].classList.remove("a_animation")
                burgerIcon.classList.remove("burgerIcon_animation")
                BG_header.style.paddingTop="15px"
            }
        }
        if(document.body.scrollTop>200 || document.documentElement.scrollTop >200){
            document.getElementById("organic_img").classList.add("organic_img_animation")
        }
        else{
            document.getElementById("organic_img").classList.remove("organic_img_animation")
        }

        if(document.body.scrollTop>350 || document.documentElement.scrollTop >350){
        aside.style.transform="translateX(-400px)" 
        btt.style.display="block" 
        }
        else{
            aside.style.transform="translateX(0)" 
            btt.style.display="none" 
        }

        if(document.body.scrollTop>600 || document.documentElement.scrollTop >600){
            btt.classList.add("move_backToTop")
        }
        else{
            btt.classList.remove("move_backToTop")
        }
}


///=======================jQuery scroll function

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>500){
            $(`.service_content`).each(function() {
                let x = $(this).offset().top
                W = $(window).scrollTop()
                x < W + 800 && $(this).addClass(`fadeInup`)
             })
             $(`.product_content`).each(function() {
                let x = $(this).offset().top
                  W = $(window).scrollTop()
                  x < W + 800 && $(this).addClass(`fadeInup`)
            }) 
            $(`.member`).each(function() {
                let x = $(this).offset().top
                  W = $(window).scrollTop()
                  x < W + 800 && $(this).addClass(`fadeInup`)
                 
            }) 
            $(`.member_BG`).each(function() {
                let x = $(this).offset().top
                W = $(window).scrollTop()
                x < W + 870 && $(this).addClass(`fadeInleft`)
             })
             $(`.FAQ`).each(function() {
                let x = $(this).offset().top
                  W = $(window).scrollTop()
                  x < W + 1000 && $(this).addClass(`fadeInup`)
            }) 
        }
        else{
            $(`.service_content`).removeClass(`fadeInup`)
            $(`.product_content`).removeClass(`fadeInup`)
            $(`#FAQ`).removeClass(`fadeInup`)
            $(`.member`).removeClass(`fadeInup`)
            $(`.member_BG`).removeClass(`fadeInleft`)
        } 
    })

})

