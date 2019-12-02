<template>
    <view class="content">
        <!--广告轮播图-->
        <Ads></Ads>
        <!--首页快速导航-->
        <IndexQuickRedirection></IndexQuickRedirection>
        <!--dashboard-->
        <report></report>
    </view>
</template>

<script>
    import Ads from '../../pages/publicDisplay/ads'
    import IndexQuickRedirection from "../publicDisplay/IndexQuickRedirection";
    import report from "../publicDisplay/report";
    import {
        mapState
    } from 'vuex'

    export default {
        computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
        components: {
            Ads,
            IndexQuickRedirection,
            report,
        },
        onLoad() {
            if (!this.hasLogin) {
                uni.showModal({
                    title: '未登录',
                    content: '您未登录，需要登录后才能继续',
                    /**
                     * 如果需要强制登录，不显示取消按钮
                     */
                    showCancel: !this.forcedLogin,
                    success: (res) => {
                        if (res.confirm) {
                            /**
                             * 如果需要强制登录，使用reLaunch方式
                             */
                            if (this.forcedLogin) {
                                uni.reLaunch({
                                    url: '../login/login'
                                });
                            } else {
                                uni.navigateTo({
                                    url: '../login/login'
                                });
                            }
                        }
                    }
                });
            }
        }
    }
</script>

<style>
    .hello {
        display: flex;
        flex: 1;
        flex-direction: column;
    }

    .content {
        padding-bottom: 2rem
    }

    .title {
        color: #8f8f94;
        margin-top: 25px;
    }

    .ul {
        font-size: 15px;
        color: #8f8f94;
        margin-top: 25px;
    }

    .ul > view {
        line-height: 25px;
    }
</style>
