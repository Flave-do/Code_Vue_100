<template>
    <!-- Contact -->
    <div id="contact" class="content-list content-contact">

        <div class="full-three separator"></div>

        <div class="two-three">
            <h2>欢迎联系</h2>
            <!-- <form id="contact-form" method="POST" action="contact.php">
                <div class="form-component">
                    <h3>Name</h3>
                    <input type="text" class="input textfield" name="name"/>
                </div>

                <div class="form-component">
                    <h3>Email</h3>
                    <input type="text" class="input textfield" name="email"/>
                </div>

                <div class="form-component">
                    <h3>Message</h3>
                    <textarea class="input textarea" name="message"></textarea>
                </div>

                <input type="submit" class="btn" value="撩一下"/>
            </form> -->
                <div class="form-component">
                    <h3>Name</h3>
                    <input type="text" class="input textfield" name="name"/>
                </div>

                <div class="form-component">
                    <h3>Email</h3>
                    <input type="text" class="input textfield" name="email"/>
                </div>

                <div class="form-component">
                    <h3>Message</h3>
                    <textarea class="input textarea" name="message"></textarea>
                </div>

                <input class="btn" value="撩一下" @click="showOf"/>

        </div>
        <div class="one-three">
            <h2>联系方式</h2>
            <h3>Address</h3>
            <p>湖南省长沙市,</p>
            <h3>Phone</h3>
            <p>+86 130 5502 6503</p>
            <h3>Email</h3>
            <p>308726757@qq.com</p>
            <h3>主页</h3>
            <p>www.yydysf.com</p>
        </div>

        <div class="clearfix"></div>
    </div>
    <!-- End Contact -->

</template>

<script>
export default {
    name:'demoContact',
    data() {
        return {
        }
    },
    methods:{
        showOf(){
            alert('联系请来电,该功能还在实现中,敬请期待~')
        }
    }
}

</script>

<style lang='css' scoped> 
.one-three,
.two-three,
.full-three {
	display: inline;
	float: left;
	margin: 0 10px;
}

.photo-frame {
	background: url("~@/assets/images/frame-front.png") no-repeat center center;
	width: 196px;
	height: 196px;
	padding: 16px 17px 47px 17px;
}
.group-container{
	padding-bottom: 15px;
}
.separator {
	background: url("~@/assets/images/separator.png") no-repeat center center;
	height: 60px;
}
.input {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    background-color: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 3px 3px 3px 3px;
    color: #575757;
    display: block;
    margin-bottom: 5px;
    padding: 4px;
    -webkit-box-shadow: inset 0px 10px 10px 0px rgba(240, 240, 240, 0.75), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
        -box-box-shadow: inset 0px 10px 10px 0px rgba(240, 240, 240, 0.75), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
            box-shadow: inset 0px 10px 10px 0px rgba(240, 240, 240, 0.75), 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
}
.textfield {
    width: 310px;
    height: 26px;
    line-height: 18px;
}
.textarea {
    width: 410px;
    height: 100px;
}
.btn {
    font-family: Helvetica, Arial, sans-serif;
    display: block;
    padding: 5px 10px;
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
.btn:hover {
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

</style>
