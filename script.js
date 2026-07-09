function scrollProjects(){

document
.getElementById("projects")
.scrollIntoView();

}



const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});


});



document
.querySelectorAll(".hidden")
.forEach(el=>observer.observe(el));





function openProject(project){


let title =
document.getElementById("popup-title");

let text =
document.getElementById("popup-text");



title.innerHTML = project;



if(project === "Military System"){

text.innerHTML =
"Military system with teams, ranks, security systems and administration tools.";

}



if(project === "Simulator Framework"){

text.innerHTML =
"Simulator framework including coins, upgrades, shops, leaderboards and saving.";

}



if(project === "UI System"){

text.innerHTML =
"Modern Roblox interfaces with animations, menus and notifications.";

}



document.getElementById("popup").style.display="flex";


}




function closeProject(){

document.getElementById("popup").style.display="none";

}
