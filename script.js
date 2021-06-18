const js = document.getElementById("js");
const crutch = document.getElementById("crutch");
const score = document.getElementById("score");
let crutchAnimateTime = 1000;
document.addEventListener("keydown", function(event){
	jump();
});
document.addEventListener("touchstart", function(event){
	jump();
});




function jump() {
	if(js.classList != "jump"){
		js.classList.add("jump");
	}
	setTimeout (function() {
		js.classList.remove("jump");
	}, 300);
};

let isAlive = setInterval(function() {
	let jsTop = parseInt(window.getComputedStyle(js).getPropertyValue("top"));
	let crutchLeft = parseInt(window.getComputedStyle(crutch).getPropertyValue("left"));


	if(crutchLeft < 50 && crutchLeft > 0 && jsTop>= 130) {
		alert("ГАМЕОВЕР!");
		scoreNum = -1;
		score.textContent = scoreNum;
		scorePlus = 1;
	};
}, 10);

let scoreNum = 0;
let scorePlus = 1;
score.textContent = scoreNum;
let collectScore = setInterval(function() {
		scoreNum = scoreNum + scorePlus;
		score.textContent = scoreNum;
}, crutchAnimateTime);
