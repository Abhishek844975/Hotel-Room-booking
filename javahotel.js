/**
 * 
 */

// Navbar links
const headersLink = document.getElementById("home");
const aboutusLink = document.getElementById("about");
const facilitiesLink = document.getElementById("facilitiesLink");
const galleryLink = document.getElementById("gallery");
const contactLink = document.getElementById("contact");

// Sections
const headersSection = document.getElementById("headersection");        // Home
const aboutusSection = document.getElementById("achives");       // Rooms
const facilitiesSection = document.getElementById("facilities");               // Facilities
const gallerySection = document.querySelector(".container");          // Gallery (your rooms images container)
const contactSection = document.querySelector(".footer");            // Contact / Booking


function ScrollAndHighLight(section)
{
    section.scrollIntoView({behavior:"smooth"});

    const children = section.children;

    for(let i=0; i<children.length; i++)
    {
        children[i].style.transition = "background 0.5s";
        children[i].style.backgroundColor = "#f0f0f008";

        setTimeout(() => {
            children[i].style.backgroundColor = "";
        }, 1000);
    }
}


// 
// Aise check karein


    headersLink.addEventListener("click", function(e) {
        e.preventDefault();
        ScrollAndHighLight(headersSection);
    });


// Baaki sab links ke liye bhi yahi 'if' condition lagayein
// 


aboutusLink.addEventListener("click",function(e){
    e.preventDefault();
     ScrollAndHighLight(aboutusSection);
});
facilitiesLink.addEventListener("click",function(e){
    e.preventDefault();
     ScrollAndHighLight(facilitiesSection);
});
galleryLink.addEventListener("click",function(e){
    e.preventDefault();
  ScrollAndHighLight(gallerySection);
});
contactLink.addEventListener("click",function(e){
    e.preventDefault();
   ScrollAndHighLight(contactSection);
});
// NAVBAR BOOKNOW BTN
 const bookNow=document.getElementById("bookNow");
 bookNow.addEventListener("click",function(e){
   e.preventDefault();
   window.location.href = "javahotel2.html#form-section";
 });


// checkfaciliies
const facibtn = document.getElementById("facisbtn");

facibtn.addEventListener("click", function () {
    window.location.href = "javahotel2.html#container3";
});

// html booknow btn
document.addEventListener("DOMContentLoaded", function(){

    const bookNowBtns = document.querySelectorAll(".bookNowBtn");

    bookNowBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            e.preventDefault();
            window.location.href = "javahotel2.html#form-section";
        });
    });

});


let btn=document.getElementById("btn-corner")
btn.addEventListener("click",function(e){
    e.preventDefault();
      window.location.href = "javahotel2.html#slider-section";
});

// 2 html js

// Helper function to scroll & highlight section
// function scrollAndHighlight(section) {
//     section.scrollIntoView({ behavior: "smooth" });

//     // Example: change background of first-level child elements
//     const children = section.children;
//     for (let i = 0; i < children.length; i++) {
//         children[i].style.transition = "background 0.5s";
//         children[i].style.backgroundColor = "#f0f0f0"; // temporary highlight
//         setTimeout(() => {
//             children[i].style.backgroundColor = ""; // revert after 1s
//         }, 1000);
//     }

//     console.log("Section elements:", children);
// }

// // Event listeners
// homeLink.addEventListener("click", function(e){
//     e.preventDefault();
//     scrollAndHighlight(headerSection);
// });

// roomsLink.addEventListener("click", function(e){
//     e.preventDefault();
//     scrollAndHighlight(roomsSection);

//     // Optional: Only Rooms activities
//     const activities = roomsSection.getElementsByClassName("activity");
//     for(let i=0; i<activities.length; i++){
//         activities[i].style.backgroundColor = "#8d3434";
//         activities[i].style.color = "#fff";
//     }
// });

// faciLink.addEventListener("click", function(e){
//     e.preventDefault();
//     scrollAndHighlight(faciSection);
// });

// galleryLink.addEventListener("click", function(e){
//     e.preventDefault();
//     scrollAndHighlight(gallerySection);
// });

// contactLink.addEventListener("click", function(e){
//     e.preventDefault();
//     scrollAndHighlight(contactSection);
// });
 

// image slider
let images = [
"https://tse4.mm.bing.net/th/id/OIP.ji7h5j5EZuui7C9U-RwNNQHaER?pid=Api&P=0&h=180",
"https://tse4.mm.bing.net/th/id/OIP.ji7h5j5EZuui7C9U-RwNNQHaER?pid=Api&P=0&h=180",
 "https://tse3.mm.bing.net/th/id/OIP.anh_33Iyk3eCl_x5TcsodgHaE8?pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th/id/OIP.ViUAuItOO54F6HlshFw-fQHaFI?pid=Api&P=0&h=180",
    "https://tse1.mm.bing.net/th/id/OIP.__lzdfjn6AJQwMqGvJk_4AHaLH?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.PjMzsbGBTlWURROb7mfwrwHaEo?pid=Api&P=0&h=180",
    "https://tse2.mm.bing.net/th/id/OIP.3rTaRe3j_JU5ha6iEKkIPQHaE7?pid=Api&P=0&h=180" ];

let index = 0;

function nextSlide(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    document.getElementById("sliderImage").src = images[index];
}

function prevSlide(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    document.getElementById("sliderImage").src = images[index];
};
