var mGame;
var mUtils;
console.log('Starting...');
///////////////////////////////////////////////////////
function GetRandom(pMax){
    return pMax*Math.random()
}
function GetCanvas(){
    return document.getElementById('canvas')
}
function GetCanvasRect(){
    return document.getElementById('canvas').getBoundingClientRect();
}
function GetDistance(a,b){
    var f1 = Math.pow(a.x-b.x,2);
    var f2 = Math.pow(a.y-b.y,2);
    return Math.sqrt(f1+f2)
}
///////////////////////////////////////////////////////
window.onload= function(){
    if (document.readyState=="complete"){
        mGame= new clsJumpHero(window,this.document);
    }
  
}

