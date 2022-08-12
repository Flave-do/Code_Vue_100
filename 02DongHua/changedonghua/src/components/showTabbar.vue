<template>
    <!-- Header -->
    <div id="header">
        <div id="header-inner" class="inner">
            <ul id="menu">
                <li class="menu-list">
                    <div id="menu-intro" class="menu-icon menu-active">Intro</div>
                    <a href="#" class="menu-hover">Intro</a></li>
                <li class="menu-list menu-click">
                    <div id="menu-resume" class="menu-icon">Intro</div>
                    <a href="#" class="menu-hover">Resume</a></li>
                <li class="menu-list menu-click">
                    <div id="menu-portfolio" class="menu-icon">Intro</div>
                    <a href="#" class="menu-hover">Portfolio</a></li>
                <li class="menu-list menu-click">
                    <div id="menu-contact" class="menu-icon">Intro</div>
                    <a href="#" class="menu-hover">Contact</a></li>
            </ul>

            <barType/>

        </div>
    </div>
    <!-- End Header -->

</template>

<script>
import barType from './barType.vue';
export default {
    name: "showTabbar",
    data() {
        return {
            Classification: "1"
        };
    },
    components: { barType }
}

</script>

<style lang='css' scoped> 

</style>
