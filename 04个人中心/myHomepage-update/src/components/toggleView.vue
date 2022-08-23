<template>
<!-- Content -->
    <div id="content" class="inner">
        <!-- Title -->
        <transition-group tag="p" class="tabs" name="tabs">
            <h1 v-show="showTab('Intro')" key="1">主页</h1>
            <h1 v-show="demoTab==='Resume'" key="2">履历</h1>
            <h1 v-show="demoTab==='Portfolio' " key="3">作品</h1>
            <h1 v-show="demoTab==='Contact'" key="4">联系</h1>
        </transition-group>
        <!-- End Title -->
        <div id="content-wrapper">
            <div id="content-header"></div> <!-- Content Header -->
            <div id="content-core-wrapper" ref="contentCore" style="height:auto;">
                <div id="content-core" :class="isShowClass">
                    <demoIntro v-if="demoTab==='Intro'" key="1"/>
                    <demoResume v-if="demoTab==='Resume'" key="2"/>
                    <demoPortfolio v-if="demoTab==='Portfolio'" key="3"/>
                    <demoContact v-if="demoTab==='Contact'" key="4"/>
                </div>

            </div>
            <div id="content-footer"></div> <!-- Content Footer -->
        </div>

        <!-- Social Media -->
        <div id="socmed">
            <ul id="socmed-list">
                <li><a href="#" target="_parent" style="opacity: 0.7;"><img src="~@/assets/images/social/facebook.png" alt="Facebook"/></a></li>
                <li><a href="#" target="_parent" style="opacity: 0.7;"><img src="~@/assets/images/social/twitter.png" alt="Twitter"/></a></li>
                <li><a @click.prevent="showWeChat" href="" target="_blank" style="opacity: 0.7;"><img src="~@/assets/images/social/weixin.png" alt="WeChat"/></a></li>
            </ul>
        </div>

        <div class="callMe" v-show="showCallMe">
            <img src="../assets/images/CallMe/MyWeChat.png" alt="">
        </div>

    </div>
</template>

<script>
import demoIntro from './toggleItem/demoIntro.vue'
import demoResume from './toggleItem/demoResume.vue'
import demoPortfolio from './toggleItem/demoPortfolio'
import demoContact from './toggleItem/demoContact'
import 'animate.css'
export default {
    name: 'toggleView',
    components: {
        demoIntro,demoResume,demoPortfolio,demoContact
    },
    data() {
        return {
            demoTab:'Intro',
            isShowClass:'content-core-enter',
            showCallMe:0,
        }
    },
    computed:{

    },
    methods:{
        tabCut(item){
            const that = this
            this.isShowClass = 'content-core-leave'
            this.demoTab = ''
            window.setTimeout(function(){
                that.demoTab = item.title
                that.isShowClass = 'content-core-enter'
            },500);
            window.clearTimeout()
        },
        showTab(tab){
            if(this.demoTab===tab){
                return true
            }
        },
        showWeChat(){
            this.showCallMe = !this.showCallMe
        }
    },
    mounted(){
        this.$bus.$on('tabCut',this.tabCut)
    },

}

</script>

<style lang='css' scoped> 
h1{
    position: relative;
}
#content .tabs{
    height: 100px;
}
#content {
    padding-top: 120px;
    padding-bottom: 100px;
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.75);
}
/* Inner container */
.inner {
    margin: 0 auto;
}

#content-wrapper {
    position: relative;
    margin-bottom: 30px
}
#content-header {
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background:url('~@/assets/images/bg-content-header.png') repeat-x left top;
    -webkit-border-radius: 4px 4px 0 0;
        -box-border-radius: 4px 4px 0 0;
            border-radius: 4px 4px 0 0;
    -webkit-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.13), 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
        -box-box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.13), 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
            box-shadow: inset 0px 1px 0px 0px rgba(255, 255, 255, 0.13), 0px 1px 1px 0px rgba(0, 0, 0, 0.30);
}
#content-core-wrapper {
    padding: 50px 0 30px 0;
}
#content-core {
    padding: 20px 10px 10px 10px;
    background: #f0f0f0 url('~@/assets/images/bg-content-effect.png') repeat-x left top;
    -webkit-box-shadow: 0px 30px 10px 0px rgba(0, 0, 0, 0.70);
       -box-box-shadow: 0px 30px 10px 0px rgba(0, 0, 0, 0.70);
            box-shadow: 0px 30px 10px 0px rgba(0, 0, 0, 0.70);

    overflow: hidden;
    /* transition: height 0.5s ease-in-out; */
    
}

.content-core-enter {
    animation: contentCoreEnter 1s ease-in-out;
}
.content-core-leave{
    animation: contentCoreLeave 0.5s ease-in-out;
}
@keyframes contentCoreEnter{
    0%{
        height:0px;
    }
    
    100%{
        height:500px;
    }
}

@keyframes contentCoreLeave{
    0%{
        height:500px;
    }
    
    100%{
        height:0px;
    }
}

#content-footer {
    width: 100%;
    height: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background:url('~@/assets/images/bg-content-footer.png') repeat-x left top;
}
.one-three,
.two-three,
.full-three {
    display: inline;
    float: left;
    margin: 0 10px;
}

/* Social Media */
#socmed {
	text-align: center;
}
#socmed li {
	position: relative;
	display: inline-block;
	margin: 0 2px;
}

/* .tabs-enter{
    transition: none 1s;
} */
/* .tabs-enter-active{
    animation: fadeIn; 
    animation-duration: 2s; 
} */
.tabs-leave-active{
    animation: fadeOut;
    animation-duration: 0.5s; 
}

.callMe{
    position: relative;
    top: -600px;
    left: 101px;
}
</style>
