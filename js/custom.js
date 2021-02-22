let isDarkmode = false;

function bindEvent() {
    $("#changeColor").click(function () {
        isDarkmode = !isDarkmode

        if(isDarkmode){
            document.body.style.background = "rgb(0 ,0, 0)";
            document.body.style.color = "rgb(255 ,255, 255)";
            document.getElementById("changeColor").innerHTML = "Light"
        }else{
            document.body.style.background = "rgb(255 ,255, 255)";
            document.body.style.color = "rgb(0 ,0, 0)";
            document.getElementById("changeColor").innerHTML = "Dark"
        }
    })
}