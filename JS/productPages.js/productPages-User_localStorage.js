// //================== send information to the local storige

let btn1=document.getElementById("subscribe")
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let email=document.getElementById("email")
let age1=document.getElementById("User_age")
let comment=document.getElementById("text_area")
let arr1=[];
let counter1=1
btn1.addEventListener("click",function(e){
    e.preventDefault()
    let objUser={
        id:counter1++,
        first_name:fname.value, 
        last_name:lname.value,
        email_address:email.value,
        age_user:age1.value,
        comment:comment.value,   
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