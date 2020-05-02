<template>
    <view id="coursesTable" class="coursesTable" @click="gridOnClick"></view>
</template>

<script>
    import Timetables from 'timetables';

    export default {
        name: "TimeTable",
        mounted() {
            this.initTable();
        },
        methods: {
            initTable() {
                let _this = this;
                const courseList = ['瑜伽', '健美操', '跑步集训', '饮食课堂', '上身强化训练',
                    '动感单车', '方克', '搏击健美操', '健身球', '莱美国际健身体系'];
                const generated = [];
                let inner = [];
                let {min, max} = {min: 0, max: 9};
                for (let k = min; k < max; k++) {
                    for (let i = min; i < max; i++) {
                        let j = Math.round(Math.random() * (max - min)) + min;
                        inner[i] = courseList[j]; //单天的每一节课
                    }
                    // console.log(JSON.stringify(inner))
                    generated.push(JSON.parse(JSON.stringify(inner))) //解决控制台打印的值和实际值不一致的问题
                }
                let Timetable;
                const styles = {
                    Gheight: 65,
                    leftHandWidth: 50,
                    palette: ['#ff6633', '#eeeeee']
                };
                Timetable = new Timetables({
                    el: '#coursesTable',
                    timetables: generated,
                    week: ['一', '二', '三', '四', '五', '六', '日',],
                    timetableType: [
                        ['上午', 2],
                        ['下午', 3],
                        ['晚上', 5]
                    ],
                    styles: styles,
                    gridOnClick(e) {
                        console.log(e)
                        const coaches = ['陈一帆','陆一都','黄级','张雪莹','陈雪','伍雪莹','陈斌','林家峰','詹小曼','吴泉林'];
                        const phones = ['15625563025','15625563033','15685563025','15677563025','15658563025','15625563425',
                            '13625563425','13725563425','15625561123','13605563425'];
                        let {min, max} = {min: 0, max: 9};
                        let temp = Math.round(Math.random() * (max - min)) + min;
                        let generatedCoach  = coaches[temp]
                        let generatedPhone = phones[temp]
                        let msg = `"${e.name}"是周${e.week}的课哦\n任课教练：${generatedCoach}\n联系电话${generatedPhone}`
                        uni.showModal({
                            title: '提示',
                            content: msg,
                            success: function (res) {
                                if (res.confirm) {
                                    console.log('用户点击确定');
                                } else if (res.cancel) {
                                    console.log('用户点击取消');
                                }
                            }
                        });
                    },
                });
            },
            gridOnClick(e) {console.log('xxx',e)}
        }
    }
</script>

<style scoped>
    .coursesTable {
        width: 100%;
        height: 100%;
    }
</style>