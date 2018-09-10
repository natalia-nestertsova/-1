window.onload = function(){
    var buyButton = document.getElementsByClassName("buy-button");
    var buyButtonImg = document.getElementsByClassName("buy-button-img");

    buyButton.mouseover=function(){
        buyButton.className +=" buy-button-active";
        buyButtonImg.className += " buy-button-img-active";
    }
    buyButtonImg.mouseover=function(){
        buyButton.className +=" buy-button-active";
        buyButtonImg.className += " buy-button-img-active";
    }
    buyButton.mouseout=function(){
        buyButton.classList.remove("buy-button-active");
        buyButtonImg.classList.remove("buy-button-img-active");
    }
    buyButtonImg.mouseout=function(){
        buyButton.classList.remove("buy-button-active");
        buyButtonImg.classList.remove("buy-button-img-active");
    }

}