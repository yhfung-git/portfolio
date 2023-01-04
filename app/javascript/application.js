// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

//capture scroll any percentage
$(window).scroll(function(){
var wintop = $(window).scrollTo(), docheight =

    $(document).height(), winheight = $(window).height();
 			var scrolled = (wintop/(docheight-winheight))*100;

  		$('.scroll-line').scss('width', (scrolled + '%'));
});
