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
        >{{ item }}
        </view>
      </scroll-view>
    </view>
    <view class="main">
      <scroll-view scroll-y="true" :style="{ 'height':scrollHeight }" @scroll="mainScroll"
                   :scroll-into-view="scrollInto" scroll-with-animation="true">
        <view class="item2" v-for="(item,index) in mainArray" :key="index" :id="'item-'+index">
          <view class="title">
            <view>{{ item.title }}</view>
          </view>
          <view class="goods" v-for="(item2,index2) in item.list" :key="index2">
            <image src="/static/logo.png" mode=""></image>
            <view>
              <view>第{{ index2 + 1 }}个商品标题</view>
              <view class="describe">第{{ index2 + 1 }}个商品的描述内容</view>
              <view class="money">第{{ index2 + 1 }}个商品的价格</view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      scrollHeight: '500px',
      leftArray: [],
      mainArray: [],
      topArr: [],
      leftIndex: 0,
      scrollInto: ''
    }
  },
  onLoad() {
    uni.getSystemInfo({
      success: (res) => {
        /* 设置当前滚动容器的高，若非窗口的高度，请自行修改 */
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
        uni.showLoading();
        setTimeout(() => {
          let [left, main] = [[], []];

          for (let i = 0; i < 10; i++) {
            left.push(`${i + 1}类商品`);

            let list = [];
            for (let j = 0; j < (i + 1); j++) {
              list.push(j);
            }
            main.push({
              title: `第${i + 1}类商品标题`,
              list
            })
          }

          // 将请求接口返回的数据传递给 Promise 对象的 then 函数。
          resolve({left, main});
        }, 1000);
      }).then((res) => {
        console.log('-----------请求接口返回数据示例-------------');
        console.log(res);

        uni.hideLoading();
        this.leftArray = res.left;
        this.mainArray = res.main;

        // DOM 挂载后 再调用 getElementTop 获取高度的方法。
        this.$nextTick(() => {
          this.getElementTop();
        });
      });
    },
    /* 获取元素顶部信息 */
    getElementTop() {
      /* Promise 对象数组 */
      let p_arr = [];

      /* 新建 Promise 方法 */
      let new_p = (selector) => {
        return new Promise((resolve, reject) => {
          let view = uni.createSelectorQuery().select(selector);
          view.boundingClientRect(data => {
            resolve(data.top);
          }).exec();
        })
      }

      /* 遍历数据，创建相应的 Promise 数组数据 */
      this.mainArray.forEach((item, index) => {
        p_arr.push(new_p(`#item-${index}`));
      });

      /* 所有节点信息返回后调用该方法 */
      Promise.all(p_arr).then((data) => {
        this.topArr = data;
      });
    },
    /* 主区域滚动监听 */
    mainScroll(e) {
      let top = e.detail.scrollTop;
      let index = 0;
      /* 查找当前滚动距离 */
      for (let i = (this.topArr.length - 1); i >= 0; i--) {
        /* 在部分安卓设备上，因手机逻辑分辨率与rpx单位计算不是整数，滚动距离与有误差，增加2px来完善该问题 */
        if ((top + 2) >= this.topArr[i]) {
          index = i;
          break;
        }
      }
      this.leftIndex = (index < 0 ? 0 : index);
    },
    /* 左侧导航点击 */
    leftTap(e) {
      let index = e.currentTarget.dataset.index;
      this.scrollInto = `item-${index}`;
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
  font-size: 28 rpx;
}

.left {
  width: 200 rpx;
  background-color: #f6f6f6;
  line-height: 80 rpx;
  box-sizing: border-box;
  font-size: 32 rpx;
}

.item {
  padding-left: 20 rpx;
  position: relative
}

.item:not(:first-child) {
  margin-top: 1px;
}

.item:after {
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

.item.active {
  color: #42b983;
  background-color: #fff;
}

.main {
  background-color: #fff;
  padding-left: 20 rpx;
  width: 0;
  flex-grow: 1;
  box-sizing: border-box;
}

.title {
  line-height: 64 rpx;
  font-size: 24 rpx;
  font-weight: bold;
  color: #666;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 19;
}

.item2 {
  padding-bottom: 10 rpx;
  border-bottom: #eee solid 1px;
}

.goods {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin-bottom: 10 rpx;
}

.good > image {
  width: 120 rpx;
  height: 120 rpx;
  margin-right: 16 rpx;
  margin-left: 2px;
}

.describe {
  font-size: 24 rpx;
  color: #999;
}

.money {
  font-size: 24 rpx;
  color: #efba21;
}

</style>
