<template>
  <view class="rate-container">
    <view v-for="item in coaches">
      <view class="avatar-img">
        <img :src="item.avatar" alt=""></view>
      <view>{{ item.name }}</view>
      <view class="text" style="width: 80%;">
        <textarea style="border: 1px solid #ddd" name="" id="" cols="3" rows="1"></textarea>
      </view>
      <view
          class="rate-box"
          :class="{animation}"
          @touchmove="ontouchmove"
          @touchend="touchMoving=false"
      >
        <view
            v-for="(val,i) in list"
            :key="val"
            class="rate"
            :style="{fontSize, paddingLeft: i!==0 ? rateMargin : 0, paddingRight: i<list.length-1 ? rateMargin : 0, color: val<=rateValue ? activeColor : defaultColor}"
            :class="{scale: !disabled && val<=rateValue && animation && touchMoving}"
            :data-val="val"
            @click="onItemClick"
        >
          <text class="iconfont icon-star"/>
        </view>
      </view>
    </view>
    <button @click="submit">提交</button>

  </view>

</template>

<script>
import {getClientRect} from "./common";

export default {
  name: 'sx-rate',
  props: {
    // 当前值
    value: {
      type: Number,
      default: 3
    },
    // 最大星星数量
    max: {
      type: Number,
      default: 5
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 动画效果
    animation: {
      type: Boolean,
      default: true
    },
    // 默认星星颜色
    defaultColor: {
      type: String,
      default: '#ccc'
    },
    // 滑选后星星颜色
    activeColor: {
      type: String,
      default: '#FFB700'
    },
    // 星星大小
    fontSize: {
      type: String,
      default: 'inherit'
    },
    // 星星间距
    margin: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      rateValue: 0,
      touchMoving: false,
      coaches: [
        {
          avatar: 'https://avatars3.githubusercontent.com/u/122434?s=460&u=6202deb7a394c25a15b19d420e5ea28914384ec4&v=4',
          name: '陈教练'
        },
        {
          avatar: 'https://avatars0.githubusercontent.com/u/14037268?s=460&u=141e9e5c5e86a2cf652ca9a3b0271f06ea0e4488&v=4',
          name: '宋教练'
        },
        {
          avatar: 'https://avatars2.githubusercontent.com/u/1410106?s=400&u=33e416fb9551313cab3d4e9a87fcf073211ab28a&v=4',
          name: '高教练'
        },
      ]
    }
  },
  computed: {
    list() {
      return [...new Array(this.max)].map((_, i) => i + 1)
    },
    rateMargin() {
      let margin = this.margin;
      if (!margin)
        return 0;

      switch (typeof margin) {
        case "number":
          margin += 'px';
        case "string":
          break;
        default:
          return 0;
      }

      let reg = /^(\d+)([^\d]*)/;
      let result = reg.exec(margin);
      if (!result)
        return 0;

      let [_, num, unit] = result;
      return num / 2 + unit;
    }
  },
  watch: {
    value: {
      handler(val) {
        this.rateValue = val;
      },
      immediate: true
    }
  },
  methods: {
    // 手指滑动事件回调
    async ontouchmove(e) {
      this.touchMoving = true;
      let {touches} = e;

      // 焦点停留的位置
      let {pageX} = touches[touches.length - 1];

      // 容器计算后属性
      let {left} = await getClientRect('.rate-box', this);

      // 单个星星元素计算后属性
      let {width} = await getClientRect('.rate', this);

      let {max} = this;
      let maxX = max * width + left;

      // 计算停留在哪个星星上
      let val = pageX > maxX ? max :          // 超出最右边, 最大星
          pageX < left ? 0 :                    // 超出最左边, 0 星
              Math.ceil((pageX - left) / width);  // 计算

      this.toggle(val);
    },
    // 点击回调
    onItemClick(e) {
      let {val} = e.currentTarget.dataset;
      this.toggle(val)
    },
    // 修改值
    toggle(val) {
      let {disabled} = this;
      if (disabled)
        return;
      if (this.rateValue !== val) {
        this.rateValue = val;
        this.$emit('update:value', val);
        this.$emit('change', val)
      }
    },
    submit() {
      uni.showToast({
        icon: 'success',
        title: '提交成功'
      })
      setTimeout(() => {
        uni.navigateTo({
          url: '../coach/ViewRate'
        });
      }, 3000)
    }
  },
}
</script>

<style scoped>
@import "../../static/sx-rate/iconfont.css";
</style>

<style scoped>
.rate-container {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  /*align-items: center;*/
}

.avatar-img {
  margin-top: 1rem
}

.avatar-img > img {
  padding: .15rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #ddd;
}

.rate-container {
  width: 99vw;
  text-align: center;
}

.text {
  margin: 0 auto;
  width: 100%;
}

.text > textarea {
  width: 100%;
}

.rate-box {
  min-height: 1.4em;
  margin: 1rem auto;
  width: 100%;
}

.rate {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.2em;
  transition: all .15s linear;
}

.rate.scale {
  transform: scale(1.1);
}
</style>
