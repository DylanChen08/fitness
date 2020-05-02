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
                            <view class="goods" v-for="(item2,index2) in item.list" :key="index2">
                                <img :src="item2.url"
                                     mode="">
                                <view>
                                    <view>{{item2.title}}</view>
                                    <view class="describe">{{item2.describe}}</view>
                                    <view class="money">{{item2.calories}}卡路里</view>
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
                leftArray: ['淀粉', '水果', '奶制品', '甜点', '肉类'],
                mainArray: [
                    {
                        title: '淀粉类',
                        list: [{
                            title: '马铃薯',
                            describe: '马铃薯（学名：Solanum tuberosum），属茄科茄属多年生草' +
                                '本植物，块茎可供食用，是全球第四大重要的粮食作物',
                            url: 'https://wx1.sinaimg.cn/mw690/82dbebd3gy1gdftvqfhsxj20ku0iymxp.jpg',
                            calories: '77'
                        }, {
                            title: '米饭',
                            describe: '大米（Rice），是稻谷经清理、砻谷、碾米、成品整理等工' +
                                '序后制成的成品，大米含有稻米中近64%的营养物质和90%以上的人' +
                                '体所需的营养元素',
                            url: 'https://wx3.sinaimg.cn/small/82dbebd3gy1gdfum0dngqj2046046wea.jpg',
                            calories: '40'
                        }, {
                            title: '山药',
                            describe: '山药' + '是薯蓣科薯蓣属植物，缠绕草质藤本。块茎长圆柱形，' +
                                '垂直生长。茎通常带紫红色，右旋，无毛。单叶，在茎下' +
                                '部的互生，中部以上的对生。雄花序为穗状花序，长2-8厘米，',
                            url: 'https://wx3.sinaimg.cn/small/82dbebd3gy1gdfum0dngqj2046046wea.jpg',
                            calories: '60'
                        },],

                    },
                    {
                        title: '水果',
                        list: [{
                            title: '苹果',
                            describe: '苹果是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果营' +
                                '养价值很高，富含矿物质和维生素，含钙量丰富，有助于代谢掉体内多余盐分' +
                                '，苹果酸可代谢热量',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutj9wptj20460460t4.jpg',
                            calories: '12'
                        }, {
                            title: '芒果',
                            describe: '芒果是杧果（中国植物志）的通俗名（拉丁学名：Mangifera indic' +
                                'a L.），芒果是一种原产印度的漆树科常绿大乔木，叶革质，互生；' +
                                '花小，杂性，黄色或淡黄色',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutf7eq5j2046046gm8.jpg',
                            calories: '34'
                        }, {
                            title: '橙子',
                            describe: '橙子（学名：Citrus sinensis）是芸香科柑橘属植物' +
                                '橙树的果实，亦称为柳橙、甜橙、黄果、金环、柳丁。橙是一' +
                                '种柑果，它是种植了很久的混合品种',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutf7eq5j2046046gm8.jpg',
                            calories: '25'
                        },],

                    },
                    {
                        title: '奶制品',
                        list: [{
                            title: '全脂牛奶',
                            describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
                            url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
                            calories: '80'
                        }, {
                            title: '脱脂牛奶',
                            describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
                            url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
                            calories: '60'
                        }, {
                            title: '酸牛奶',
                            describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
                            url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
                            calories: '78'
                        },],

                    },
                    {
                        title: '甜点',
                        list: [{
                            title: 'Pascual 牛奶巧克力布丁（甜点心）',
                            describe: '一种热量较低、高水分的食品，减肥时适量食用',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfvaknx3gj2046048dfr.jpg',
                            calories: '100'
                        }, {
                            title: '可颂食品 甜点',
                            describe: '该食物含有较多的脂肪，不建议食用。',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfva8rf6cj2035046746.jpg',
                            calories: '437'
                        }, {
                            title: 'Al Mealim阿拉伯甜点',
                            describe: '一种高脂肪、高碳水化合物、高纤维的食品，减肥时不宜多食',
                            url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfvaf8cslj2046035t9l.jpg',
                            calories: '536'
                        },],

                    },
                    {
                        title: '肉类',
                        list: [{
                            title: '猪肉',
                            describe: '一种食用肉',
                            url: 'https://wx1.sinaimg.cn/mw690/82dbebd3gy1gdfvetew3sj2046046wew.jpg',
                            calories: '133'
                        }, {
                            title: '牛肉',
                            describe: '一种食用肉',
                            url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfvgonq3gj2046046q2s.jpg',
                            calories: '145'
                        }],

                    },

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
						const leftArray = ['淀粉', '水果', '奶制品', '甜点', '肉类']
						const mainArray =  [
							{
								title: '淀粉类',
								list: [{
									title: '马铃薯',
									describe: '马铃薯（学名：Solanum tuberosum），属茄科茄属多年生草' +
											'本植物，块茎可供食用，是全球第四大重要的粮食作物',
									url: 'https://wx1.sinaimg.cn/mw690/82dbebd3gy1gdftvqfhsxj20ku0iymxp.jpg',
									calories: '77'
								}, {
									title: '米饭',
									describe: '大米（Rice），是稻谷经清理、砻谷、碾米、成品整理等工' +
											'序后制成的成品，大米含有稻米中近64%的营养物质和90%以上的人' +
											'体所需的营养元素',
									url: 'https://wx3.sinaimg.cn/small/82dbebd3gy1gdfum0dngqj2046046wea.jpg',
									calories: '40'
								}, {
									title: '山药',
									describe: '山药' + '是薯蓣科薯蓣属植物，缠绕草质藤本。块茎长圆柱形，' +
											'垂直生长。茎通常带紫红色，右旋，无毛。单叶，在茎下' +
											'部的互生，中部以上的对生。雄花序为穗状花序，长2-8厘米，',
									url: 'https://wx3.sinaimg.cn/small/82dbebd3gy1gdfum0dngqj2046046wea.jpg',
									calories: '60'
								},],

							},
							{
								title: '水果',
								list: [{
									title: '苹果',
									describe: '苹果是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果营' +
											'养价值很高，富含矿物质和维生素，含钙量丰富，有助于代谢掉体内多余盐分' +
											'，苹果酸可代谢热量',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutj9wptj20460460t4.jpg',
									calories: '12'
								}, {
									title: '芒果',
									describe: '芒果是杧果（中国植物志）的通俗名（拉丁学名：Mangifera indic' +
											'a L.），芒果是一种原产印度的漆树科常绿大乔木，叶革质，互生；' +
											'花小，杂性，黄色或淡黄色',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutf7eq5j2046046gm8.jpg',
									calories: '34'
								}, {
									title: '橙子',
									describe: '橙子（学名：Citrus sinensis）是芸香科柑橘属植物' +
											'橙树的果实，亦称为柳橙、甜橙、黄果、金环、柳丁。橙是一' +
											'种柑果，它是种植了很久的混合品种',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfutf7eq5j2046046gm8.jpg',
									calories: '25'
								},],

							},
							{
								title: '奶制品',
								list: [{
									title: '全脂牛奶',
									describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
									url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
									calories: '80'
								}, {
									title: '脱脂牛奶',
									describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
									url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
									calories: '60'
								}, {
									title: '酸牛奶',
									describe: '牛奶是最古老的天然饮料之一，被誉为白色血液。牛奶中含有丰富的蛋白质、脂肪、维生素和矿物质等营养物质',
									url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfv3xszi5j2046046gm2.jpg',
									calories: '78'
								},],

							},
							{
								title: '甜点',
								list: [{
									title: 'Pascual 牛奶巧克力布丁（甜点心）',
									describe: '一种热量较低、高水分的食品，减肥时适量食用',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfvaknx3gj2046048dfr.jpg',
									calories: '100'
								}, {
									title: '可颂食品 甜点',
									describe: '该食物含有较多的脂肪，不建议食用。',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfva8rf6cj2035046746.jpg',
									calories: '437'
								}, {
									title: 'Al Mealim阿拉伯甜点',
									describe: '一种高脂肪、高碳水化合物、高纤维的食品，减肥时不宜多食',
									url: 'https://wx3.sinaimg.cn/mw690/82dbebd3gy1gdfvaf8cslj2046035t9l.jpg',
									calories: '536'
								},],

							},
							{
								title: '肉类',
								list: [{
									title: '猪肉',
									describe: '一种食用肉',
									url: 'https://wx1.sinaimg.cn/mw690/82dbebd3gy1gdfvetew3sj2046046wew.jpg',
									calories: '133'
								}, {
									title: '牛肉',
									describe: '一种食用肉',
									url: 'https://wx4.sinaimg.cn/mw690/82dbebd3gy1gdfvgonq3gj2046046q2s.jpg',
									calories: '145'
								}],

							},

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
        width: 620 upx;
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
