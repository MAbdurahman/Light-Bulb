/**
 * The Light Bulb Script Sheet
 * @author:  Mahdi Abdurrahman
 * @date:  24 March 2018
 * @version:  1.0.0.0
 */
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulb-on")) {
        image.src = "img/bulb-off.gif";
    } else {
        image.src = "img/bulb-on.gif";
    }
}