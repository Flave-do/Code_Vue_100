<template>
    <!-- Slider -->
    <div id="menu-slider">
        <div id="menu-slider-container">
            <div class="slider-bg bg-black"></div> <!-- Slider Background -->
            <div id="menu-slider-bar" class="slider-bar color-bar animate-bar"></div> <!-- Slider Bar -->
            <transition name="pointer" :appear="true">
                <div id="menu-slider-pointer" class="slider-pointer color-pointer" :style="barStyle"></div> <!-- Slider Pointer -->
            </transition>
        </div>
        <button @click="add">按我右移</button>
    </div>
    <!-- End Slider -->
</template>

<script>
export default {
    name:'barType',
    data() {
        return {
            ces:0,
            isShow:true
        }
    },
    methods:{
        add(){
            this.ces = this.ces+33.3
            // this.isShow = !this.isShow
            console.log(this.ces)
        }
    },
    computed:{
        barStyle(){
            return{
                left:this.ces+'%'
            }
        }
    }
}

</script>

<style lang='css' scoped> 
#menu-slider {
    padding-top: 70px;
    width: 408px;
    margin: 0 auto;
}
#menu-slider-container {
    height: 8px;
    margin: 0 auto;
    position: relative;
}

/* Bar */
.slider-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8px;
    z-index: 10;
    -webkit-border-radius: 4px;
        -box-border-radius: 4px;
            border-radius: 4px;
}
.bg-black {
    background: #272829;
    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
        -box-box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
            box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.5), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
}
.bg-grey {
    background: #cecece;
    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(255, 255, 255, 0.9);
        -box-box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(255, 255, 255, 0.9);
            box-shadow: inset 0px 1px 0px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(255, 255, 255, 0.9);
}
.slider-bar {
    position: absolute;
    top: 0;
    left: 0;
    background-repeat: repeat-x;
    background-position: left top;
    width: 0%;
    height: 8px;
    z-index: 11;
    -webkit-border-radius: 4px;
        -box-border-radius: 4px;
            border-radius: 4px;
    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
        -box-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
            box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.75), 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
}
.slider-pointer {
    position: absolute;
    top: -6px;
    left: 0%;
    margin-left: -10px;
    width: 20px;
    height: 21px;
    z-index: 12;
}

/* Bar animation */
/* .pointer-enter-active {
    animation: progress 0.5s linear infinite;
    -moz-animation: progress 0.5s linear infinite;
    -webkit-animation: progress 0.5s linear infinite;
    -ms-animation: progress 0.5s linear infinite;
    -o-animation: progress 0.5s linear infinite;
} */
/*进入的起点,离开的终点*/
.pointer-enter, .pointer-leave-to {
    transform: translateX(0);
}

/*进入的终点,离开的起点*/
.pointer-enter-to, .pointer-leave{
    animation: progress 0.5s linear infinite;
}

#menu-slider {
    padding-top: 70px;
    width: 408px;
    margin: 0 auto;
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

@-webkit-keyframes progress {
  from {
    left: 0;
  }
  to {
    left: 33.3%;
  }
}
@-moz-keyframes progress {
  from {
    left: 0;
  }
  to {
    left: 33.3%;
  }
}
@-ms-keyframes progress {
  from {
    left: 0;
  }
  to {
    left: 33.3%;
  }
}
@-o-keyframes progress {
  from {
    left: 0;
  }
  to {
    left: 33.3%;
  }
}
@keyframes progress {
  from {
    left: 0;
  }
  to {
    left: 33.3%;
  }
}
</style>
