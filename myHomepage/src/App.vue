<template>
  <div id="app">
    <showTabbar/>
    <demoOverview/>
    <!-- Footer -->
    <footBottom/>
    <!-- This section is for Splash Screen -->
    <beforeLoaded/>
  </div>
</template>

<script>
import showTabbar from './components/showTabbar'
import demoOverview from './components/demoOverview'
import footBottom from './components/footBottom'
import beforeLoaded from './components/beforeLoaded'

export default {
  name: 'App',
  components: {
    showTabbar,demoOverview,footBottom,beforeLoaded
  }
}
</script>

<style>
/* `XHTML, HTML4, HTML5 Reset
----------------------------------------------------------------------------------------------------*/

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
dialog,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
font,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
hr,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
meter,
nav,
object,
ol,
output,
p,
pre,
progress,
q,
rp,
rt,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video,
xmp {
  border: 0;
  margin: 0;
  padding: 0;
  font-size: 100%;
}

html,
body {
  height: 100%;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
/*
  Override the default (display: inline) for
  browsers that do not recognize HTML5 tags.

  IE8 (and lower) requires a shiv:
  http://ejohn.org/blog/html5-shiv
*/
  display: block;
}

b,
strong {
/*
  Makes browsers agree.
  IE + Opera = font-weight: bold.
  Gecko + WebKit = font-weight: bolder.
*/
  font-weight: bold;
}

img {
  color: transparent;
  font-size: 0;
  vertical-align: middle;
/*
  For IE.
  http://css-tricks.com/ie-fix-bicubic-scaling-for-images
*/
  -ms-interpolation-mode: bicubic;
}

li {
/*
  For IE6 + IE7:

  "display: list-item" keeps bullets from
  disappearing if hasLayout is triggered.
*/
  display: list-item;
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td,
caption {
  font-weight: normal;
  vertical-align: top;
  text-align: left;
}

q {
  quotes: none;
}

q:before,
q:after {
  content: '';
  content: none;
}

sub,
sup,
small {
  font-size: 75%;
}

sub,
sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

svg {
/*
  For IE9. Without, occasionally draws shapes
  outside the boundaries of <svg> rectangle.
*/
  overflow: hidden;
}

body {
	background:url('~@/assets/images/bg.jpg') repeat;
	font-family: Helvetica, Arial, sans-serif;
	font-size: 12px;
	color: #575757;
	overflow-x: hidden;
}
body,
#wrapper {
	position: relative;
	min-height: 100%;
}
a {
	text-decoration: none;
}
h1 {
	font-size: 48px;
	font-weight: bold;
	text-align: center;
	line-height: 100px;
	color: #272829;
	text-shadow: 0px 1px 0px #47484a, 0px -1px 0px #131414;
}
h2 {
	font-size: 24px;
	line-height: 40px;
	color: #373737;
	font-family: 'Muli', Helvetica, Arial;
	font-weight: normal;
	text-shadow: 0px 1px 0px #fff;
	border-bottom: solid 1px #cecece;
	margin-bottom: 15px;
}
h3 {
	font-size: 14px;
	font-family: Helvetica, Arial;
	font-weight: bold;
	color: #373737;
	margin-bottom: 5px;
}
h4 {
	font-size: 12px;
	font-family: Helvetica, Arial;
	font-weight: bold;
	color: #373737;
	line-height: 14px;
}
p {
	margin-bottom: 10px;
	line-height: 18px;
}
/* MEDIA QUERY
============================== */
/* Smaller than standard 960 (devices and browsers) */
@media only screen and (min-width: 768px) and (max-width: 959px) {
	
    /* Preloader setup */
	#preloader-container {
		width: 716px;
	}
	
	/* Inner container width */
	.inner {
		width: 716px;
	}
	
	/* Grid width */
	.one-three,
	.two-three,
	.full-three {
		width: 676px;
		margin-bottom: 10px;
	}
		
	/* Photo frame width */
	.photo-frame {
		margin: 0 auto;
	}
	
	/* Home */
	.flex-direction-nav {
		display: none;
	}
	
	/* Portfolio */
	#portfolio-list {
		width: 716px;
	}
	#portfolio-list li {
		margin: 0 9px 40px;
	}

	/* Contact */
	#gmap {
		width: 656px;
	}
	.form-component {
		padding-bottom: 5px;
		margin-bottom: 5px;
	}	
}

/* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
@media only screen and (min-width: 480px) and (max-width: 767px) {
	
	/* Common */
	body {
		font-size: 11px;
	}
	h1 {
		font-size: 36px;
		line-height: 60px;
	}
	h2 {
		font-size: 18px;
		line-height: 30px;
		margin-bottom: 10px;
	}
	h3 {
		font-size: 12px;
		line-height: 14px;
	}
	
    /* Preloader setup */
	#preloader-container {
		width: 470px;
	}
	#preloader-title {
		width: 100%;
	}
	
	/* Menu */
	#header-inner {
		height: 100px;
		width: 384px;
		margin: 0 auto;
	}
	#menu li {
		width: 96px;
		padding: 15px 0 0 0;
	}
	#menu li div.menu-icon {
		width: 96px;
	}
	#menu-slider {
		width: 288px;
	}
	
	/* Inner container width */
	.inner {
		width: 470px;
	}
	
	/* Grid width */
	.one-three,
	.two-three,
	.full-three {
		width: 450px;
		margin: 0 0 10px 0;
	}
		
	/* Photo frame width */
	.photo-frame {
		margin: 0 auto;
	}
	
	/* Home */
	.flex-direction-nav {
		display: none;
	}
	
	/* Resume */
	.resume-label {
		width: 30%;
		font-size: 12px;
		float: left;
	}
	.resume-info {
		width: 70%;
		float: left;
	}
	
	/* Portfolio */
	#portfolio-list {
		width: 450px;
	}
	#portfolio-list li {
		margin: 0 35px 30px;
	}

	/* Contact */
	#gmap {
		width: 430px;
		height: 200px;
	}
	.form-component {
		padding-bottom: 5px;
		margin-bottom: 5px;
	}	
}


/* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
@media only screen and (max-width: 479px) {
	
	/* Common */
	body {
		font-size: 11px;
	}
	h1 {
		font-size: 36px;
		line-height: 60px;
	}
	h2 {
		font-size: 18px;
		line-height: 30px;
		margin-bottom: 10px;
	}
	h3 {
		font-size: 12px;
		line-height: 14px;
	}
	
    /* Preloader setup */
	#preloader-container {
		width: 300px;
	}
	#preloader-title {
		width: 100%;
		font-size: 11px;
	}
	#preloader-title h1 {
		font-size: 24px;
	}
	#jpreLoader{
		width:300px;
	}
	
	/* Menu */
	#header-inner {
		height: 100px;
		width: 100%;
	}
	#menu li {
		padding: 25px 0 0 0;
		width: 25%;
	}
	#menu li div.menu-icon {
		width: 100%;
	}
	#menu li a.menu-hover {
		top: 25px;
	}
	#menu-slider {
		display: none;
	}
	
	/* Inner container width */
	.inner {
		width: 300px;
	}
	
	/* Grid width */
	.one-three,
	.two-three,
	.full-three {
		width: 280px;
		margin: 0 0 10px 0;
	}
		
	/* Photo frame width */
	.photo-frame {
		margin: 0 auto;
	}
	
	/* Home */
	.flex-direction-nav {
		display: none;
	}
	
	/* Resume */
	.resume-label {
		font-size: 12px;
		float: none;
	}
	.resume-info {
		float: none;
	}
	
	/* Portfolio */
	#portfolio-list {
		width: 280px;
	}
	#portfolio-list li {
		margin: 0 62px 40px 63px;
		background: #fff;
	}

	/* Contact */
	#gmap {
		width: 260px;
		height: 200px;
	}
	.form-component {
		padding-bottom: 5px;
		margin-bottom: 5px;
	}
	.textfield {
		width: 270px;
	}
	.textarea {
		width: 270px;
		height: 100px;
	}
	
}

.clearfix:before,
.clearfix:after,
.content-list:before,
.content-list:after {
  content: '.';
  display: block;
  overflow: hidden;
  visibility: hidden;
  font-size: 0;
  line-height: 0;
  width: 0;
  height: 0;
}

.clearfix:after,
.content-list:after {
  clear: both;
}

</style>
