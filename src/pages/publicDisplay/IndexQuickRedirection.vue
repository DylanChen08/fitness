<template>
    <view class="redirect-box">
        <view v-for="item in iconArray" :key="item.id">
            <navigator :url="item.url">
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="`${item.href}`"/>
                </svg>
                <span>{{item.comment}}</span>
            </navigator>
        </view>
    </view>
</template>

<script>
    export default {
        name: "IndexQuickRedirection",
        data() {
            return {
                iconArray: [
                    {id: 1, href: "#iconxindetihui", comment: "心得体会", url: "../login/login"},
                    {id: 2, href: "#iconkebiao", comment: "查看课表", url: "../login/login"},
                    {id: 3, href: "#iconicon-test", comment: "项目选择", url: "../login/login"},
                    {id: 4, href: "#iconhebingxingzhuang", comment: "教练评分", url: "../login/login"},
                    {id: 5, href: "#iconjiaolian", comment: "教练选择", url: "../login/login"},
                    {id: 6, href: "#iconyinshi-copy", comment: "饮食推荐", url: "../login/login"}
                ]
            }
        }
    }
</script>

<style scoped>
    .icon {
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .redirect-box {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        align-content: flex-start;
        /*border: 1px solid red;*/
    }

    .redirect-box > view {
        flex: 0 0 30%;
        display: flex;
        flex-direction: column;
        background: rgb(254, 254, 254);
        margin: .25rem 0;
        padding: 1.5rem 0;
        text-align: center;
        border: 1px solid #DDD;
        -webkit-box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
    }

    .redirect-box > view > navigator > span {
        text-align: center;
    }

    .redirect-box > view > navigator > svg {
        width: 100%;
        text-align: center;
    }
</style>