<template>
    <!-- Contact -->
    <div id="contact" class="content-list content-contact">

        <div class="full-three separator"></div>

        <div class="two-three">
            <h2>欢迎联系</h2>
            <form id="contact-form" method="POST" action="contact.php"/>
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
            <form action=""></form>

        </div>
        <div class="one-three">
            <h2>联系方式</h2>
            <h3>Address</h3>
            <p>鱼C园区，Web大楼，2栋33号</p>
            <h3>Phone</h3>
            <p>+86 130 5502 6503</p>
            <h3>Email</h3>
            <p>308726757@qq.com</p>
            <h3>主页</h3>
            <p>www.sfan.com</p>
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

</style>
