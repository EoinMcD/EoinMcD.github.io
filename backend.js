var imageNodes = document.getElementsByClassName('agent');
addEventListeners(imageNodes);

function addEventListeners(imageNodes){
    for (var i = 0; i < imageNodes.length; i++){
        
        imageNodes[i].addEventListener("click", function() {
            if($(this).hasClass("clicked")){
                $(this).removeClass("clicked");

            }else if(!$(this).hasClass('clicked')){
                $(this).addClass("clicked");
            }
        });
    }
}

let femaleToggle = false;
$("#female").click(function() {
    if(!femaleToggle){
        $(".portraits").filter(".female").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        femaleToggle = true;

        $('#female').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".female").css("backgroundColor", "");
        femaleToggle = false;

        $('#female').css("backgroundColor", "rgba(255, 255, 255, 0.2)");
    }
});

let maleToggle = false;
$("#male").click(function() {
    if(!maleToggle){
        $(".portraits").filter(".male").css("backgroundColor", "rgba(255, 0, 0, 0.5)");
        maleToggle = true;

        $('#male').css("backgroundColor", "red");
    }else{
        $(".portraits").filter(".male").css("backgroundColor", "");
        maleToggle = false;

        $('#male').css("backgroundColor", "rgba(255, 255, 255, 0.2)");

    }
});