jQuery(function($){
$("div.lang-switcher > ul").append('<li class="ls-lang-item ls-lang-dweb"><a class="ls-lang-link" href="/SITEVI-Espagnol"><span style="border-bottom: 1px dotted;">ES</span></a></li>');
var fouettemoi = false;
if((window.location.href.indexOf("Espagnol") > -1) && !fouettemoi) {
       $('div.lang-switcher.js-lang-switcher > button:first-child').html('ES');
       $('li.ls-lang-item.ls-lang-fr.is-active').removeClass('is-active');
       $('li.ls-lang-dweb').addClass('is-active');
       $('.ls-lang-fr > a').attr("href", "/")
       fouettemoi = true;
}
});