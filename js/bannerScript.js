"use-strict";

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    }
    else {
        startAd();
    }
}

function startAd() {
    addEventListeners();
    init(); 
}

function addEventListeners() {
    document.getElementById("bg-exit").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

window.addEventListener('load', initEB);

function init() {

 TweenMax.set("#frame1", {alpha: 0});
 TweenMax.set("#frame2", {alpha: 0});
 TweenMax.set("#frame3", {alpha: 0});
 TweenMax.set("#frame4", {alpha: 0});
 TweenMax.set("#bg", {alpha:1});
 TweenMax.set("#bg1", {alpha:1});
 TweenMax.set("#bg2", {alpha: 1});
 TweenMax.set("#bg3", {alpha: 1});
 TweenMax.set("#bg4", {alpha: 1});
 TweenMax.set("#bg5", {alpha: 1});
 TweenMax.set("#bg6", {alpha: 1});
 TweenMax.set("#bg7", {alpha: 1});
 TweenMax.set("#bg8", {alpha: 1});
 TweenMax.set("#sparkle1_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle1_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle2_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle2_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle3_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle3_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle4_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle4_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle5_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle5_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle6_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle6_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle7_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle7_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle8_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle8_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle9_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle9_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle10_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle10_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle11_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle11_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle12_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle12_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle13_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle13_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle14_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle14_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle15_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle15_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle16_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle16_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle17_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle17_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle18_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle18_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle19_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle19_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle20_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle20_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle21_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle21_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle22_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle22_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle23_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle23_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle24_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle24_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle25_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle25_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle26_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle26_2", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle27_1", {alpha: 0, scale:0.5});
 TweenMax.set("#sparkle27_2", {alpha: 0, scale:0.5});
 TweenMax.set("#logo", {alpha: 1});
 TweenMax.set("#cta", {alpha: 1});
 ani_01();
 spark01();
 spark02();
}


function spark02(){
var tl = new TimelineMax({repeat:-1});

tl.to("#bg1", .5, {alpha: 0,ease: Power2.easeOut})
.to("#bg2", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg3", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg4", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg5", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg6", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg7", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.3")
.to("#bg8", .5, {alpha: 0, ease: Power2.easeOut}, "-=0.2");
TweenMax.delayedCall(15, stop);
}


function spark01(){
var tl = new TimelineMax({repeat:-1});

tl.to("#sparkle1_1", .1, {alpha: 1,ease: Power2.easeOut}, "-=9.9")
.to("#sparkle1_1", .1, {alpha: 0,ease: Power2.easeOut}, "-=9.7")
.to("#sparkle1_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=10")
.to("#sparkle1_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=9.8")
.to("#sparkle5_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=11.8")
.to("#sparkle5_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=11.6")
.to("#sparkle5_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=13.8")
.to("#sparkle5_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=13.7")
.to("#sparkle2_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=4.9")
.to("#sparkle2_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=4.7")
.to("#sparkle2_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=10.2")
.to("#sparkle2_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=10")
.to("#sparkle3_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.5")
.to("#sparkle3_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.2")
.to("#sparkle3_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=11")
.to("#sparkle3_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=10.8")
.to("#sparkle4_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=13.4")
.to("#sparkle4_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=13.2")
.to("#sparkle4_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.9")
.to("#sparkle4_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.7")
.to("#sparkle6_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=15.8")
.to("#sparkle6_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=15.6")
.to("#sparkle7_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=10.8")
.to("#sparkle7_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=10.6")
.to("#sparkle7_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.8")
.to("#sparkle7_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.6")
.to("#sparkle8_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=9.5")
.to("#sparkle8_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=9.3")
.to("#sparkle8_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.8")
.to("#sparkle8_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.7")
.to("#sparkle9_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=13.9")
.to("#sparkle9_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=13.7")
.to("#sparkle9_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=9.9")
.to("#sparkle9_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=9.7")
.to("#sparkle10_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.2")
.to("#sparkle10_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=12")
.to("#sparkle10_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=7.2")
.to("#sparkle10_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=7")
.to("#sparkle11_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=7.5")
.to("#sparkle11_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=7.2")
.to("#sparkle11_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.8")
.to("#sparkle11_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.6")
.to("#sparkle12_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=6")
.to("#sparkle12_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=6.8")
.to("#sparkle12_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=10.7")
.to("#sparkle12_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=10.5")
.to("#sparkle13_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=1.4")
.to("#sparkle13_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=11.7")
.to("#sparkle13_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=11.5")
.to("#sparkle13_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.2")
.to("#sparkle14_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=9.6")
.to("#sparkle14_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=9.4")
.to("#sparkle15_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.9")
.to("#sparkle15_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.7")
.to("#sparkle15_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=14.9")
.to("#sparkle15_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=14.7")
.to("#sparkle16_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=7.4")
.to("#sparkle16_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=7.2")
.to("#sparkle16_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.4")
.to("#sparkle16_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.2")
.to("#sparkle17_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.3")
.to("#sparkle17_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.1")
.to("#sparkle17_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=6.3")
.to("#sparkle17_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=6.1")
.to("#sparkle18_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=14.7")
.to("#sparkle18_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=14.5")
.to("#sparkle18_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=3")
.to("#sparkle18_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=2.8")
.to("#sparkle19_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.9")
.to("#sparkle19_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.7")
.to("#sparkle19_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=10.8")
.to("#sparkle19_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=10.6")
.to("#sparkle20_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.8")
.to("#sparkle20_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.7")
.to("#sparkle20_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=9.8")
.to("#sparkle20_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=9.7")
.to("#sparkle21_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=11.9")
.to("#sparkle21_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=11.7")
.to("#sparkle21_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=15.5")
.to("#sparkle21_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=15.3")
.to("#sparkle22_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=9.1")
.to("#sparkle22_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.9")
.to("#sparkle22_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=13")
.to("#sparkle22_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.8")
.to("#sparkle23_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=12.9")
.to("#sparkle23_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=8.9")
.to("#sparkle23_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=8.7")
.to("#sparkle23_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.7")
.to("#sparkle24_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=15")
.to("#sparkle24_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=14.8")
.to("#sparkle24_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=11")
.to("#sparkle24_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=10.8")
.to("#sparkle25_1", .1, {alpha: 1, ease: Power2.easeOut}, "-=14.4")
.to("#sparkle25_1", .1, {alpha: 0, ease: Power2.easeOut}, "-=14.2")
.to("#sparkle25_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=15.2")
.to("#sparkle25_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=14.9")
.to("#sparkle26_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=15.3")
.to("#sparkle26_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=15.1")
.to("#sparkle27_2", .1, {alpha: 1, ease: Power2.easeOut}, "-=13")
.to("#sparkle27_2", .1, {alpha: 0, ease: Power2.easeOut}, "-=12.8");
TweenMax.delayedCall(15, stop);
}


function ani_01(){
TweenMax.to("#covering-div", 0, {alpha: 0});
TweenMax.to("#frame1",2, {alpha:1, delay:0.8, ease: Power2.easeOut});
TweenMax.to("#frame2",2, {alpha:1, delay:1.2,  ease: Power2.easeOut});
TweenMax.to("#frame3",2, {alpha:1, delay:1.6,  ease: Power2.easeOut});
TweenMax.to("#frame4",2, {alpha:1, delay:2,  ease: Power2.easeOut});
}

function stop() {
  TweenMax.killAll();
}