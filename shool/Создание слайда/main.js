document.getElementById('slider_left').onclick = sliderLeft;

var left = 0;

function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left -128;
    if ( left < -512 ) {
        
        left = 0;//возвращает в ис. положение
    }
    polosa.style.left = left + 'px';
}
