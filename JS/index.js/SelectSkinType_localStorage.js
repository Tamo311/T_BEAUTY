
// //================== send information to the local storige

let btn=document.getElementById("submit")
let age=document.getElementById("age")
let skin_type=document.getElementById("select_skin_type")
let arr=[];
let counter=1
btn.addEventListener("click",function(){
    let objUser={
        id:counter++,
        entered_age:age.value,
        entered_skin_type:skin_type.value
    }
    arr.push(objUser)
    localStorage.setItem('users', JSON.stringify(arr)) 
    let link=document.getElementById("link")
    
if(skin_type.value=="dry"){
    link.setAttribute("href","./SkinType_pages/drySkin.html")
}   
if(skin_type.value=="normal"){
    link.setAttribute("href","./SkinType_pages/normalSkin.html")
}  
if(skin_type.value=="oily"){
    link.setAttribute("href","./SkinType_pages/oilySkin.html")
} 
if(skin_type.value=="combination"){
    link.setAttribute("href","./SkinType_pages/combinationSkin.html")
}                                
})
 