// Smooth Scrool Sample
$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 600  
    });
  });
 
  document.getElementById('js-download-btn').addEventListener('click', function() {
    var fileUrl = 'ファイルへのパス'; // ダウンロードするファイルのURL
    var fileName = 'sample.pdf'; // ダウンロードする際のファイル名

    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = fileUrl;
    a.download = fileName;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

<button onclick="history.back()">戻る</button>

  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "/";
  }