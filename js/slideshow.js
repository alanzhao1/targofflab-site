//Run the slideshow by cycling through the background images
$(function () {
	var imgArr = new Array (
		// Relative paths of images, make sure to start with .. !
		// Also make sure to update whenever images are added
		'image/slide/img1.jpg',
		'image/slide/img2.jpg',
		'image/slide/img3.jpg',
		'image/slide/img4.jpg',
		'image/slide/img5.jpg'
	);
	
	var preloadArr = new Array();
	var i;
	
	// Preload the images
	for(i=0; i<imgArr.length;i++){
		preloadArr[i] = new Image();
		preloadArr[i].src = imgArr[i];
	}
	
	changeImg(); // Manually call the function so we don't wait 6 seconds for first image to show up
	
	var currImg = 1;	
	var imgTime = 6000; // Time interval between images, default at 6000 ms
	var intID = setInterval(changeImg,imgTime);
	
	// Image rotator function
	function changeImg() {
		$('.fadein').animate({opacity: 0}, 1000, function(){
 			$(this).css('background','url(' + preloadArr[currImg++%preloadArr.length].src +') center no-repeat ');
 			$(this).css('background-size','contain');
 			$(this).css('background-color','#000');
 		}).animate({opacity: 1}, 1000);
	}
	
	
});
