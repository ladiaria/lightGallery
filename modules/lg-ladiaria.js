

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


/*! lg-share - v1.0.2 - 2016-11-26
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        facebookDropdownText: 'Facebook',
        twitter: true,
        twitterDropdownText: 'Twitter',
        googlePlus: true,
        googlePlusDropdownText: 'GooglePlus',
        pinterest: true,
        pinterestDropdownText: 'Pinterest'
    };

    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };

    Share.prototype.init = function() {
        var _this = this;
        var shareHtml = '<span id="lg-share" class="lg-icon">' +
            '<ul class="lg-dropdown" style="position: absolute;">';
        shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
        shareHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(shareHtml);
        this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        $('#lg-share').on('click.lg', function(){
            _this.core.$outer.toggleClass('lg-dropdown-active');
        });

        $('#lg-dropdown-overlay').on('click.lg', function(){
            _this.core.$outer.removeClass('lg-dropdown-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {
                $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-facebook-share-url') || window.location.href)));

                $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.core.$items.eq(index).attr('data-tweet-text') + '&url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-twitter-share-url') || window.location.href)));

                $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-googleplus-share-url') || window.location.href)));

                $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.core.$items.eq(index).attr('data-pinterest-share-url') || window.location.href)) + '&media=' + encodeURIComponent(_this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src')) + '&description=' + _this.core.$items.eq(index).attr('data-pinterest-text'));

            }, 100);
        });
    };

    Share.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.share = Share;

})();



}));
