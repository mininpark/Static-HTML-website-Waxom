# waxom

## 1. HTML STRUCTURE

- http-equiv:
    1. `IE=edge`: specifies that IE should run in the highest mode available to that version of IE as opposed to a compatability mode; IE8 can support up to IE8 modes, IE9 can support up to IE9 modes, and so on.
    2. `chrome=1`: specifies that Google Chrome frame should start if the user has it installed

    The `IE=edge` flag is still relevant for IE versions 10 and below. IE11 sets this mode as the default.

- description
- author
- viewport
- keywords

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/> 
<meta name="description" content="Waxom free psd template"/>
<meta name="author" content="Mina"/>
<meta name="robots" content="index, follow"/>
<meta name="keywords" content="waxom, web, app, design, responsive"/> <!--site search keywords in web -->
<meta name="viewport" content="width=device-width, inintial-scale=1"/>
```

- Web font as an script load

```html
<!--webfont script load is a bit faster: montserrat, raleway-->
	<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
	<script>
  	WebFont.load({
    google: {
      families: ['Montserrat:300,400,700', 'Raleway:300,400,500,700,800']
    }
  	});
	</script>
```

- Cycle 2 for Idea_Slides
- Bootstrap
- Bxslider & Slidedown JQUERY Function

```html
<!--Bxslider & SLIDE DOWN QUERY-->
		<script src="https://cdn.jsdelivr.net/bxslider/4.2.12/jquery.bxslider.min.js"></script>
	<script>
		$(document).ready(function(){
		  $('.post_list').bxSlider({
			minSlides : 1, maxSlides:3, moveSlides: 1, slideWidth: 370, slideMargin: 30,
			pager:false,
			controls: true,
		  });
		});
//slidedown Function
		$(document).ready(function(){
		  $(".toggle").click(function(){
		$(".navbar_main").slideToggle();
	  });
	  //
	  $(window).resize(function(){
		  if($(window).width() > 768){
			  //true to do
			  $(".navbar_main").show();
		  }
		  else {
			  //false to do
			  $(".navbar_main").hide();
		  }
	  });
	  
	});
	</script>
```

- CSS Stylesheet has to come at last for having a higher priority

```html
<link rel="stylesheet" href="css/default.css"/>
```

- body
    - header
    - main - section
- footer

## 2. CSS STRUCTURE

- common css properties import

```css
@import url(common.css);
```

### Responsive Typhogrphy

- This direct scaling is clearly **too dramatic** for daily use. We need something more subtle, with minimums and maximums, and more control of the growth rate. That’s where calc() becomes useful. We can combine a base size in more steady units (say 16px) with a smaller viewport-relative adjustment (0.5vw), and let the browser do the math: **calc(16px + 0.5vw)**
- **Viewport Width** (`vw`) – A percentage of the full viewport **width**. `10vw` will resolve to 10% of the current viewport width, or `48px` on a phone that is `480px` wide. The difference between `%` and `vw` is most similar to the difference between `em` and `rem`. A `%` length is relative to local context (containing element) width, while a `vw` length is relative to the full width of the browser window.
- **Viewport Height** (`vh`) – A percentage of the full viewport **height**. `10vh` will resolve to `10%` of the current viewport height.
- By changing the relationship between your base-size and viewport-relative adjustment, you can change how dramatic the growth-rate is. This allows for a more dynamic typographic scale on larger screens, while keeping fonts constrained on a mobile device – no media-queries required. You can also apply this technique to your line-height, allowing you to adjust leading at a different rate than the font-size.

```css
body {
  // font grows 1px for every 100px of viewport width
  font-size: calc(16px + 1vw);
  // leading grows along with font,
  // with an additional 0.1em + 0.5px per 100px of the viewport
  line-height: calc(1.1em + 0.5vw);
}
```

### CSS Animation

[Using CSS animations - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

```css
/*ANIMATION*/
.slider_list li.cycle-slide-active .slide_text * {animation: slideIn 1.5s forwards ease-out;}
.slider_list li .slide_text * {transform: translateY(20%); opacity: 0;}

.slider_list li .slide_text h3{animation-delay: 1.5s;}
.slider_list li .slide_text h2{animation-delay: 1.7s;}
.slider_list li .slide_text p{animation-delay: 1.9s;}
.slider_list li .slide_text a{animation-delay: 2.0s;}
@keyframes slideIn{
    0% {transform: translateY(40%); opacity: 0;}
    100% {transform: translateY(0); opacity: 1;} 
}
```

### Background

- If I want to pick only one element of many things in photo —> background-position

```css
.main_slider p.controls a{
    color: #fff;
    width: 40px; height: 73px;
    margin-top: 50px;
    background: url(../images/sprites.png) no-repeat;
    z-index: 102;
} 

.main_slider p.controls .prev {
    margin-left: 150px;
    background-position: 0 -77px; /*for choosing elements from background*/
}
.main_slider p.controls .next {
    margin-right: 150px;
    background-position: -40px -77px;
}
```

- gradiant

```css
background: linear-gradient(to right, black, #4e3427);
```

- background shorthand

```css
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
When using the **shorthand** property the order of the property values is:
body {
	background: color image_src repeat attachment position; 
}
```

### FILTER CSS

```html
<div class="project_wrap">
				<input type="radio" value="all" id="filter-all" name="filter" checked />
				<label for="filter-all">All</label>

				<input type="radio" value="Web Design" id="filter-web" name="filter"/>
				<label for="filter-web">Web Design</label>
```

```css
/*FILTER CSS {display: block; transition: 1s;} or animation*/
#filter-all:checked ~ .project_img li {animation:fadeIn 0.3s forwards;}
#filter-web:checked ~ .project_img li:not(.web) {animation:fadeOut 0.3s forwards}
#filter-mobile:checked ~ .project_img li:not(.mobile) {animation:fadeOut 0.3s forwards}
#filter-illust:checked ~ .project_img li:not(.illust) {animation:fadeOut 0.3s forwards}
#filter-photo:checked ~ .project_img li:not(.photo) {animation:fadeOut 0.3s forwards}

@keyframes fadeIn {
    from {opacity: 0; width: 0; height: 0; }
    to {opacity: 1; width: 370px; height: auto;}
}

@keyframes fadeOut {
    from { opacity: 1; transform: scale(1);}
    to { opacity: 0; transform: scale(0);}
}
```

### VIDEO Overlay

```html
<section class="video">
			<div class="contents">
				<!--ID: overlay-->
				<a href="#overlay" class="icon"><i class="fas fa-play-circle"></i></a>
				<h3 class="main_tt">Waxom Video Presentation</h3>
				<p class="sub_tt">Investigationes demonstraverunt lectores legre me lius quad li legunt seaplus. Claritas est eiam processus dynamicus. Qui sequiur mutationem consuetudium.</p>
				<span class="timeline_video">03:26</span>
			</div>
			<div id="overlay">
				<div class="inner">
					<iframe width="560" height="315" src="https://www.youtube.com/embed/NXD-WJYtkyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>					
					<a href="" class="close">X</a>
				</div>
			</div>
```

```css
#overlay {
    position: fixed; left: 50%; right:0; top:50%; bottom:0; 
    background: rgba (0,0,0,0.8); opacity: 0; transition: 0.5s;
    pointer-events: none;
}
#overlay .inner {position:absolute; left: 50; top: 50; transform: translate(-50%, -50%)}
#overlay .inner .close {position:absolute; width: 2rem; height: 2rem; left: 50; top: 50; transform: translate(-50%, -50%);
background: #fff; color: #000; font-size: 1rem; border-radius: 50%; top: -1rem; right: -1rem; line-height:2rem;}
#overlay:target {opacity: 1;  pointer-events: auto;}
```

### MEDIA QUERY

- max-width: 768px
- max-width: 480px

```css
@media screen and (max-width: 480px) {}
```