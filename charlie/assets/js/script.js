//Создаем пресонажей

var parent = document.getElementById("unicorn");

for (var i = 0; i < 10; i++) {
    var pinkBig = document.createElement("div");
    pinkBig.className = "pink_big";
    parent.appendChild(pinkBig);
    var blueBig = document.createElement("div");
    blueBig.className = "blue_big";
    parent.appendChild(blueBig);
}

for (var i = 0; i < 5; i++) {
    var pinkSmall = document.createElement("div");
    pinkSmall.className = "pink_small";
    parent.appendChild(pinkSmall);
    var blueSmall = document.createElement("div");
    blueSmall.className = "blue_small";
    parent.appendChild(blueSmall);
}

for (var i = 0; i < 4; i++) {
    var yBig = document.createElement("div");
    yBig.className = "y_big clickable";
    parent.appendChild(yBig);
}

var pers = document.querySelectorAll(".unicorn div");

//Рандом

function getRandomTop(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomSec(min, max) {
  return Math.random() * (max - min) + min;
}
                                //Анимация для единорогов
    //Подставление значения в высоту
for (var i = 0; i < 30; i++) {
    var topNumber = getRandomTop(20, 80);
    pers[i].style.top = ""+topNumber+"%";
}

    //Подставление значения в animation-delay
for (var i = 0; i < 30; i++) {
    var delayNumber = getRandomSec(0, 25);
    pers[i].style.animationDelay = ""+delayNumber+"s, "+delayNumber+"s";
}

                                //Анимация для других персонажей
    //Подставление значения в left
for (var i = 30; i < pers.length; i++) {
    topNumber = getRandomTop(20, 80);
    pers[i].style.left = ""+topNumber+"%";
}

for (var i = 30; i < pers.length; i++) {
    delayNumber = getRandomSec(5, 20);
    pers[i].style.animationDelay = ""+delayNumber+"s";
}



//Таймер

function timer(){
    var timerCounting=document.getElementById('timer');
 timerCounting.innerHTML--;
  
    if(timerCounting.innerHTML==0){
    setTimeout(function(){},1000);
    document.getElementsByClassName("congratulations_window")[0].style.display = "block";
    document.getElementsByClassName("timer")[0].style.top = "-20%";
    document.getElementById("points").classList.add("points");
 }
    else{
    setTimeout(timer,1000);
    
 }
}

document.getElementById("start_button").onclick = function(){
    document.getElementsByClassName("game_level")[0].style.display = "block";
    setTimeout(timer,1000);
};


//Очки
function points(){
  var pointsCounting = document.getElementById("points");
  pointsCounting.innerHTML++;
  }


//Звук

function soundUnicorn() {
    var audio = new Audio();
    audio.src = "assets/sounds/unicorn_death.mp3";
    audio.autoplay = true;
}
function soundOther() {
    var audio2 = new Audio();
    audio2.src = "assets/sounds/other_death.mp3";
    audio2.autoplay = true;
}

  //Отключение персонажей


pers[0].onclick = function (){
    pers[0].style.height="0";
    pers[0].style.width="0";
    pers[0].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[1].onclick = function (){
    pers[1].style.height="0";
    pers[1].style.width="0";
    pers[1].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[2].onclick = function (){
    pers[2].style.height="0";
    pers[2].style.width="0";
    pers[2].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[3].onclick = function (){
    pers[3].style.height="0";
    pers[3].style.width="0";
    pers[3].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[4].onclick = function (){
    pers[4].style.height="0";
    pers[4].style.width="0";
    pers[4].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[5].onclick = function (){
    pers[5].style.height="0";
    pers[5].style.width="0";
    pers[5].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[6].onclick = function (){
    pers[6].style.height="0";
    pers[6].style.width="0";
    pers[6].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[7].onclick = function (){
    pers[7].style.height="0";
    pers[7].style.width="0";
    pers[7].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[8].onclick = function (){
    pers[8].style.height="0";
    pers[8].style.width="0";
    pers[8].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[9].onclick = function (){
    pers[9].style.height="0";
    pers[9].style.width="0";
    pers[9].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[10].onclick = function (){
    pers[10].style.height="0";
    pers[10].style.width="0";
    pers[10].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
    
};
pers[11].onclick = function (){
    pers[11].style.height="0";
    pers[11].style.width="0";
    pers[11].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[12].onclick = function (){
    pers[12].style.height="0";
    pers[12].style.width="0";
    pers[12].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[13].onclick = function (){
    pers[13].style.height="0";
    pers[13].style.width="0";
    pers[13].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[14].onclick = function (){
    pers[14].style.height="0";
    pers[14].style.width="0";
    pers[14].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[15].onclick = function (){
    pers[15].style.height="0";
    pers[15].style.width="0";
    pers[15].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[16].onclick = function (){
    pers[16].style.height="0";
    pers[16].style.width="0";
    pers[16].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[17].onclick = function (){
    pers[17].style.height="0";
    pers[17].style.width="0";
    pers[17].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[18].onclick = function (){
    pers[18].style.height="0";
    pers[18].style.width="0";
    pers[18].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[19].onclick = function (){
    pers[19].style.height="0";
    pers[19].style.width="0";
    pers[19].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[20].onclick = function (){
    pers[20].style.height="0";
    pers[20].style.width="0";
    pers[20].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[21].onclick = function (){
    pers[21].style.height="0";
    pers[21].style.width="0";
    pers[21].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[22].onclick = function (){
    pers[22].style.height="0";
    pers[22].style.width="0";
    pers[22].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[23].onclick = function (){
    pers[23].style.height="0";
    pers[23].style.width="0";
    pers[23].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[24].onclick = function (){
    pers[24].style.height="0";
    pers[24].style.width="0";
    pers[24].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[25].onclick = function (){
    pers[25].style.height="0";
    pers[25].style.width="0";
    pers[25].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[26].onclick = function (){
    pers[26].style.height="0";
    pers[26].style.width="0";
    pers[26].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[27].onclick = function (){
    pers[27].style.height="0";
    pers[27].style.width="0";
    pers[27].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[28].onclick = function (){
    pers[28].style.height="0";
    pers[28].style.width="0";
    pers[28].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[29].onclick = function (){
    pers[29].style.height="0";
    pers[29].style.width="0";
    pers[29].style.transform = "rotate(270deg)";
    points();
    soundUnicorn();
};
pers[30].onclick = function (){
    pers[30].style.height="0";
    pers[30].style.width="0";
    pers[30].style.transform = "rotate(270deg)";
    points();
    soundOther();
    
};
pers[31].onclick = function (){
    pers[31].style.height="0";
    pers[31].style.width="0";
    pers[31].style.transform = "rotate(270deg)";
    points();
    soundOther();
    
};
pers[32].onclick = function (){
    pers[32].style.height="0";
    pers[32].style.width="0";
    pers[32].style.transform = "rotate(270deg)";
    points();
    soundOther();
    
};
pers[33].onclick = function (){
    pers[33].style.height="0";
    pers[33].style.width="0";
    pers[33].style.transform = "rotate(270deg)";
    points();
    soundOther();
    
};

