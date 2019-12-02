<template>
    <view class="dashboard">
        <h1>健康总览</h1>
        <section class="walk-count">
            <div class="walk-count-box">
                    <span class="walk-count-number">
                     2922
                    </span>
                <div class="walk-count-number-icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconwalk"></use>
                    </svg>
                </div>
            </div>
            <span class="walk-count-advice">
                    距离达成目标还有2556步
                </span>
        </section>
        <section class="fitness-report">
            <view v-for="item in fitnessReportIcons" :key="item.id">
                <view class="fitnessReportIcons">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`${item.href}`"></use>
                    </svg>
                </view>
                <view class="fitness-report-data">
                    <view>{{item.raw}}</view>
                    <view>{{item.comment}}</view>
                </view>
            </view>
        </section>
    </view>
</template>

<script>
    export default {
        name: "report",
        data() {
            return {
                fitnessReportIcons: [
                    {id: 1, href: "#iconshengao", raw: "173", comment: "身高"},
                    {id: 2, href: "#icontizhong", raw: "50", comment: "体重"},
                    {id: 3, href: "#iconbmi", raw: "1.5", comment: "BMI"},
                    {id: 4, href: "#iconshijianlishijilujishizhongbiaomianxingx", raw: "20h", comment: "时长"},
                ]
            }
        },

    }
</script>

<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .dashboard {
        margin: 0.5rem 0 0 0;
        background: rgb(254, 254, 254);
        padding: 1.25rem;
        -webkit-box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
        box-shadow: 10px 10px 12px -12px rgba(0, 0, 0, 0.75);
    }

    .dashboard > .walk-count {
        display: flex;
        padding: .5rem 0;
        flex-direction: column;

    }

    .dashboard > .walk-count > .walk-count-advice {
        font-size: 0.75rem;
        color: #999;
    }

    .dashboard > .walk-count > .walk-count-box {
        display: flex;
        flex-direction: row;
    }

    .dashboard > .walk-count > .walk-count-box > .walk-count-number {
        font-size: 2rem;
        font-weight: bold;
        color: rgb(233, 133, 54);
    }

    .dashboard > .walk-count > .walk-count-box > .walk-count-number-icon {
        display: flex;
        font-size: 1rem;
        font-weight: bold;
        justify-content: center;
        align-items: center;
    }

    .dashboard > .fitness-report {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .dashboard > .fitness-report > view {
        flex: 0 0 40%;
        display: flex;
        flex-direction: row;

    }

    .dashboard > .fitness-report > view > .fitnessReportIcons {
        flex: 1;
        text-align: center;
    }

    .dashboard > .fitness-report > view > .fitnessReportIcons > svg {
        font-size: 2rem;
        padding: 0.5rem;
    }

    .dashboard > .fitness-report > view > .fitness-report-data {
        padding: 0.5rem;
    }

    .dashboard > .fitness-report > view > .fitness-report-data > view {
        font-weight: bold;
        color: #666;
    }


</style>