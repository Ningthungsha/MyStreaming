const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>60){

header.style.background="#09090f";

}

else{

header.style.background="rgba(0,0,0,.55)";

}

});

const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Video Player page coming soon!");
    });
});

const recommendedCards = document.querySelectorAll(".recommended-card");

recommendedCards.forEach(card => {
    card.addEventListener("click", () => {
        alert("Opening video...");
    });
});

const followButtons = document.querySelectorAll(".creator-card button");

followButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Following";
        button.disabled = true;
    });
});

const planButtons = document.querySelectorAll(".plan-card button");

planButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Premium feature coming soon!");
    });
});