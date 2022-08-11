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

            <!-- Slider -->
            <div id="menu-slider">
                <div id="menu-slider-container">
                    <div class="slider-bg bg-black"></div> <!-- Slider Background -->
                    <div id="menu-slider-bar" class="slider-bar color-bar animate-bar"></div> <!-- Slider Bar -->
                    <div id="menu-slider-pointer" class="slider-pointer color-pointer"></div> <!-- Slider Pointer -->
                </div>
            </div>
            <!-- End Slider -->

        </div>
    </div>
    <!-- End Header -->

</template>

<script>
export default {
    name:'showTabbar',
    data() {
        return {
        }
    },
}

</script>

<style lang='css' scoped> 


</style>
