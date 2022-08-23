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
                <img src="~@/assets/images/photos/cool.jpg" alt="Photo of me"/>
            </div>
        </div>
        <div class="two-three">
            <h2>在下,杨舍凡</h2>
            <p>我走在鼓楼下面&nbsp;&nbsp;路在堵着<br/>
                雨后的阳光散落&nbsp;&nbsp;人们都出来了<br/>
                执着的迷惘的文艺青年很多<br/>
                如果我无聊了就会来这里坐坐<br/>
                我是个沉默不语的靠着墙壁晒太阳的过客<br/>
                如果我有些倦意了&nbsp;&nbsp;就让我在这里独自醒过<br/>
                我站在鼓楼上面&nbsp;&nbsp;一切繁华与我无关<br/>
                这是个拥挤的地方&nbsp;&nbsp;而我却很平凡<br/>
                我走在鼓楼下面&nbsp;&nbsp;淋湿的咖啡馆<br/>
                睡不着的后海边&nbsp;&nbsp;月亮还在抽着烟<br/>
                喝醉的亲吻着&nbsp;&nbsp;快活的人不眠<br/>
                唯有我倚着围栏&nbsp;&nbsp;对过往说晚安<br/>
                我是个沉默不语的靠着车窗想念你的乘客<br/>
                当107路再次经过&nbsp;&nbsp;时间是带走青春的电车<br/>
                我站在什刹海边一切甜蜜与我无关<br/>
                这是个拥挤的地方&nbsp;&nbsp;而我却很孤单<br/>
            </p>
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


</style>
