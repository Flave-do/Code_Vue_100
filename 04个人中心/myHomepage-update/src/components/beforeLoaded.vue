<template>
    <div id="preloader-container">
        <div id="preloader">
            <div id="preloader-photo"><img src="../assets/images/photos/sfan.jpg" alt="Photo of me"/></div>
            <div id="preloader-title">
                <h1>welcome</h1>
                小杨 & web Ironbuilder
            </div>
        </div>
        <div id="menu-slider">
            <div id="menu-slider-container">
                <div class="slider-bg bg-black"></div> <!-- Slider Background -->
                    <div id="menu-slider-bar" class="slider-bar color-bar animate-bar" :style="barStyle">
                    </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name:'beforLoaded',
    data() {
        return {
            barLength:0,
            timer:0,
        }
    },
    methods:{
    },
    computed:{
        barStyle(){
            return{
                width:this.barLength+'%'
            }
        },
    },
    mounted(){
        const that = this 
        this.timer = setInterval(() => {
            that.barLength += 1
            if(that.barLength>=100){
                clearInterval (that.timer);
            }
        }, 10);
    }
}

</script>

<style lang='css' scoped> 
/* PRELOADER
============================== */
#preloader-container {
    position: absolute;
    height: 500px;
    width: 960px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
}
#preloader {
    position: relative;
    height: 500px;
    width: 100%;
}
#preloader-title {
    position: absolute;
    height: 90px;
    width: 540px;
    bottom: 42px;
    margin: 0 auto;
    left: 0;
    right: 0;
    z-index: 10;
    font-size: 14px;
    font-weight: bold;
    color: #848484;
    text-align: center;
    text-shadow: none;
    background: url('~@/assets/images/preloader-title.png') center center;
}
#preloader-title h1 {
    line-height: 50px;
    margin-bottom: 29px;
}
#preloader-photo {
    position: absolute;
    height: 196px;
    width: 196px;
    padding: 82px 126px 111px;
    top: -55px;
    left: 50%;
    margin-left: -224px;
    background: url('~@/assets/images/preloader-photo.png') center center;
    z-index: 11;
}

#preloader-photo img {
    width: 196px;
    height: 196px;
}

.slider-bar {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: repeat-x;
    background-position: left top;
    width: 0%;
    height: 14px;
    z-index: 11;
    transition-property: width;
    transition-duration: 0.5s;
    -webkit-border-radius: 10px;
        -box-border-radius: 10px;
            border-radius: 10px;
    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
        -box-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
            box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
}

#menu-slider {
    position: absolute;
    width: 410px;
    margin: 0 auto;
    top: 408px;
    height: 16px;
    left: 284px;
    
}
#menu-slider-container {
    height: 8px;
    margin: 0 auto;
    position: relative;
}

.color-bar{
    background-image: url('~@/assets/images/bar-blue.png');
}
.color-pointer{
    background-image: url('~@/assets/images/pointer-blue.png');
}

/* Bar animation */
.animate-bar {
	animation: progress 0.5s linear infinite;
	-moz-animation: progress 0.5s linear infinite;
	-webkit-animation: progress 0.5s linear infinite;
	-ms-animation: progress 0.5s linear infinite;
	-o-animation: progress 0.5s linear infinite;
}

@-webkit-keyframes progress {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -20px 0;
  }
}
@-moz-keyframes progress {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -20px 0;
  }
}
@-ms-keyframes progress {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -20px 0;
  }
}
@-o-keyframes progress {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -20px 0;
  }
}
@keyframes progress {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -20px 0;
  }
}
</style>
