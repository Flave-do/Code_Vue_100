<template>
    <!-- Portfolio -->
    <div id="portfolio" class="content-list" ref="portfoliobox">
        <!-- Portfolio Filter -->
        <div id="portfolio-filter-container">
            <ul id="portfolio-filter">
                <li v-for="(datas,dataid) in dataFilterList" :key="dataid">
                    <a href="#" 
                        :data-filter="datas.datasFilter" 
                        @click.prevent="changeFilter(datas.dataFilter)"
                        :class="{current:datas.dataFilter == dataFilter}" 
                    >
                    {{datas.title}}</a>
                </li>
            </ul>
        </div>
        <!-- End Portfolio Filter -->

        <!-- Portfolio Lists -->
        <ul id="portfolio-list" class="isotope" :style="portfolioListStyle">
            <transition-group name="list" tag="p" appear>
                <li class="isotope-item " 
                    v-for="(imgs,imgId) in dataFilterRom(imgDemo)" 
                    :key="imgId"
                    :style="liItemStyle(imgId)"
                    :class="imgs.imgClass"
                >
                    <CoolLightBox
                        :items="imgs.items" 
                        :index="index[imgId].index"
                        :fullScreen="true"
                        @close="index[imgId].index = null">
                    </CoolLightBox>
                    <div class="img_wrapper" :style="imgWrapperStyle">
                        <div class="image"
                            v-for="(image,imageIndex) in imgs.items"
                            :key="imageIndex"
                            @click="index[imgId].index = imageIndex"
                            >
                            <img :src="require('../assets/images/portfolio/'+imgs.imgSrc)" alt="" :style="imgSrcStyle"/>
                        </div>
                    </div>
                </li>
            </transition-group>
        </ul>
        <!-- End Portfolio Lists -->

    </div>
    <!-- End Portfolio -->

</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import 'animate.css'
export default {
    name:'demoPortfolio',
    components: {CoolLightBox,},
    data() {
        return {
            dataFilter:'*',
            index:[
                {index:'null',},
                {index:'null',},
                {index:'null',},
                {index:'null',},
                {index:'null',},
                {index:'null',},
                {index:'null',},
                {index:'null',},
            ],
            dataFilterList:[
                {id:'0','dataFilter':'*',title:'所有'},
                {id:'1','dataFilter':'animation',title:'项目一'},
                {id:'2','dataFilter':'photography',title:'项目二'},
                {id:'3','dataFilter':'webdesign',title:'项目三'},
                {id:'4','dataFilter':'printdesign',title:'项目四'},
            ],
            imgDemo:[
                {id:'0',imgClass:'photography',title:'photography',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview1.jpg'),
                            thumb:require('../assets/images/portfolio/preview2.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                        {
                            src:require('../assets/images/portfolio/preview2.png'),
                            thumb:require('../assets/images/portfolio/preview3.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'1',imgClass:'animation',title:'animation',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview2.png'),
                            thumb:require('../assets/images/portfolio/preview3.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                        {
                            src:require('../assets/images/portfolio/preview4.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'2',imgClass:'animation',title:'animation',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'3',imgClass:'printdesign',title:'photography',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'4',imgClass:'animation',title:'animation',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'5',imgClass:'animation',title:'animation',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'6',imgClass:'webdesign',title:'webdesign',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
                {id:'7',imgClass:'printdesign',title:'photography',grayscaleSrc:'FishC.png',imgSrc:'FishC.png',
                    items:[
                        {
                            src:require('../assets/images/portfolio/preview5.png'),
                            thumb:require('../assets/images/portfolio/preview5.png'),
                            title: 'In nature, nothing is perfect and everything is perfect',
                            description: "Photo by Lucas",
                        },
                    ]
                },
            ],
            // portfolioListStyle:"position: relative; overflow: hidden; height: 480px;",
            imgWrapperStyle:'display: inline-block; width: 145px; height: 145px;',
            portfolioWidth:0,
            imgBoxWidth:155,
            // windowWidth: document.documentElement.clientWidth, // 实时屏幕宽度
            // windowHeight: document.documentElement.clientHeight // 实时屏幕高度
        }
    },
    computed:{
        portfolioListStyle(){
            let heightY = Math.ceil(this.portfolioListHeight*this.imgBoxWidth/this.portfolioWidth)*240
            return "position: relative; overflow: hidden; height: "+heightY+"px;width:"+this.portfolioWidth+"px;"
        },
        portfolioListHeight(){
            let len = 0
            for(var i in this.imgDemo){
                if(this.dataFilter === '*'){
                    len ++
                }else if(this.imgDemo[i].imgClass === this.dataFilter){
                    len ++
                }
            }
            return len
        },
        liItemStyle(){
            return function(pic){
                let rowX = parseInt(this.portfolioWidth/this.imgBoxWidth)
                let marginX = (this.portfolioWidth-rowX*this.imgBoxWidth)/rowX/2
                let boxWidth = (this.imgBoxWidth + marginX*2)
                let lefX = 0
                let topY = 0
                topY = parseInt(pic/rowX)*230
                lefX = boxWidth*(pic%rowX)
                return 'position: absolute; left:'+lefX+'px; top: '+topY+'px;margin:'+marginX+'px;'
            } 
        },
        // imgWrapperStyle(){
        //    // 展示图标框大小
        // }
        imgSrcStyle(){
            // img图标大小
            //position: absolute;left: 5px;top: 5px;
           return ''
        },
        


    },
    methods:{
        changeFilter(filter){
            this.dataFilter = filter
        },
        GetPortfolioWidth(){
            const that = this
            this.$nextTick(() => {
                // var domWidth = this.$refs.container.clientWidth // 宽
                // var domHeight = this.$refs.container.clientHeight // 高
                that.portfolioWidth = that.$refs.portfoliobox.offsetWidth
            })
        },
        dataFilterRom(data){
            let that = this
            return data.filter(obj => {
                if(that.dataFilter === '*'){
                    return obj
                }else{
                   return obj.imgClass === that.dataFilter 
                }
            })
        },

    },

    created(){
        window.addEventListener('resize', this.GetPortfolioWidth); //注册监听器
        this.GetPortfolioWidth() //页面创建时先调用一次
    },
    destroyed(){
    window.removeEventListener('resize', this.GetPortfolioWidth)
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
    /* vertical-align: middle; */
    background-color: #414141;
    *background-color: #222222;
    background-image: -ms-linear-gradient(top, #555555, #222222);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#555555), to(#222222));
    background-image: -webkit-linear-gradient(top, #555555, #222222);
    background-image: -o-linear-gradient(top, #555555, #222222);
    background-image: -moz-linear-gradient(top, #555555, #222222);
    /* background-image: linear-gradient(top, #555555, #222222); */
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
    /* 图标box宽度 */
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
.img_wrapper{
    overflow: hidden
}
.list-enter-active{
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
}
.list-leave-active{
    animation: zoomOut; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
}
</style>
