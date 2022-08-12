<template>
<!-- Content -->
    <div id="content" class="inner">
        <!-- Title -->
        <h1 class="title-active">主页</h1>
        <h1 style="display:none">履历</h1>
        <h1 style="display:none">作品</h1>
        <h1 style="display:none">联系</h1>
        <!-- End Title -->
        <div id="content-wrapper">
            <div id="content-header"></div> <!-- Content Header -->
            <div id="content-core-wrapper">
                <div id="content-core">
                    <demoIntro v-if="1==2"/>
                    <demoResume/>
                    <demoPortfolio/>
                    <demoContact/>
                </div>
            </div>
            <div id="content-footer"></div> <!-- Content Footer -->
        </div>

        <!-- Social Media -->
        <div id="socmed">
            <ul id="socmed-list">
                <li><a href="http://bbs.fishc.com" target="_blank"><img src="img/social/facebook.png" alt="Facebook"/></a></li>
                <li><a href="http://bbs.fishc.com" target="_blank"><img src="img/social/twitter.png" alt="Twitter"/></a></li>
                <li><a href="http://bbs.fishc.com" target="_blank"><img src="img/social/weixin.png" alt="Skype"/></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import demoIntro from './demoIntro.vue'
import demoResume from './demoResume'
import demoPortfolio from './demoPortfolio'
import demoContact from './demoContact'
export default {
    name: 'demoOverview',
    components: {
        demoIntro,demoResume,demoPortfolio,demoContact
    },
   data() {
       return {
        
       }
   },
}

</script>

<style lang='css' scoped> 
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
.one-three{
    width: 230px;
}
.two-three{
    width: 510px;
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
