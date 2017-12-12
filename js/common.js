/*
 * 公用js
 * 2017.12.12
 */
/**
 * 点击页面元素后跳转页面的方法，需跳转的url取元素的data-url属性值
 * @param obj
 */
function onClickItem(obj) {
  var location = $(obj).data('url');
  if (location && location != '') {
    window.location.href = location;
  }
}


(function($) {

  $(window).scroll(function() {
    if($(window).scrollTop() > 0){
      $("nav.navbar").addClass("navbar-fixed-top");
    } else {
      $("nav.navbar").removeClass("navbar-fixed-top");
    }
  });

})(jQuery);