<template>
  <view style="width:100%">
    <center v-if="hasLogin"></center>
    <view class="content">
      <view class="btn-row">
        <button v-if="!hasLogin" type="primary" class="primary" @tap="bindLogin">登录</button>
        <button v-if="hasLogin" type="default" @tap="bindLogout">退出登录</button>
      </view>
    </view>
  </view>
</template>

<script>
import center from './kitty-PersonalCenter/index'
import {mapMutations, mapState} from 'vuex'

export default {
  components: {center},
  computed: {
    ...mapState(['hasLogin', 'forcedLogin'])
  },
  methods: {
    ...mapMutations(['logout']),
    bindLogin() {
      uni.navigateTo({
        url: '../login/login',
      });
    },
    bindLogout() {
      this.logout();
      /**
       * 如果需要强制登录跳转回登录页面
       */
      if (this.forcedLogin) {
        uni.reLaunch({
          url: '../login/login',
        });
      }
    }
  }
}
</script>

<style>
</style>
