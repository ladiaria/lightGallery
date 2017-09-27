

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
   $('.lg-actions').append('<a class=\"lg-icon lg-caption-icon\" href=\"javascript:toggleCaption()\"><i class="material-icons">chrome_reader_mode</i></a>');
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
