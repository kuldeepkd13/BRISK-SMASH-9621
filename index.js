function goToHome(){

    window.location.href="index.html";
}

let imgArr=["https://s.rmjo.in/Paytm-Bank-Desktop-banner-%20(1).jpg","https://s.rmjo.in/Fitness-offer-banner-for-Web--2.jpg","https://s.rmjo.in/WP-Web.png","https://s.rmjo.in/AC-Offer-Banner-Web-.jpg","https://s.rmjo.in/AC-banner-Web-.jpg" ]

let slidingImg=document.getElementById("sliding_Img");

function slidingFun(x){

    // slidingImg.addEventListener("click",()=>{


        slidingImg.src=imgArr[x];
        console.log(slidingImg.src)
    // })
}
let x=0;

setInterval (()=>{

slidingFun(x);
x++;
if(x==imgArr.length){
    x=0;
}

},1500)




// ------------------------------------------------------------------

// let chatBtn =document.getElementById("chatBtn");

// chatBtn.addEventListener("click",()=>{

   
// })











// let onSlide = false;

// window.addEventListener("load", () => {
//     autoSlide();

//     let dots = document.querySelectorAll(".banner_dot");
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].addEventListener("click", () => slide(i));
//     }

//     let btnPrev = document.querySelector(".banner_button__prev");
//     let btnNext = document.querySelector(".banner_button__next");
//     btnPrev.addEventListener("click", () => slide(getItemActiveIndex() - 1));
//     btnNext.addEventListener("click", () => slide(getItemActiveIndex() + 1));

// })

// function autoSlide() {
//     setInterval(() => {
//         slide(getItemActiveIndex() + 1);
//     }, 2000);
// }

// function slide(toIndex) {
//     if (onSlide)
//         return;
//     onSlide = true;

//     let itemsArr = Array.from(document.querySelectorAll(".banner_item"));
//     let itemActive = document.querySelector(".banner_item__active");
//     let itemActiveIndex = itemsArr.indexOf(itemActive);
//     let newItemActive = null;

//     if (toIndex > itemActiveIndex) {
//         // check if toIndex exceeds the number of banner items
//         if (toIndex >= itemsArr.length) {
//             toIndex = 0;
//         }

//         newItemActive = itemsArr[toIndex];

//         // start transition
//         newItemActive.classList.add("banner_item__pos_next");
//         setTimeout(() => {
//             newItemActive.classList.add("banner_item__next");
//             itemActive.classList.add("banner_item__next");
//         }, 2000);
//     } else {
//         // check if toIndex exceeds the number of banner items
//         if (toIndex < 0) {
//             toIndex = itemsArr.length - 1;
//         }

//         newItemActive = itemsArr[toIndex];

//         // start transition
//         newItemActive.classList.add("banner_item__pos_prev");
//         setTimeout(() => {
//             newItemActive.classList.add("banner_item__prev");
//             itemActive.classList.add("banner_item__prev");
//         }, 2000);
//     }

//     // remove all transition class and switch active class
//     newItemActive.addEventListener("transitionend", () => {
//         itemActive.className = "banner_item";
//         newItemActive.className = "banner_item banner_item__active";
//         onSlide = false;
//     }, {
//         once: true
//     });

//     slideIndicator(toIndex);
// }

// function getItemActiveIndex() {
//     let itemsArr = Array.from(document.querySelectorAll(".banner_item"));
//     let itemActive = document.querySelector(".banner_item__active");
//     let itemActiveIndex = itemsArr.indexOf(itemActive);
//     return itemActiveIndex;
// }

// function slideIndicator(toIndex) {
//     let dots = document.querySelectorAll(".banner_dot");
//     let dotActive = document.querySelector(".banner_dot__active");
//     let newDotActive = dots[toIndex];

//     dotActive.classList.remove("banner_dot__active");
//     newDotActive.classList.add("banner_dot__active");
// }


// ----------------------------------------9-----------
// banner end here  

let slideI = 1;
showSlides(slideI);

// Next/prev controls
function plusSlides(n) {
    showSlides(slideI += n);
}
plusSlides(4)

//  image controls
function currentSlide(n) {
    showSlides(slideI = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides4");

    if (n > slides.length) { slideI = 1 }
    if (n < 1) { slideI = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideI - 1].style.display = "block";

}


// -------------------------------------------------------
// login

var log = document.getElementById("log")
var login_btn_show = document.getElementById("login_btn")
var login_btn_hide = document.getElementById("login_hide_btn");
var otp_field = document.getElementById("otp");
var flag= false;
let mob_flag = false
// var button = document.getElementById("loginButton");
// var count=0;
//     button.addEventListener("click",function() {
//         count++;

//         if(count >1) {
//             let otp= document.getElementById("OtpNo");

//             alert("Login Successfull");
//             // window.location.href=""
//         }
//     })
// console.log(flag);
// if(flag== true){
//     otp_field.style.display = "block"
// } else {
// }
login_btn_show.addEventListener("click", btn_show)
login_btn_hide.addEventListener("click", hide)
function btn_show(e) {
    e.preventDefault()
    log.style.display = "flex"
}
function hide(e) {
    e.preventDefault()
    log.style.display = "none"
}
otp_field.style.display = "none"
function alter() {
    let mobileNo = document.getElementById("mobileNo").value
        // console.log(mobileNo.length);
        // let mob_flag= false;
        if(mobileNo.length !== 10) {
            alert("Please Enter Valid Mobile No")
        } else {
            if(mobileNo == "7209991080") {

            }
            flag = true;
            mob_flag = true
            if(flag == true) {

                otp_field.style.display = "block";
                // return;
            }
            console.log(mob_flag);

        }
        if(mob_flag == true) {

            let otp= document.getElementById("OtpNo").value; 
            console.log(otp);    
            if(otp == "8540") {
                    // hide(e)
                    alert("Login Successful");
                    // window.location.href = ""
                    let loginn = document.getElementById("loginn");
                    login_btn.style.display = "none"
                    log.style.display= "none";
                    let p = document.createElement("p");
                    p.innerHTML = "Welcome";
                    p.style.backgroundColor = "red";
                    p.style.padding = "10px";
                    p.style.borderRadius="8px"
                    loginn.append(p)


                } else {
                    alert("Please Enter Valid OTP")
                }
        } else {

        }
}