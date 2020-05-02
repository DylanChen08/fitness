<template>
    <view class="list_box">
        <view class="left">
            <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
                <view class="item"
                      v-for="(item,index) in leftArray"
                      :key="index"
                      :class="{ 'active':index==leftIndex }"
                      :data-index="index"
                      @tap="leftTap"
                >{{item}}
                </view>
            </scroll-view>
        </view>
        <view class="main" style="">
            -------------------------------------------------
            <swiper class="swiper" :style="{ 'height':scrollHeight }"
                    :current="leftIndex" @change="swiperChange"
                    vertical="true" duration="300">
                <swiper-item v-for="(item,index) in mainArray" :key="index">
                    <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }">
                        <view class="item2">
                            <view class="title">
                                <view>{{item.title}}</view>
                            </view>
                            <view class="goods" v-for="(item2,index2) in item.list" :key="index2" @click="hinter">
                                <img :src="item2.url"
                                     mode="">
                                <view>
                                    <view>{{item2.title}}</view>
                                    <view class="describe">{{item2.describe}}</view>
                                    <view class="money">{{item2.calories}}</view>
                                </view>
                            </view>
                        </view>
                    </scroll-view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                scrollHeight: '500px',
                leftArray: ['健美操', '有氧', '增肌', '减肥', '肉类'],
                mainArray:  [
                    {
                        title: '健美操',
                        list: [{
                            title: '瑜珈健美操',
                            describe: '任教：陈教练  课时：30',
                            url: 'https://avatars3.githubusercontent.com/u/122434?s=460&u=6202deb7a394c25a15b19d420e5ea28914384ec4&v=4',
                            calories: '￥3000'
                        }, {
                            title: '舍宾健美操',
                            describe: '任教：陈教练  课时：40',
                            url: 'https://avatars0.githubusercontent.com/u/14037268?s=460&u=141e9e5c5e86a2cf652ca9a3b0271f06ea0e4488&v=4',
                            calories: '￥4000'
                        }, {
                            title: '卡兰体形操',
                            describe: '任教：陈教练  课时：60',
                            url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                            calories: '￥5000'
                        },],

                    },
                    {
                        title: '有氧',
                        list: [{
                            title: '动感单车',
                            describe: '任教：黄教练  课时：25',
                            url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
                            calories: '2500'
                        }, {
                            title: '有氧慢跑',
                            describe: '任教：林教练  课时：30',
                            url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                            calories: '3000'
                        }, {
                            title: '有氧呼啦圈',
                            describe: '任教：伍雪莹 课时：30',
                            url: 'https://avatars1.githubusercontent.com/u/16515708?s=460&u=1f6da48b5370e0dac72476be4dd37bd965a185a6&v=4',
                            calories: '2500'
                        },],

                    },
                    {
                        title: '增肌',
                        list: [{
                            title: '组合运动',
                            describe: '任教：伍教练 课时：30',
                            url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                            calories: '8000'
                        }, {
                            title: '器械增强集训',
                            describe: '任教：伍教练 课时：50',
                            url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                            calories: '6000'
                        }, {
                            title: '每周三练',
                            describe: '任教：伍教练 课时：80',
                            url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
                            calories: '7800'
                        },],

                    },
                    {
                        title: '减肥',
                        list: [{
                            title: '组合运动',
                            describe: '任教：伍教练 课时：30',
                            url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                            calories: '8000'
                        }, {
                            title: '器械增强集训',
                            describe: '任教：伍教练 课时：50',
                            url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                            calories: '6000'
                        }, {
                            title: '每周三练',
                            describe: '任教：伍教练 课时：80',
                            url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
                            calories: '7800'
                        },],

                    },
                    {
                        title: '保健',
                        list: [{
                            title: '组合运动',
                            describe: '任教：伍教练 课时：30',
                            url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                            calories: '8000'
                        }, {
                            title: '器械增强集训',
                            describe: '任教：伍教练 课时：50',
                            url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                            calories: '6000'
                        }],

                    }

                ],
                leftIndex: 0
            }
        },
        onLoad() {
            /* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
            uni.getSystemInfo({
                success: (res) => {
                    this.scrollHeight = `${res.windowHeight}px`;
                }
            });
        },
        mounted() {
            this.getListData();
        },
        methods: {
            /* 获取列表数据 */
            getListData() {
                new Promise((resolve, reject) => {
					uni.showLoading({
						title: '请稍后',
						mask:true
					});
                    setTimeout(() => {
						const leftArray = ['健美操', '有氧', '增肌', '减肥', '保健']
						const mainArray =  [
							{
								title: '健美操',
								list: [{
									title: '瑜珈健美操',
									describe: '任教：陈教练  课时：30',
									url: 'https://avatars3.githubusercontent.com/u/122434?s=460&u=6202deb7a394c25a15b19d420e5ea28914384ec4&v=4',
									calories: '￥3000'
								}, {
									title: '舍宾健美操',
									describe: '任教：陈教练  课时：40',
									url: 'https://avatars0.githubusercontent.com/u/14037268?s=460&u=141e9e5c5e86a2cf652ca9a3b0271f06ea0e4488&v=4',
									calories: '￥4000'
								}, {
									title: '卡兰体形操',
									describe: '任教：陈教练  课时：60',
									url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
									calories: '￥5000'
								},],

							},
							{
								title: '有氧',
								list: [{
									title: '动感单车',
									describe: '任教：黄教练  课时：25',
									url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
									calories: '2500'
								}, {
									title: '有氧慢跑',
									describe: '任教：林教练  课时：30',
									url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
									calories: '3000'
								}, {
									title: '有氧呼啦圈',
									describe: '任教：伍雪莹 课时：30',
									url: 'https://avatars1.githubusercontent.com/u/16515708?s=460&u=1f6da48b5370e0dac72476be4dd37bd965a185a6&v=4',
									calories: '2500'
								},],

							},
							{
								title: '增肌',
								list: [{
									title: '组合运动',
									describe: '任教：伍教练 课时：30',
									url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
									calories: '8000'
								}, {
									title: '器械增强集训',
									describe: '任教：伍教练 课时：50',
									url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
									calories: '6000'
								}, {
									title: '每周三练',
									describe: '任教：伍教练 课时：80',
									url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
									calories: '7800'
								},],

							},
                            {
                                title: '减肥',
                                list: [{
                                    title: '组合运动',
                                    describe: '任教：伍教练 课时：30',
                                    url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                                    calories: '8000'
                                }, {
                                    title: '器械增强集训',
                                    describe: '任教：伍教练 课时：50',
                                    url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                                    calories: '6000'
                                }, {
                                    title: '每周三练',
                                    describe: '任教：伍教练 课时：80',
                                    url: 'https://avatars2.githubusercontent.com/u/656531?s=180&u=14dd32d36d92e3387c3e5c82459275cff3259b37&v=4',
                                    calories: '7800'
                                },],

                            },
                            {
                                title: '保健',
                                list: [{
                                    title: '组合运动',
                                    describe: '任教：伍教练 课时：30',
                                    url: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
                                    calories: '8000'
                                }, {
                                    title: '器械增强集训',
                                    describe: '任教：伍教练 课时：50',
                                    url: 'https://avatars3.githubusercontent.com/u/7763181?s=180&u=3ac7c4efb29e5de084e0c46bcabaf9ef9025cc10&v=4',
                                    calories: '6000'
                                }],

                            }

						]
						resolve({leftArray,mainArray})
                    }, 1500);
                }).then((res) => {
                    console.log('-----------请求接口返回数据示例-------------');
                    console.log(res);
                    uni.hideLoading();
					const _this = this
					_this.leftArray = res.leftArray
					_this.mainArray = res.mainArray

                });
            },
            /* 左侧导航点击 */
            leftTap(e) {
                console.log(e)
                let index = e.currentTarget.dataset.index;
                this.leftIndex = Number(index);
            },
            /* 轮播图切换 */
            swiperChange(e) {
                let index = e.detail.current;
                this.leftIndex = Number(index);
            },
            hinter(){
                new Promise((resolve,reject)=>{
                    let flag ;
                    uni.showModal({
                        title: '确定预约该项目吗？该操作教练可见',
                        duration: 3000
                    });
                    setTimeout(()=>{
                        flag =2
                        uni.showLoading({
                            title: '请稍后',
                            mask:true,
                            duration: 2000
                        });
                        resolve({flag})
                    },2000)
                }).then(()=>{
                    uni.hideLoading();
                    console.log(1112222)

                    console.log(2221111)
                    setTimeout(()=>{
                        uni.showToast({
                            title: '预约成功',
                            icon:'success',
                            duration: 2000
                        });
                    });
                    setTimeout(()=>{
                        uni.switchTab({
                            url: '../main/main'
                        },1000);
                    },3000);

                });

            }
        }
    }
</script>

<style>
    .list_box {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        font-size: 16px;
    }

    .left {
        background-color: #f6f6f6;
        line-height: 30px;
        box-sizing: border-box;
        font-size: 16px;
    }

    .item {
        padding-left: 20px;
        position: relative;
    }

    .left:not(:first-child) {
        margin-top: 1px;
    }

    .left::after {
        content: '';
        display: block;
        height: 0;
        border-top: #d6d6d6 solid 1px;
        width: 620upx;
        position: absolute;
        top: -1px;
        right: 0;
        transform: scaleY(0.5); /* 1px像素 */
    }

    .item.active,
    .item:active {
        color: #42b983;
        background-color: #fff;
    }

    .main {
        padding-left: .5rem;
        flex-grow: 1;
        box-sizing: border-box;
    }

    .swiper {
        height: 500px;
    }

    .title {
        line-height: 30px;
        font-size: 16px;
        font-weight: bold;
        color: #666;
        background-color: #fff;
        position: sticky;
        top: 0;
        z-index: 999;
    }

    .item2 {
        padding-bottom: 1rem;
    }

    .goods {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
        margin-bottom: 10px;
    }

    .goods > img {
        width: 3.5rem;
        height: 3.5rem;
        margin-right: 16px;
        margin-left: 2px;
    }

    .describe {
        font-size: 14px;
        color: #999;
    }


    .money {
        font-size: 14px;
        color: #efba21;
    }

</style>
