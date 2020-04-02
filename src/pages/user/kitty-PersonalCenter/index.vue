<template>
    <view class="content">
        <view class="header">
            <image src="../../static/kitty-PersonalCenter/shezhi.png" mode="" class="setting-btn"></image>
            <view class="uni-flex uni-row" style="align-items: center;">
                <view class="img-profile">
                    <image :src="user.profile" mode=""></image>
                </view>
                <view>
                    <view class="nickname">
                        {{ user.nickname }}
                        <view class="nick-usertag">{{ user.level }}</view>
                    </view>
                    <view class="uni-flex uni-row">
                        <view class="usertag" v-for="tag in user.tags">{{ tag }}</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="card-item">
            <view class="card-item-content uni-flex uni-row">
                <view v-for="( item, index ) in orderList" :key="index">
                    <view class="icon-wrap">
                        <image :src="'../../static/kitty-PersonalCenter/' + item.icon + '.png'" mode=""></image>
                        <view class="badge" v-if="item.padge > 0">{{ item.padge }}</view>
                    </view>
                    <view>{{ item.text }}</view>
                </view>
                <view>
                    <view class="icon-wrap">
                        <image src="../../static/kitty-PersonalCenter/dingdan.png" mode=""></image>
                    </view>
                    <view>我的订单</view>
                </view>
            </view>
        </view>
        <view class="card-item">
            <view class="card-item-content uni-flex uni-row">
                <view v-for="( item, index ) in pocketList" :key="index">
                    <view class="text-bold">{{ item.count }}</view>
                    <view>{{ item.text }}</view>
                </view>
                <view>
                    <view class="icon-wrap">
                        <image src="../../static/kitty-PersonalCenter/kabao.png" mode=""></image>
                    </view>
                    <view>我的钱包</view>
                </view>
            </view>
        </view>
        <view class="card-item">
            <view class="card-item-content uni-flex uni-row">
                <view v-for="( item, index ) in viewList" :key="index">
                    <view class="text-bold">{{ item.count }}</view>
                    <view>{{ item.text }}</view>
                </view>
            </view>
            <view class="card-item-content uni-flex uni-row">
                <view v-for="( item, index ) in serviceList" :key="index">
                    <view class="icon-wrap">
                        <image :src="'../../static/kitty-PersonalCenter/' + item.icon + '.png'" mode=""></image>
                    </view>
                    <view>{{ item.text }}</view>
                </view>
            </view>
        </view>
        <view class="card-item">
            <view class="card-item-header">工具与服务</view>
            <view class="card-item-content">
                <view class="card-item-block uni-flex uni-row" v-for="( item, index ) in otherServices" :key="index">
                    <view>
                        <view>
                            <image :src="'../../static/kitty-PersonalCenter/' + item.icon +'.png'" mode=""
                                   style="width: 2rem;height: 2rem;vertical-align: top;"></image>
                        </view>
                        <view>{{ item.name }}</view>
                    </view>
                    <view style="flex: 1;text-align: left;">
                        <view class="card-item-block-title">{{ item.title }}</view>
                        <view class="card-item-block-disc">{{ item.disc }}</view>
                    </view>
                    <button type="default" size="mini">去查看</button>
                </view>
            </view>
        </view>
        <view class="suggestion-title uni-flex uni-row">
            <view></view>
            <view>为你推荐</view>
            <view></view>
        </view>
        <view class="product-list-wrap">
            <view class="uni-product-list">
                <view class="uni-product" v-for="(product,index) in productList" :key="index">
                    <view class="image-view">
                        <image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
                    </view>
                    <view class="uni-product-title">{{product.title}}</view>
                    <view class="uni-product-price">
                        <text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
                        <text class="uni-product-price-original">￥{{product.favourPrice}}</text>
                        <text class="uni-product-tip">{{product.tip}}</text>
                    </view>
                </view>
            </view>
        </view>
        <view class="underlinetext" v-if="loadAll">已经到底啦！</view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    profile: 'https://via.placeholder.com/70/ffffff/808080',
                    nickname: 'Kitty Wei',
                    level: '钻石',
                    tags: ['已实名', '查看信用']
                },
                orderList: [
                    {icon: 'yinhangka', text: '待付款', padge: 0},
                    {icon: 'rili', text: '待收货', padge: 1},
                    {icon: 'xiaoxi', text: '待评价', padge: 6},
                    {icon: 'anquan', text: '退换/售后', padge: 0}
                ],
                pocketList: [
                    {count: 1588, text: '虚拟币'},
                    {count: 70, text: '优惠券'},
                    {count: 100.9, text: '白条'},
                    {count: 99, text: '礼品卡'}
                ],
                viewList: [
                    {count: 108, text: '商品关注'},
                    {count: 56, text: '店铺关注'},
                    {count: 899, text: '喜欢的内容'},
                    {count: 1600, text: '浏览记录'}
                ],
                serviceList: [
                    {icon: 'awake', text: '我的活动'},
                    {icon: 'hotel', text: '客户服务'},
                    {icon: 'car', text: '寄件服务'},
                    {icon: 'mic', text: '我的宝宝'}
                ],
                otherServices: [
                    {
                        icon: 'mic',
                        name: '小金库',
                        title: '你有一笔奖金，快来看看！你有一笔奖金，快来看看！',
                        disc: '参加早起打卡，瓜分5亿红包参加早起打卡，瓜分5亿红包',
                    }, {
                        icon: 'hotel',
                        name: '基金',
                        title: '信托投资基金、公积金、保险基金',
                        disc: '为了某种目的而设立的具有一定数量的资金',
                    }
                ],
                productList: [],
                renderImage: false,
                productPage: 0,
                loadAll: false
            }
        },
        onLoad() {
            // this.loadData();
            // setTimeout(() => {
            //     this.renderImage = true;
            // }, 300);
        },
        methods: {
            loadData(action = 'add') {
                const data = [
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
                        title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
                        originalPrice: 9999,
                        favourPrice: 8888,
                        tip: '自营'
                    },
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
                        title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
                        originalPrice: 3499,
                        favourPrice: 3399,
                        tip: '优惠'
                    },
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
                        title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
                        originalPrice: 12999,
                        favourPrice: 10688,
                        tip: '秒杀'
                    },
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
                        title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
                        originalPrice: 999,
                        favourPrice: 958,
                        tip: '秒杀'
                    },
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
                        title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
                        originalPrice: 8888,
                        favourPrice: 8288,
                        tip: '优惠'
                    },
                    {
                        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
                        title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
                        originalPrice: 2899,
                        favourPrice: 2799,
                        tip: '自营'
                    }
                ];

                if (action === 'refresh') {
                    this.productList = [];
                    this.productPage = 0;
                    this.loadAll = false;
                }

                // data.forEach(item => {
                //     this.productList.push(item);
                // });


            }
        },
        onPullDownRefresh() {
            // this.loadData('refresh');
            // // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
            // setTimeout(() => {
            //     uni.stopPullDownRefresh();
            // }, 2000);
        },
        onReachBottom() {
            // if (this.productPage >= 3) { //数字仅为体现效果，实际开发中数据加载完成就停止
            //     this.loadAll = true;
            // } else {
            //     this.productPage++;
            //     this.loadData();
            // }
        }
    }
</script>

<style scoped>
    page {
        background-color: #f6f6f6;
        font-size: 10px;
    }

    .content {
        padding: 0 !important;
    }

    .header {
        color: #ddd;
        background-image: linear-gradient(40deg, rgb(210, 166, 95) 0%, rgb(239, 201, 142) 100%);
        padding: 0.5rem 0.3rem;
        margin-bottom: 0.3rem;
        position: relative;
    }

    .img-profile {
        margin-right: 0.3rem;
    }

    .img-profile > image {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        vertical-align: middle;
        border: 2px solid #aa833e;
    }

    .usertag {
        padding: 0 0.2rem;
        background-color: #cb9a5c;
        border-radius: 0.3rem;
        font-size: 0.75rem;
        margin-right: 0.2rem;
        border: 1px solid #aa833e;
        line-height: 1.6;
    }

    .nickname {
        font-size: 0.75rem;
        margin-bottom: 0.2rem;
    }

    .nick-usertag {
        margin-left: 0.2rem;
        border: none;
        display: inline-block;

    }

    .setting-btn {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 1rem;
        right: 0.4rem;
    }

    .card-item {
        background-color: #fff;
        border-radius: 0.2rem;
        margin: 0 0.3rem 0.3rem 0.2rem;
        text-align: center;
        border: 1px solid red;
    }

    .text-bold {
        font-weight: 900;
        font-size: 1.2rem;
    }

    .icon-wrap {
        position: relative;
    }

    .icon-wrap > image {
        width: 2rem;
        height: 2rem;
        vertical-align: top;
    }

    .badge {
        font-size: 0.75rem;
        width: 1rem;
        height: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: #dd524d;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
    }

    .card-item-header {
        text-align: left;
        font-size: 1.1em;
        font-weight: 600;
        border-bottom: 1px solid blue;
        padding: 1.5rem 2rem;
    }

    .card-item-content {
        border: 1px solid orange;
        padding: 0.3rem;
        justify-content: space-between;
    }

    .card-item-block-title, .card-item-block-disc {
        padding: 0 0.55rem;
        border: 1px solid red
    }

    .suggestion-title {
        justify-content: center;
        align-items: center;
    }

    .suggestion-title > view:first-child,
    .suggestion-title > view:last-child {
        width: 1rem;
        height: .2rem;
        background-color: #ccc;
        margin: 0 .2rem;
    }


    .underlinetext {
        font-size: .2rem;
        color: #999;
        text-align: center;
        margin: .2rem;
    }

    uni-button {
        padding: 0 0.1rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-content: center;
    }

</style>

