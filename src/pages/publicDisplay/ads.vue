<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper  class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
                            :duration="duration">
                        <swiper-item v-for="item in adLinks" :key="item.id">
                            <view class="swiper-item uni-bg-red">
                                <img :src="item.url" :width="item.width" :height="item.height" :alt="item.alt">
                            </view>
                        </swiper-item>
<!--                        <swiper-item>-->
<!--                            <view class="swiper-item uni-bg-green">-->
<!--                                <img src="../../static/img/wallhaven-0pzq7m.jpg" width="100%" height="20%" alt="">-->
<!--                            </view>-->
<!--                        </swiper-item>-->
<!--                        <swiper-item>-->
<!--                            <view class="swiper-item uni-bg-blue">-->
<!--                                <img src="../../static/img/wallhaven-0pzq7m.jpg" width="100%" height="20%" alt="">-->
<!--                            </view>-->
<!--                        </swiper-item>-->
                    </swiper>
                </view>
            </view>
        </view>
        <view class="swiper-list">
            <view class="uni-list-cell uni-list-cell-pd">
                <view class="uni-list-cell-db">指示点</view>
                <switch :checked="indicatorDots" @change="changeIndicatorDots"/>
            </view>
            <view class="uni-list-cell uni-list-cell-pd">
                <view class="uni-list-cell-db">自动播放</view>
                <switch :checked="autoplay" @change="changeAutoplay"/>
            </view>
        </view>
        <view class="uni-padding-wrap">
            <view class="uni-common-mt">
                <text>幻灯片切换时长(ms)</text>
                <text class="info">{{duration}}</text>
            </view>
            <slider @change="durationChange" :value="duration" min="500" max="2000"/>
            <view class="uni-common-mt">
                <text>自动播放间隔时长(ms)</text>
                <text class="info">{{interval}}</text>
            </view>
            <slider @change="intervalChange" :value="interval" min="2000" max="10000"/>
        </view>
    </view>
</template>

<script>
    export default {
        name: "ads",
        data() {
            return {
                adLinks: [
                    {
                        id:1,
                        width: '100%',
                        height: '20%',
                        url: 'http://www.swjswang.com/uploads/allimg/161216/8-1612160T510F4.jpg',
                        alt: '广告图1'
                    }, {
                        id:2,
                        width: '100%',
                        height: '20%',
                        url: 'http://www.swjswang.com/uploads/170410/1-1F410232504D5.jpg',
                        alt: '广告图2'
                    }, {
                        id:3,
                        width: '100%',
                        height: '20%',
                        url: 'http://www.swjswang.com/uploads/allimg/170419/7-1F4191G02A36.jpg',
                        alt: '广告图3'
                    },
                ],
                background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500
            }
        },
        methods: {
            changeIndicatorDots(e) {
                this.indicatorDots = !this.indicatorDots
            },
            changeAutoplay(e) {
                this.autoplay = !this.autoplay
            },
            intervalChange(e) {
                this.interval = e.target.value
            },
            durationChange(e) {
                console.log("e" + e)
                this.duration = e.target.value
            }
        }
    }
</script>

<style scoped>

</style>