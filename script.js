// Smooth Scrool Sample
$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600  
    });
  });
 
<button onclick="history.back()">戻る</button>

  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "/";
  }