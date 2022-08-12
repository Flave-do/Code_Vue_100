<template>
    <!-- Intro -->
    <div id="intro" class="content-list content-list-active">
        <div class="flexslider">
            <ul class="slides">
                <li style="display:list-item"><img src="~@/assets/images/slideshow/slideshow.png" alt="welcom"/></li>
            </ul>
        </div>

        <div class="full-three separator"></div>

        <div class="one-three">
            <div class="photo-frame">
                <img src="~@/assets/images/photos/sfan.png" alt="Photo of me"/>
            </div>
        </div>
        <div class="two-three">
            <h2>在下,杨舍凡</h2>
            <p>编程5min，吹水2h。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra porta dictum.
                Nullam sem quam, ultrices semper congue eu, placerat ac quam. Pellentesque tempor nisi
                eu turpis feugiat ornare. Nullam risus enim, eleifend non imperdiet vel, fermentum quis
                tellus. Nulla pretium orci nec metus lobortis non convallis sem porta. Praesent
                hendrerit adipiscing mauris vitae sodales. Proin eget risus in velit blandit rhoncus
                imperdiet at mi. Sed eleifend, augue et tincidunt condimentum, massa tellus hendrerit
                odio, vel vehicula leo ligula sed lorem. Quisque adipiscing, enim vel iaculis venenatis,
                velit leo viverra tellus, ac sagittis neque velit in sem. Sed elementum tincidunt velit,
                ac gravida magna aliquam ac. Sed viverra mollis nisl, at ullamcorper mauris condimentum
                vel. Vestibulum nisl mi, lacinia rhoncus congue sit amet, convallis eget quam.
                Vestibulum interdum imperdiet justo laoreet tempor. </p>
        </div>

        <div class="clearfix"></div>
    </div>
    <!-- End Intro -->

</template>

<script>
export default {
    name:'demoIntro',
    data() {
        return {
        }
    },
}

</script>

<style lang='css' scoped> 

.one-three,
.two-three,
.full-three {
	display: inline;
	float: left;
	margin: 0 10px;
}

.full-three {
	width: 760px;
}
.photo-frame {
	background: url('~@/assets/images/frame-front.png') no-repeat center center;
	width: 196px;
	height: 196px;
	padding: 16px 17px 47px 17px;
}
.group-container{
	padding-bottom: 15px;
}
.separator {
	background: url('~@/assets/images/separator.png') no-repeat center center;
	height: 60px;
}

/* Resume */
.resume-group {
	margin-bottom: 15px;
	line-height: 14px;
}
.resume-label {
	font-size: 14px;
	font-family: Helvetica, Arial;
	font-weight: bold;
	color: #373737;
	width: 30%;
	float: left;
}
.resume-info {
	width: 70%;
	float: left;
}
.resume-bar{
	width: 100%;
	margin: 3px 0;
	height: 8px;
	position: relative;
}
.level1 {width: 10%;}
.level2 {width: 20%;}
.level3 {width: 30%;}
.level4 {width: 40%;}
.level5 {width: 50%;}
.level6 {width: 60%;}
.level7 {width: 70%;}
.level8 {width: 80%;}
.level9 {width: 90%;}
.level10 {width: 100%;}


</style>
