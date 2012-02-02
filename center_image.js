//given a selector, make the specified image always in the center of parent
//especially useful when you want to display a large image in a small parent element.
var CenterImage = function(imageSelector) {
  $(imageSelector)[0].onload = function (){
    var url = $(this).attr("src");
    var backgroundStyle = '#fff url("' + url +  '") no-repeat center';
    var parent = $(this).parent();
    parent.css('background', backgroundStyle);
    parent.height($(this).height());
    parent.css('display', 'block');
    $(this).remove();
  }
}
