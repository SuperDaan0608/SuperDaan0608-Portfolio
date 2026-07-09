// ================= LOADER =================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }, 700);

});




// ================= CURSOR EFFECT =================

const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});





// ================= SCROLL BUTTONS =================


function scrollProjects(){

    document
    .getElementById("projects")
    .scrollIntoView({
        behavior:"smooth"
    });

}



function scrollContact(){

    document
    .getElementById("contact")
    .scrollIntoView({
        behavior:"smooth"
    });

}






// ================= SCROLL REVEAL =================


const revealElements =
document.querySelectorAll(".reveal");



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.classList.add("active");

    }


});


},{
    threshold:0.15
});



revealElements.forEach(element=>{

    revealObserver.observe(element);

});







// ================= PROJECT POPUPS =================


function openProject(project){


const title =
document.getElementById("popup-title");


const description =
document.getElementById("popup-description");



title.innerHTML = project;



if(project === "Military System"){

description.innerHTML = 
`
A complete Roblox military framework.

<br><br>

Features:
<br>
• Team systems
<br>
• Rank management
<br>
• Security systems
<br>
• Administration tools
<br>
• Training features
`;

}



if(project === "Simulator Framework"){

description.innerHTML =
`
A scalable simulator framework.

<br><br>

Features:
<br>
• Coin systems
<br>
• Upgrade systems
<br>
• Shops
<br>
• Leaderboards
<br>
• DataStore saving
`;

}



if(project === "UI System"){

description.innerHTML =
`
Modern Roblox interface development.

<br><br>

Features:
<br>
• Animated menus
<br>
• Notifications
<br>
• Smooth transitions
<br>
• Responsive layouts
`;

}




document
.getElementById("popup")
.style.display="flex";


}






function closeProject(){

document
.getElementById("popup")
.style.display="none";

}







// ================= NAVBAR EFFECT =================


const nav =
document.querySelector("nav");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


nav.style.background =
"rgba(5,8,22,.9)";


}

else{


nav.style.background =
"rgba(5,8,22,.55)";


}


});







// ================= 3D MODEL FLOAT EFFECT =================


const model =
document.querySelector(".model-box");



document.addEventListener("mousemove",(e)=>{


const x =
(e.clientX / window.innerWidth - 0.5) * 10;


const y =
(e.clientY / window.innerHeight - 0.5) * 10;



if(model){


model.style.transform =
`
rotateY(${x}deg)
rotateX(${-y}deg)
`;

}


});







// ================= CLOSE POPUP WITH ESC =================


document.addEventListener("keydown",(e)=>{


if(e.key === "Escape"){


closeProject();


}


});
