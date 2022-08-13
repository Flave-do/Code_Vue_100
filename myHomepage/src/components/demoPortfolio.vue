<template>
    <!-- Portfolio -->
    <div id="portfolio" class="content-list">
        <!-- Portfolio Filter -->
        <div id="portfolio-filter-container">
            <ul id="portfolio-filter">
                <li v-for="(datas,dataid) in dataFilterList" :key="dataid">
                    <a href="#" 
                        :data-filter="datas.datasFilter" 
                        @click="changeFilter(datas.dataFilter)"
                        :class="{current:datas.dataFilter == dataFilter}" 
                    >
                    {{datas.title}}</a>
                </li>
            </ul>
        </div>
        <!-- End Portfolio Filter -->

        <!-- Portfolio Lists -->
        <ul id="portfolio-list" class="isotope" style="position: relative; overflow: hidden; height: 480px;">
                <li class="photography isotope-item" 
                    :style="liItemStyle"
                    v-for="(imgs,imgid) in imgDemo" 
                    :key="imgid"
                >
                    <a :href="imgs.aHref" rel="lightbox[portfolio]" :title="imgs.title">
                        <div class="img_wrapper" :style="imgWrapperStyle(imgid)">
                            <img class="img_grayscale" :src="imgs.grayscalesrc" alt="" :style="imgGrayscaleStyle(imgid)"/>
                            <img :src="imgs.imgSrc" alt="" :style="imgSrcStyle(imgid)"/>
                        </div>
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
            dataFilter:'*',
            dataFilterList:[
                {id:'0','dataFilter':'*',title:'所有'},
                {id:'1','dataFilter':'animation',title:'项目一'},
                {id:'2','dataFilter':'photography',title:'项目二'},
                {id:'3','dataFilter':'webdesign',title:'项目三'},
                {id:'4','dataFilter':'printdesign',title:'项目四'},
            ],
            imgDemo:[
                {id:'0',imgClass:'photography isotope-item',title:'photography',aHref:'~@/assets/images/portfolio/preview1.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'1',imgClass:'animation isotope-item',title:'animation',aHref:'~@/assets/images/portfolio/preview2.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'2',imgClass:'animation isotope-item',title:'animation',aHref:'~@/assets/images/portfolio/preview3.jpg',grayscale:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'3',imgClass:'printdesign isotope-item',title:'photography',aHref:'~@/assets/images/portfolio/preview4.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'4',imgClass:'animation isotope-item',title:'animation',aHref:'~@/assets/images/portfolio/preview5.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'5',imgClass:'animation isotope-item',title:'animation',aHref:'~@/assets/images/portfolio/preview6.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'6',imgClass:'webdesign isotope-item',title:'webdesign',aHref:'~@/assets/images/portfolio/preview7.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
                {id:'7',imgClass:'printdesign isotope-item',title:'photography',aHref:'~@/assets/images/portfolio/preview8.jpg',grayscalesrc:'~@/assets/images/portfolio/FishC.png',imgSrc:'~@/assets/images/portfolio/FishC.png'},
            ],
            liItemStyle:'position: absolute; left: 0px; top: 0px; transform: translate(0px);',
            // imgWrapperStyle:'display: inline-block; width: 145px; height: 145px;',
            // imgGrayscaleStyle:'opacity: 0; position: absolute; left: 5px; top: 5px; z-index: 998;',
            // imgSrcStyle:'position: absolute; left: 5px; top: 5px;',
        }
    },
    computed:{
        imgWrapperStyle(){
            return function(pic){
                console.log(pic,'imgWrapperStyle')
                return 'display: inline-block; width: 145px; height: 145px;'
            } 
        },
        imgGrayscaleStyle(){
            return function(pic){
                console.log(pic,'imgGrayscaleStyle')
                return 'opacity: 0; position: absolute; left: 5px; top: 5px; z-index: 998;'
            } 
        },
        imgSrcStyle(){
            return function(pic){
                console.log(pic,'imgSrcStyle')
                return 'position: absolute; left: 5px; top: 5px;'
            } 
        }
    },
    methods:{
        changeFilter(num){
            this.dataFilter = num
        }
    }
}

</script>

<style lang='css' scoped> 
.clearfix,
.content-list {
  zoom: 1;
}

/* Portfolio */
#portfolio-filter-container {
    text-align: center;
    margin-bottom: 30px;
}
#portfolio-filter {
    text-align: center
}
#portfolio-filter li {
    display: inline-block;
    margin: 0 5px 10px 5px;
    line-height: 30px;
}
#portfolio-filter li a {
    display: block;
    padding: 0 10px;
    color: #FFFFFF;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    background-color: #414141;
    *background-color: #222222;
    background-image: -ms-linear-gradient(top, #555555, #222222);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#555555), to(#222222));
    background-image: -webkit-linear-gradient(top, #555555, #222222);
    background-image: -o-linear-gradient(top, #555555, #222222);
    background-image: -moz-linear-gradient(top, #555555, #222222);
    background-image: linear-gradient(top, #555555, #222222);
    background-repeat: repeat-x;
    border-color: #222222 #222222 #000000;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:dximagetransform.microsoft.gradient(startColorstr='#555555', endColorstr='#222222', GradientType=0);
    filter: progid:dximagetransform.microsoft.gradient(enabled=false);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    -webkit-border-radius: 4px;
       -box-border-radius: 4px;
            border-radius: 4px;
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 0px rgba(255, 255, 255, 0.9);
       -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 0px rgba(255, 255, 255, 0.9);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 0px rgba(255, 255, 255, 0.9);
}
#portfolio-filter li a:hover {
    color: #ffffff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #222222;
    *background-color: #151515;

    background-position: 0 -15px;
    -webkit-transition: background-position 0.1s linear;
       -moz-transition: background-position 0.1s linear;
        -ms-transition: background-position 0.1s linear;
         -o-transition: background-position 0.1s linear;
            transition: background-position 0.1s linear;
}
#portfolio-filter li a.current {
    background-image: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15) inset, 0 1px 2px rgba(0, 0, 0, 0.05);
    outline: 0 none;
    background-color: #111111;
    color: rgba(255, 255, 255, 0.75);
}
#portfolio-list {
    display: inline-block;
    text-align: center;
    width: 780px;
}
#portfolio-list li {
    width: 155px;
    height: 200px;
    /* margin: 0 20px 40px; */
    background: #fff;
    float: left;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
       -box-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
#portfolio-list li a {
    margin: 5px;
    display: block;
}

/* Isotope CSS3 transitions */

.isotope,
.isotope .isotope-item {
  -webkit-transition-duration: 0.8s;
     -moz-transition-duration: 0.8s;
      -ms-transition-duration: 0.8s;
       -o-transition-duration: 0.8s;
          transition-duration: 0.8s;
}

.isotope {
  -webkit-transition-property: height, width;
     -moz-transition-property: height, width;
      -ms-transition-property: height, width;
       -o-transition-property: height, width;
          transition-property: height, width;
}

.isotope .isotope-item {
  -webkit-transition-property: -webkit-transform, opacity;
     -moz-transition-property:    -moz-transform, opacity;
      -ms-transition-property:     -ms-transform, opacity;
       -o-transition-property:         top, left, opacity;
          transition-property:         transform, opacity;
}

/* disabling Isotope CSS3 transitions */
.isotope.no-transition,
.isotope.no-transition .isotope-item,
.isotope .isotope-item.no-transition {
  -webkit-transition-duration: 0s;
     -moz-transition-duration: 0s;
      -ms-transition-duration: 0s;
       -o-transition-duration: 0s;
          transition-duration: 0s;
}

</style>
