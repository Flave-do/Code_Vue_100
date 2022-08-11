<template>
    <!-- Portfolio -->
    <div id="portfolio" class="content-list">
        <!-- Portfolio Filter -->
        <div id="portfolio-filter-container">
            <ul id="portfolio-filter">
                <li><a href="#" class="current" data-filter="*">所有</a></li>
                <li><a href="#" data-filter=".animation">项目一</a></li>
                <li><a href="#" data-filter=".photography">项目二</a></li>
                <li><a href="#" data-filter=".webdesign">项目三</a></li>
                <li><a href="#" data-filter=".printdesign">项目四</a></li>
            </ul>
        </div>
        <!-- End Portfolio Filter -->

        <!-- Portfolio Lists -->
        <ul id="portfolio-list">
            <li class="photography">
                <a href="img/portfolio/preview1.jpg" rel="lightbox[portfolio]" title="Photography">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="animation">
                <a href="img/portfolio/preview2.jpg" rel="lightbox[portfolio]" title="Animation">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="animation">
                <a href="img/portfolio/preview3.jpg" rel="lightbox[portfolio]" title="Animation">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="printdesign">
                <a href="img/portfolio/preview4.jpg" rel="lightbox[portfolio]" title="Print Design">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="animation">
                <a href="img/portfolio/preview5.jpg" rel="lightbox[portfolio]" title="Animation">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="animation">
                <a href="img/portfolio/preview6.jpg" rel="lightbox[portfolio]" title="Animation">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="webdesign">
                <a href="img/portfolio/preview7.jpg" rel="lightbox[portfolio]" title="Web Design">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
            <li class="printdesign">
                <a href="img/portfolio/preview8.jpg" rel="lightbox[portfolio]" title="Print Design">
                    <img src="img/portfolio/FishC.png" alt=""/>
                </a>
            </li>
        </ul>
        <!-- End Portfolio Lists -->

    </div>
    <!-- End Portfolio -->

</template>

<script>
export default {
    name:'demoPortfolio',
    data() {
        return {
        }
    },
}

</script>

<style lang='css' scoped> 


</style>
