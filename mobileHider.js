// New Image College Custom Handlers :: depending on screen size, element visibility for logged in users and other such intricacies that need attention that no one cares about but me
// If any changes are made without supervision from the author, be sure to inquire or be thorough so as not to create code conflicts
// Written by: Justin Gaskin

jQuery(window).ready(function() {
	// social footer bar background change on mouse over
	jQuery('.footColBG')
		.mouseover(function(){
			jQuery(this).css('background-color','rgba(78, 169, 222, 0.8)')})
		.mouseout(function(){
			jQuery(this).css('background-color','rgba(128, 128, 128, 0.2)')});
			
// spa menu button openers			
//	jQuery('.spaMenuBTN1').click(function(){
//		jQuery('.spaMenuItem1').slideToggle('slow', 'swing');
//	});	
//	jQuery('.spaMenuBTN2').click(function(){
//		jQuery('.spaMenuItem2').slideToggle('slow', 'swing');
//	});	
//	jQuery('.spaMenuBTN3').click(function(){
//		jQuery('.spaMenuItem3').slideToggle('slow', 'swing');
//	});
	
});

jQuery(document).ready(function() {
	// mobile responsive formatting
	jQuery('.frontNewsGridCopy p').css('color','white !important');
	var screen = jQuery(window);
	var viewportWidth = jQuery(window).width();
	var viewportHeight = jQuery(window).height();
	var thirtyVP = (80 * viewportHeight) / 100;
    // thirtyVP = parseInt(thirtyVP) + 'px'; 
	if (screen.width() < 1024) {
		console.log('screen is mobile');
		jQuery('.mobileShow').show();
		jQuery('.mobileHID').hide();
                jQuery('.titlePanel').css('background-color','rgba(145,169,191,0.5)','!important');
		jQuery('.mobileTitle').css('line-height','3.5rem');
		jQuery('.mobileCopy').css('min-width','145%').css('left','-35%');
		jQuery('.topCopy').css('min-width', '350px');
		jQuery('.topCopy h2').css('font-size', '1.5rem');
		jQuery('.nicFrontBlurbCopy').css('width', '86%').css('left', '7%');
		jQuery('#site-navigation').css('top', '-3rem');
		jQuery('#superfish-menu').css('padding-top', '20px').css('text-align', 'center');
		jQuery('#menu-maintop-1').hide();
		jQuery('.vc_grid-item h4').css('font-size','1rem !important');
		jQuery('#programsScreenCheck').removeClass('homePrograms');
	} else {
		console.log('screen is wide');
		jQuery('.mobileHID').show();
		jQuery('.titlePanel').css('background-color','none !important');
		// jQuery(".responsiveFullHeight").css('height',thirtyVP).css('overflow','hidden');
//		jQuery('.progTop').css('height', viewportHeight);
//		jQuery('.rev_slider').css('height', viewportHeight);
	}
});

jQuery(document).ready(function() {
	// hide featured image in posts
	jQuery('.entry-media-inner').hide();
});

jQuery(document).ready(function() {
	// Course List modifiers
	// Strip the link href from the course title
	jQuery('.course-number a').removeAttr("href").css("cursor","pointer");
	
	// Clicking on these elements will show their contents; css display:none -> display:block
	// Element: Course listing at bottom of pages
	jQuery('.course-name').click(function(){
		// insert course description into course list on program pages via AJAX to prevent superfluous deep-linking
		jQuery(this).children('.entry-content').css('font-size','1.2rem !important').show('slow','swing');
		jQuery(this).parent().closest('img').show('slow','swing');
		// spread link to sibling TD
		// var lnk = jQuery(this).attr('href');
		// jQuery(this).parent().siblings('.course-name').wrapInner('<a href="' + lnk + '"/>');
	});	

	// Element: Course listing at bottom of pages
	jQuery('.adminfaqRowB').click(function(){
		// insert course description into course list on program pages via AJAX to prevent superfluous deep-linking
		jQuery(this).closest('.adminfaqRowHidden').css('font-size','1.2rem !important').show('slow','swing');
	});	
	
	// news slider function to view posts that are hidden to the right
	var newsWidth = jQuery('.newsRowFullLength').width();
	jQuery('.newsBLeft').hover(function() {
        jQuery(this).css('cursor','pointer');
	});
	jQuery('.fa-arrow-circle-o-left').on('click', '.newsRowFullLength', function(){
		jQuery(this).animate({ "left": "newsWidth"}, "slow");
	jQuery('.fa-arrow-circle-o-right').on('click', '.newsRowFullLength', function(){
		jQuery(this).animate({ "right": newsWidth }, "slow");
	});
	});

});

