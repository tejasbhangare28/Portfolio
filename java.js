const roles = [
  "AI Enthusiast",
  "Data Science Learner"
];

let index = 0;
let charIndex = 0;

function typeEffect(){
  if(charIndex < roles[index].length){
    document.querySelector(".typing").textContent += roles[index][charIndex];
    charIndex++;
    setTimeout(typeEffect,120);
  }else{
    setTimeout(eraseEffect,1500);
  }
}

function eraseEffect(){
  if(charIndex > 0){
    document.querySelector(".typing").textContent =
      roles[index].substring(0,charIndex-1);
    charIndex--;
    setTimeout(eraseEffect,80);
  }else{
    index = (index + 1) % roles.length;
    setTimeout(typeEffect,400);
  }
}

typeEffect();

function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}
