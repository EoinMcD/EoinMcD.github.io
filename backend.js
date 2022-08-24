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
