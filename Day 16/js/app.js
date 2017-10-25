//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>')
var $image = $("<img>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);
//Add overlay
  //2.1 An image
  //2.2 A caption


//1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault()
  var imageLocation = $(this).attr("href");
  
  $image.attr("src", imageLocation);
  
  $overlay.show();
  //1.1 show the overlay.
  //1.2 Update overlay with the image linked in the link
  //1.3 Get child's alt attribute and set caption
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function() {
  $overlay.hide();
});

//3. Wehn overlay is clicked
  //3.1 Hide the overlay