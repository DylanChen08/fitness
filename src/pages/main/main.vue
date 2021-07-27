<template>
  <view class="content">
    <view class="title">
      <!--      <el-alert-->
      <!--          center-->
      <!--          show-icon-->
      <!--          title="登录成功"-->
      <!--          type="success">-->
      <!--        欢迎您, {{ userName }}-->
      <!--      </el-alert>-->
      <!--广告轮播图-->
      <Ads></Ads>
      <!--首页快速导航-->
      <IndexQuickRedirection></IndexQuickRedirection>
      <!--dashboard-->
      <report></report>
    </view>

    <!--    <view class="hello" v-if="hasLogin">-->
    <!--      <view class="title">-->
    <!--        <el-alert-->
    <!--            center-->
    <!--            show-icon-->
    <!--            title="登录成功"-->
    <!--            type="success">-->
    <!--          欢迎您, {{ userName }}-->
    <!--        </el-alert>-->
    <!--        &lt;!&ndash;广告轮播图&ndash;&gt;-->
    <!--        <Ads></Ads>-->
    <!--        &lt;!&ndash;首页快速导航&ndash;&gt;-->
    <!--        <IndexQuickRedirection></IndexQuickRedirection>-->
    <!--        &lt;!&ndash;dashboard&ndash;&gt;-->
    <!--        <report></report>-->
    <!--      </view>-->
    <!--    </view>-->
    <!--    <view class="hello" v-if="!hasLogin">-->
    <!--      <view class="title">-->
    <!--        您好 游客。-->
    <!--      </view>-->
    <!--      <view class="ul">-->
    <!--        <view>这是 uni-app 带登录模板的示例App首页。</view>-->
    <!--        <view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>-->
    <!--      </view>-->
    <!--    </view>-->
  </view>
</template>

<script>
import Ads from '../../pages/publicDisplay/ads'
import IndexQuickRedirection from "../publicDisplay/IndexQuickRedirection";
import report from "../publicDisplay/report";
import {mapState} from 'vuex'


export default {
  //TODO 暂时禁用登录注册,使用默认用户
  data() {
    return {}
  },

  computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
  components: {
    Ads,
    IndexQuickRedirection,
    report,
  },
  onLoad() {
    //TODO 暂时禁用登录注册,使用默认用户
    /*if (!this.hasLogin) {*/
    /*  uni.showModal({*/
    /*    title: '未登录',*/
    /*    content: '您未登录，需要登录后才能继续',*/
    /*    !***/
    /*     * 如果需要强制登录，不显示取消按钮*/
    /*     *!*/
    /*    showCancel: !this.forcedLogin,*/
    /*    success: (res) => {*/
    /*      if (res.confirm) {*/
    /*        !***/
    /*         * 如果需要强制登录，使用reLaunch方式*/
    /*         *!*/
    /*        if (this.forcedLogin) {*/
    /*          uni.reLaunch({*/
    /*            url: '../login/login'*/
    /*          });*/
    //         } else {
    //           uni.navigateTo({
    //             url: '../login/login'
    //           });
    //         }
    //       }
    //     }
    //   });
    // }
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
