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
/* HEADER
============================== */
/* Base */
#header {
    background: url('~@/assets/images/bg-header.png') repeat-x;
    position: absolute;
    left: 0;
    width: 100%;
    -webkit-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.70);
        -moz-box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.70);
            box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.70);
}
#header-inner {
    height: 100px;
    width: 544px;
    margin: 0 auto;
}

/* Menu */
#menu li {
    float: left;
    padding: 15px 18px 0 18px;
    position: relative;
    width: 100px;
    height: 45px;
}
#menu li div.menu-icon {
    display: block;
    width: 100px;
    height: 45px;
    background-image:url('~@/assets/images/bg-menu.png');
    background-repeat: no-repeat;
    text-indent: -2000%;
    cursor: pointer;
}
#menu li a.menu-hover {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    width: 100px;
    height: 45px;
    line-height: 45px;
    font-size: 14px;
    font-weight: bold;
    text-shadow: 0 1px 0px rgba(0, 0, 0, 0.75);
    color: #dcdcdc;
}
div#menu-intro {
    background-position: 0 top;
}
div#menu-about {
    background-position: -100px top;
}
div#menu-resume {
    background-position: -200px top;
}
div#menu-portfolio {
    background-position: -300px top;
}
div#menu-contact {
    background-position: -400px top;
}
div#menu-intro.menu-active {
    background-position: 0 bottom;
}
div#menu-about.menu-active {
    background-position: -100px bottom;
}
div#menu-resume.menu-active {
    background-position: -200px bottom;
}
div#menu-portfolio.menu-active {
    background-position: -300px bottom;
}
div#menu-contact.menu-active {
    background-position: -400px bottom;
}



</style>
