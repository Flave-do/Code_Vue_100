<template>
    <!-- Footer -->
    <div id="footer">
        <div id="footer-inner" class="inner"> Copyright © FishC.com <a
                href="http://bbs.fishc.com" target="_blank" title="鱼C论坛" style="color: #2ebb96">鱼C论坛</a>
        </div>
    </div>
    <!-- End Footer -->
</template>

<script>
export default {
    name:'footerView',
    data() {
       return {
       }
    },
}

</script>

<style lang='css' scoped> 
#footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;	
    background: #212121;
}
#footer-inner {
    height: 30px;
    color: #888888;
    text-align: center;
    line-height: 30px;
    font-size: 11px;
}
.inner {
	margin: 0 auto;
	width: 800px;
}

</style>
