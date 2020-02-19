

var $lg = $('#galeriadefotos');

var $lgOptions = {
    selector: '.item',
    share: true,
    thumbnail: false,
    download: false,
    hideBarsDelay: 99999999,
    appendCounterTo: '.lg-actions',
    subHtmlSelectorRelative: true,
};

$lg.lightGallery($lgOptions);


function toggleCaption() {
  $('.lg').toggleClass('lg-caption-active');
  // var curVal = $('.lg-toolbar').css('visibility');
  // $('.lg-toolbar').css('visibility', curVal == 'hidden' ? 'visible' : 'hidden');
}

// Perform any action just before opening the gallery
$lg.on('onSlideClick.lg',function(event){
    toggleCaption();
});

$lg.on('onAfterOpen.lg',function(event){
  $('.lg-actions').append('<a class=\"lg-icon lg-caption-icon\" href=\"javascript:toggleCaption()\"><i class="material-icons"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M-74 29h48v48h-48V29zM0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z" fill="#999"/></svg></i></a>');
  $('.lg').addClass('lg-caption-active');
});

// $lg.on('onSlideClick.lg', console.log('test'));

//
// $("#galeriadefotos").lightGallery({
//     selector: '.item',
//     share: true,
//     thumbnail: false,
//     download: false,
//     hideBarsDelay: 5000,
// });
$('#main-photo').on('click', function() {
   $('.img-0').trigger('click');
});
