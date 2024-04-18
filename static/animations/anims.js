// var selection = document.querySelector(".selection").classList;

var originalElement = document.querySelector(".selection");
var isAnimating = false;
var changingtext = document.getElementById('textWindow');


const htmltext = ` <p>

<p> &lt;!DOCTYPE html&gt <br/> </p>
<html lang="en"&gt <br/> 
&lt;head&gt <br/>
&emsp; &lt;meta charset="UTF-8"&gt <br/>
&emsp; &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"> <br/>
&emsp; &lt;title&gtAnimation&lt;/title&gt <br/>
&emsp; &lt;link rel="stylesheet" href="*"&gt <br/>
&lt;/head&gt <br/>
&emsp; &lt;body&gt <br/>
&emsp; &emsp; &lt;div style="display: inline-block;" class="text-**"&gtselect an animation&lt;&lt;div&gt <br/>
&emsp; &lt;/body&gt <br/>
&lt;/html&gt <br/>
<br/>

* - Ваш путь к файлу формата CSS. <br/>
**- Название анимации как в панели справа.</p>
`;

document.getElementById('myhtml').innerHTML = htmltext;



var texts = [
    `@keyframes spin { <br/>
    &emsp; from { <br/>
    &emsp; &emsp; transform: rotate(0deg); <br/>
    &emsp; } <br/>
    
    &emsp; to { <br/>
    &emsp; &emsp; transform: rotate(360deg); <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-spin { <br/>
    &emsp; animation: spin 2s; <br/>
    }`,
    
    `@keyframes flash { <br/>
        &emsp; 50% { <br/>
            &emsp; &emsp; opacity: 0; <br/>
        &emsp;} <br/>
    } <br/>
    
    .text-flash { <br/>
    &emsp; animation: flash 1s; <br/>
    } <br/>`, 
    
    `@keyframes pulse { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; transform: scale(0.95); <br/>
    &emsp; &emsp; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7); <br/>
    &emsp; } <br/>
    
    &emsp; 70% { <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); <br/>
    &emsp; } <br/>
    
    &emsp; 100% { <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-pulse { <br/>
    &emsp; animation: pulse 2s; <br/>
    }`,

    `@keyframes rubberBand { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; transform: scale(1, 1); <br/>
    &emsp; } <br/>
    &emsp; 25% { <br/>
    &emsp; &emsp; transform: scale(1.3, 0.6); <br/>
    &emsp; } <br/>

    &emsp; 50% { <br/>
    &emsp; &emsp; transform: scale(1.1, 0.9); <br/>
    &emsp; } <br/>
    &emsp; 100% { <br/>
    &emsp; &emsp; transform: scale(1, 1); <br/>
    &emsp; } <br/>
} <br/>

    .text-rubberBand { <br/>
    &emsp; animation: rubberBand 3s; <br/>
    }`,

    `@keyframes shakeX { <br/>
    &emsp; 0% { transform: translateX(0) } <br/>
    &emsp; 25% { transform: translateX(7px) } <br/>
    &emsp; 50% { transform: translateX(-7px) } <br/>
    &emsp; 75% { transform: translateX(7px) } <br/>
    &emsp; 100% { transform: translateX(0) } <br/>
    } <br/>
    
    .text-shakeX { <br/>
    &emsp; animation: shakeX 1s; <br/>
    }`,

    `@keyframes shakeY { <br/>
    &emsp; 0% { transform: translateY(0) } <br/>
    &emsp; 25% { transform: translateY(7px) } <br/>
    &emsp; 50% { transform: translateY(-7px) } <br/>
    &emsp; 75% { transform: translateY(7px) } <br/>
    &emsp; 100% { transform: translateY(0) } <br/>
    } <br/>
    
    .text-shakeY { <br/>
    &emsp; animation: shakeY 1s; <br/>
    }`,

    `@keyframes swing { <br/>
    &emsp; 0% { transform: rotate(3deg); } <br/>
    &emsp; 25% { transform: rotate(-3deg); } <br/>
    &emsp; 50% { transform: rotate(3deg); } <br/>
    &emsp; 75% { transform: rotate(-3deg); } <br/>
    } <br/>
      
    .text-swing { <br/>
    &emsp; animation-name: swing; <br/>
    &emsp; animation-duration: 1.5s; <br/>
    &emsp; animation-direction: alternate; <br/>
    &emsp; animation-fill-mode: backwards; <br/>
    &emsp; animation-timing-function: ease-in-out; <br/>
    }`,

    `@keyframes tada { <br/>
    &emsp; 0% {transform: scale(1);} <br/>
    &emsp; 10%, 20% {transform: scale(0.9) rotate(-3deg);} <br/>
    &emsp; 30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);} <br/>
    &emsp; 40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);} <br/>
    &emsp; 100% {transform: scale(1) rotate(0);} <br/>
    } <br/>
    
    .text-tada { <br/>
    &emsp; animation: tada 3s; <br/>
    }`,

    `@keyframes wobble { <br/>
    &emsp; 0% { transform: translateX(0%); } <br/>
    &emsp; 15% { transform: translateX(-25%) rotate(-5deg); } <br/>
    &emsp; 30% { transform: translateX(20%) rotate(3deg); } <br/>
    &emsp; 45% { transform: translateX(-15%) rotate(-3deg); } <br/>
    &emsp; 60% { transform: translateX(10%) rotate(2deg); } <br/>
    &emsp; 75% { transform: translateX(-5%) rotate(-1deg); } <br/>
    &emsp; 100% { transform: translateX(0%); } <br/>
    } <br/>
    
    .text-wobble { <br/>
    &emsp; animation: wobble 2s; <br/>
    }`,

    `@keyframes jello { <br/>
    &emsp; 11.1% { <br/>
    &emsp; &emsp; transform: none <br/>
     } <br/>
    &emsp; 22.2% { <br/>
    &emsp; &emsp; transform: skewX(-12.5deg) skewY(-12.5deg)
     } <br/>
    &emsp; 33.3% { <br/>
    &emsp; &emsp; transform: skewX(6.25deg) skewY(6.25deg)
     } <br/>
    &emsp; 44.4% { <br/>
    &emsp; &emsp; transform: skewX(-3.125deg) skewY(-3.125deg)
     } <br/>
    &emsp; 55.5% { <br/>
    &emsp; &emsp; transform: skewX(1.5625deg) skewY(1.5625deg)
     } <br/>
    &emsp; 66.6% { <br/>
    &emsp; &emsp; transform: skewX(-0.78125deg) skewY(-0.78125deg)
     } <br/>
    &emsp; 77.7% { <br/>
    &emsp; &emsp; transform: skewX(0.390625deg) skewY(0.390625deg)
     } <br/>
    &emsp; 88.8% { <br/>
    &emsp; &emsp; transform: skewX(-0.1953125deg) skewY(-0.1953125deg)
     } <br/>
    &emsp; 100% { <br/>
    &emsp; &emsp; transform: none
     } <br/>
    } <br/>
    
    .text-jello { <br/>
    &emsp; animation: jello 2s; <br/>
    }`,

    `@keyframes heartBeat { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; transform: scale( .75 ); } <br/>
    &emsp; 20% { <br/>
    &emsp; &emsp; transform: scale( 1 ); } <br/>
    &emsp; 40% { <br/>
    &emsp; &emsp; transform: scale( .75 ); } <br/>
    &emsp; 60% { <br/>
    &emsp; &emsp; transform: scale( 1 ); } <br/>
    &emsp; 80% { <br/>
    &emsp; &emsp; transform: scale( .75 ); } <br/>
    &emsp; 100% { <br/>
    &emsp; &emsp; transform: scale( .75 ); } <br/>
    } <br/>
    
    .text-heartBeat { <br/>
    &emsp; animation: heartBeat 2s; <br/>
    }`,

    `@keyframes backInDown { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: translateY(-1200px) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(-1200px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; 80% { <br/>
    &emsp; &emsp; -webkit-transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backInDown { <br/>
    &emsp; animation: backInDown 2s; <br/>
    }`,

    `@keyframes backInLeft { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: translateX(-2000px) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(-2000px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>   
    &emsp; } <br/>
    &emsp; 80% { <br/>
    &emsp; &emsp; -webkit-transform: translateX(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(0) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backInLeft { <br/>
    &emsp; animation: backInLeft 2s; <br/>
    }`,

    `@keyframes backInRight { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: translateX(2000px) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(2000px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; 80% { <br/>
    &emsp; &emsp; -webkit-transform: translateX(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(0) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backInRight { <br/>
    &emsp; animation: backInRight 2s; <br/>
    }`,

    `@keyframes backInUp { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: translateY(1000px) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(1000px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; 80% { <br/>
    &emsp; &emsp; -webkit-transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backInUp { <br/>
    &emsp; animation: backInUp 2s; <br/>
    }`,

    `@keyframes backOutDown { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    &emsp; 20% { <br/>
    &emsp; &emsp; -webkit-transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(0) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: translateY(800px) scale(.7); <br/>
    &emsp; &emsp; transform: translateY(800px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backOutDown { <br/>
    &emsp; animation: backOutDown 2s; <br/>
    }`,

    `@keyframes backOutLeft { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; -webkit-transform: scale(1); <br/>
    &emsp; &emsp; transform: scale(1); <br/>
    &emsp; &emsp; opacity: 1 <br/>
    &emsp; } <br/>
    &emsp; 20% { <br/>
    &emsp; &emsp; -webkit-transform: translateX(0) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(0) scale(.7); <br/> 
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; -webkit-transform: translateX(-2000px) scale(.7); <br/>
    &emsp; &emsp; transform: translateX(-2000px) scale(.7); <br/>
    &emsp; &emsp; opacity: .7 <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-backOutLeft { <br/>
    &emsp; animation: backOutLeft 2s; <br/>
    }`,

    `@keyframes backOutRight { <br/>
        &emsp; 0% { <br/>
        &emsp; &emsp; -webkit-transform: scale(1); <br/>
        &emsp; &emsp; transform: scale(1); <br/>
        &emsp; &emsp; opacity: 1 <br/>
        &emsp; } <br/>
        &emsp; 20% { <br/>
        &emsp; &emsp; -webkit-transform: translateX(0) scale(.7); <br/>
        &emsp; &emsp; transform: translateX(0) scale(.7); <br/>
        &emsp; &emsp; opacity: .7 <br/>
        &emsp; } <br/>
        &emsp; to { <br/>
        &emsp; &emsp; -webkit-transform: translateX(2000px) scale(.7); <br/>
        &emsp; &emsp; transform: translateX(2000px) scale(.7); <br/>
        &emsp; &emsp; opacity: .7 <br/>
        &emsp; } <br/>
    } <br/>
    
    .text-backOutRight { <br/>
    &emsp; animation: backOutRight 2s; <br/>
    }`,

    `@keyframes backOutUp { <br/>
        &emsp; 0% { <br/>
          &emsp; &emsp; -webkit-transform: scale(1); <br/>
          &emsp; &emsp; transform: scale(1); <br/>
          &emsp; &emsp; opacity: 1 <br/>
        &emsp; } <br/>
        &emsp; 20% { <br/>
          &emsp; &emsp; -webkit-transform: translateY(0) scale(.7); <br/>
          &emsp; &emsp; transform: translateY(0) scale(.7); <br/>
          &emsp; &emsp; opacity: .7 <br/>
        &emsp; } <br/>
        &emsp; to { <br/>
          &emsp; &emsp; -webkit-transform: translateY(-700px) scale(.7); <br/>
          &emsp; &emsp; transform: translateY(-700px) scale(.7); <br/>
          &emsp; &emsp; opacity: .7 <br/>
        &emsp; } <br/>
    } <br/>
    
    .text-backOutUp { <br/>
        &emsp; animation: backOutUp 2s; <br/>
    }`,

    `@keyframes fadeIn { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; transform: scale(0.5); <br/>
    &emsp; &emsp; opacity: 0; <br/>
    &emsp; } <br/>
    &emsp; 50% { <br/>
    &emsp; &emsp; opacity: 1; <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-fadeIn { <br/>
    &emsp; animation: fadeIn 3s; <br/>
    }`,

    `@keyframes fadeInDown { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; opacity: 0; <br/>
    &emsp; &emsp; -webkit-transform: translate3d(0, -100%, 0); <br/>
    &emsp; &emsp; transform: translate3d(0, -100%, 0) <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; opacity: 1; <br/>
    &emsp; &emsp; -webkit-transform: translateZ(0); <br/>
    &emsp; &emsp; transform: translateZ(0) <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-fadeInDown { <br/>
    &emsp; animation: fadeInDown 2s; <br/>
    }`,

    `@keyframes fadeInLeft { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; opacity: 0; <br/>
    &emsp; &emsp; -webkit-transform: translate3d(-100%, 0, 0); <br/>
    &emsp; &emsp; transform: translate3d(-100%, 0, 0) <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; opacity: 1; <br/>
    &emsp; &emsp; -webkit-transform: translateZ(0); <br/>
    &emsp; &emsp; transform: translateZ(0) <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-fadeInLeft { <br/>
    &emsp; animation: fadeInLeft 2s; <br/>
    }`,

    `@keyframes fadeInRight { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; opacity: 0; <br/>
    &emsp; &emsp; -webkit-transform: translate3d(100%, 0, 0); <br/>
    &emsp; &emsp; transform: translate3d(100%, 0, 0) <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; opacity: 1; <br/>
    &emsp; &emsp; -webkit-transform: translateZ(0); <br/>
    &emsp; &emsp; transform: translateZ(0) <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-fadeInRight { <br/>
    &emsp; animation: fadeInRight 2s; <br/>
    }`,

    `@keyframes fadeInUp { <br/>
    &emsp; 0% { <br/>
    &emsp; &emsp; opacity: 0; <br/>
    &emsp; &emsp; -webkit-transform: translate3d(0, 100%, 0); <br/>
    &emsp; &emsp; transform: translate3d(0, 100%, 0) <br/>
    &emsp; } <br/>
    &emsp; to { <br/>
    &emsp; &emsp; opacity: 1; <br/>
    &emsp; &emsp; -webkit-transform: translateZ(0); <br/>
    &emsp; &emsp; transform: translateZ(0) <br/>
    &emsp; } <br/>
    } <br/>
    
    .text-fadeInUp { <br/>
    &emsp; animation: fadeInUp 2s; <br/>
    }`,
];

var currentTextIndex = 0;


function applyAnimation(animationClass, duration) {
    if (isAnimating) {
        return;
    }
    
    isAnimating = true;

    originalElement.classList.add(animationClass);

    setTimeout(function() {
        originalElement.classList.remove(animationClass);
        isAnimating = false;
    }, duration);
}

function spin(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-spin", 2000);
    
}

function flash(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-flash", 1000);
}

function pulse(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-pulse", 1500);
}


function fadeIn(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-fadeIn", 2000);
}

function rubberBand(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-rubberBand", 2000);
}

function shakeX(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-shakeX", 1000);
}

function shakeY(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-shakeY", 1000);
}

function swing(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-swing", 1500);
}

function tada(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-tada", 3000);
}

function wobble(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-wobble", 2000);
}

function jello(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-jello", 2000);
}

function heartBeat(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-heartBeat", 2000);
}

function backInDown(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backInDown", 2000);
}

function backInLeft(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backInLeft", 2000);
}

function backInRight(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backInRight", 2000);
}

function backInUp(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backInUp", 2000);
}

function backOutDown(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backOutDown", 2000);
}

function backOutLeft(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backOutLeft", 2000);
}

function backOutRight(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backOutRight", 2000);
}

function backOutUp(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-backOutUp", 2000);
}

function fadeInDown(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-fadeInDown", 1500);
}

function fadeInLeft(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-fadeInLeft", 1500);
}

function fadeInRight(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-fadeInRight", 1500);
}

function fadeInUp(textIndex) {
    currentTextIndex = textIndex;
    document.getElementById('textWindow').innerHTML = texts[currentTextIndex];
    applyAnimation("text-fadeInUp", 1500);
}