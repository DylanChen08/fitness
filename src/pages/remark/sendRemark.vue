<template>
    <view class="remark-container">
        <view class="uni-textarea" style="width: 80%">
            <textarea placeholder-style="color:#666" placeholder="说点什么吧~"/>
        </view>
        <view class="add-img" @click="takePhoto">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxiangji"></use>
            </svg>
        </view>
        <button type="primary" plain="true" @click="Link_to_remark">发布</button>
    </view>
</template>

<script>
    export default {
        name: "sendRemark",
        methods: {
            takePhoto() {
                const ctx = uni.createCameraContext();
                ctx.takePhoto({
                    quality: 'high',
                    success: (res) => {
                        this.src = res.tempImagePath
                    }
                });
            },
            error(e) {
                console.log(e.detail);
            },
            send_to_server(){
                uni.request({
                    url: 'https://127.0.0.1:3000/request', //仅为示例，并非真实接口地址。
                    data: {
                        text: 'uni.request'
                    },
                    header: {
                        'custom-header': 'hello' //自定义请求头信息
                    },
                    success: (res) => {
                        console.log(res.data);
                        this.text = 'request success';
                    }
                });
            },
            Link_to_remark() {
                new Promise((resolve, reject) => {
                    uni.showLoading({
                        title: '请稍后',
                        mask: true,
                        duration: 1000
                    });
                    setTimeout(() => {
                        uni.showToast({
                            title: '发布成功',
                            duration: 2000
                        });
                        resolve()
                    }, 2000);
                }).then((res) => {
                    uni.hideLoading();
                    uni.navigateTo({
                        url: './remark'
                    });
                });
            }

        }
    }
</script>

<style scoped>
    .remark-container {
        background: #ddd;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .add-img {
        width: 3rem;
        height: 3rem;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>