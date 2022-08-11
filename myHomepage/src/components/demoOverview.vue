<template>
<!-- Content -->
    <div id="content" class="inner">
        <!-- Title -->
        <h1 class="title-active">主页</h1>
        <h1>履历</h1>
        <h1>作品</h1>
        <h1>联系</h1>
        <!-- End Title -->
        <div id="content-wrapper">
            <div id="content-header"></div> <!-- Content Header -->
            <div id="content-core-wrapper">
                <div id="content-core">
                    <demoIntro/>
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


</style>
