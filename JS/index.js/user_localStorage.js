
// //================== send information to the local storige

let btn1=document.getElementById("subscribe")
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let email=document.getElementById("email")
let age1=document.getElementById("User_age")
let comment=document.getElementById("text_area")
let arr1=[];
let counter1=1
let d = new Date();
let userDate =d.getDate()+"."+d.getMonth() +1 +"."+d.getFullYear();
btn1.addEventListener("click",function(e){
    e.preventDefault()
   let objUser={ 
        id:counter1++,
        first_name:fname.value, 
        last_name:lname.value,
        email_address:email.value,
        age_user:age1.value,
        comment:comment.value, 
        date:userDate  
    }
    arr1.push(objUser)
    localStorage.setItem('user_info', JSON.stringify(arr1))
    location.reload()                                   
}) 

///================ get information from local storige to the user info section 

let userInfo=JSON.parse(localStorage.getItem(`user_info`)) 
for(let i=0; i<userInfo.length; i++){
    let span1=document.getElementById("entered_fname")
    let span2=document.getElementById("entered_lname")
    let span3=document.getElementById("entered_email")
    let span4=document.getElementById("entered_Comment")
    let span5=document.getElementById("entered_age")
    span1.innerText=userInfo[i].first_name
    span2.innerText=userInfo[i].last_name
    span3.innerText=userInfo[i].email_address
    span4.innerText=userInfo[i].comment
    span5.innerText=userInfo[i].age_user +" years "
    document.getElementById("user_info_h2").innerText="YOUR INFORMATION"

    //======================== get information and add user`s information slide to the slider

    let slider=document.querySelector(".review_slider")
    let user_slide=document.createElement("div")
        user_slide.setAttribute("class","slide")
        slider.appendChild(user_slide)
    let rev_img=document.createElement("div")
        rev_img.setAttribute("class","review_img")
        user_slide.appendChild(rev_img)
    let img=document.createElement("img")
        img.setAttribute("src","./images/index.html_images/slider_img.png")
        rev_img.appendChild(img)
    let slider_content=document.createElement("div")
        slider_content.setAttribute("class","slider_content")
        user_slide.appendChild(slider_content)
    let h5=document.createElement("h5")
        h5.setAttribute("class","slide_header")
        slider_content.appendChild(h5)
        h5.innerText="Our customers opinions and advicies"
    let p=document.createElement("p") 
        p.setAttribute("class","slider__text")
        slider_content.appendChild(p)
        slider_content.appendChild(p)
        p.innerText=userInfo[i].comment
    let address=document.createElement("address")
        address.setAttribute("class","author")
        slider_content.appendChild(address)
    let h6=document.createElement("h6")
        h6.setAttribute("class","author_name")
        h6.innerText=userInfo[i].first_name+" " +  userInfo[i].last_name +"," + " "+ userInfo[i].age_user + " years "
        address.appendChild(h6)
    let address_p=document.createElement("p")
        address_p.setAttribute("class","date")
        address.appendChild(address_p)
        address_p.innerText=userInfo[i].date      

//========= slider function

let slide=document.querySelectorAll('.slide');
let arrowLeft=document.querySelector('.slider__btn--left')
let arrowRight=document.querySelector('.slider__btn--right');
let counter_slider=0;
slide.forEach((value, index)=>{
    value.style.transform=`translate(${(index)*100}%)` 
})

/// ======================== right button function

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

///=========================== left button function

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

///========================= auto play function

function sliderFunction(){
        if(counter_slider==slide.length-1){
            counter_slider=0
        }
        else{
            counter_slider++
        }
        slide.forEach((value, index)=>{
            value.style.transform=`translate(${(index-counter_slider)*100}%)`  
        })

        setTimeout(sliderFunction,6000)
    }

    sliderFunction()

    //=============delete user information

    function remove_info(){
        let remove=document.getElementById("remove")
        remove.addEventListener("click", ()=>{
        localStorage.clear()
        span1.innerText=""
        span2.innerText=""
        span3.innerText=""
        span4.innerText=""
        span5.innerText=""
        document.getElementById("user_info_h2").innerText="NO INFORMATION"
        user_slide.remove()
    })
    }  
     remove_info()
}