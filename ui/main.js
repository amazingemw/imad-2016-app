console.log('Loaded!');
var img=document.getElementById('madi');
var marginLeft= 0 ;
function movRight(){
    marginLeft = marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(movRight,50);
};
    