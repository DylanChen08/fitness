<template>
  <view class="content">
    <view>
      <view class="input-group">
        <view class="input-row border">
          <text class="title">账号：</text>
          <m-input class="m-input" type="text" clearable focus v-model="account"
                   placeholder="请输入账号"></m-input>
        </view>
        <view class="input-row">
          <text class="title">密码：</text>
          <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
        </view>
      </view>
      <view class="btn-row">
        <button type="primary" class="primary" @tap="bindLogin">登录</button>
      </view>
      <view class="action-row">
        <navigator url="../reg/reg">注册账号</navigator>
        <text>|</text>
        <navigator url="../pwd/pwd">忘记密码</navigator>
      </view>
      <view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
        <view class="oauth-image" v-for="provider in providerList" :key="provider.value">
          <image :src="provider.image" @tap="oauth(provider.value)"></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import service from '../../service.js';
import {mapMutations, mapState} from 'vuex'
import mInput from '../../components/m-input.vue'

export default {
  components: {
    mInput
  },
  data() {
    return {
      providerList: [],
      hasProvider: false,
      account: '',
      password: '',
      positionTop: 0
    }
  },
  computed: mapState(['forcedLogin']),
  methods: {
    ...mapMutations(['login']),
    initProvider() {
      const filters = ['weixin', 'qq', 'sinaweibo'];
      uni.getProvider({
        service: 'oauth',
        success: (res) => {
          if (res.provider && res.provider.length) {
            for (let i = 0; i < res.provider.length; i++) {
              if (~filters.indexOf(res.provider[i])) {
                this.providerList.push({
                  value: res.provider[i],
                  image: '../../static/img/' + res.provider[i] + '.png'
                });
              }
            }
            this.hasProvider = true;
          }
        },
        fail: (err) => {
          console.error('获取服务供应商失败：' + JSON.stringify(err));
        }
      });
    },
    initPosition() {
      /**
       * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
       * 反向使用 top 进行定位，可以避免此问题。
       */
      this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
    },
    bindLogin() {
      /**
       * 客户端对账号信息进行一些必要的校验。
       * 实际开发中，根据业务需要进行处理，这里仅做示例。
       */
      if (this.account.length < 5) {
        uni.showToast({
          icon: 'none',
          title: '账号最短为 5 个字符'
        });
        return;
      }
      if (this.password.length < 6) {
        uni.showToast({
          icon: 'none',
          title: '密码最短为 6 个字符'
        });
        return;
      }
      /**
       * 下面简单模拟下服务端的处理
       * 检测用户账号密码是否在已注册的用户列表中
       * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
       */

      const data = {
        account: this.account,
        password: this.password
      };
      /**
       * 发送登录数据
       *
       */


      const validUser = service.getUsers().some(function (user) {
        return data.account === user.account && data.password === user.password;
      });
      if (validUser) {
        console.log(111)
        this.toMain(this.account);
        console.log(222)
      } else {
        uni.showToast({
          icon: 'none',
          title: '用户账号或密码不正确',
        });
      }
    },
    oauth(value) {
      uni.login({
        provider: value,
        success: (res) => {
          uni.getUserInfo({
            provider: value,
            success: (infoRes) => {
              /**
               * 实际开发中，获取用户信息后，需要将信息上报至服务端。
               * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
               */
              this.toMain(infoRes.userInfo.nickName);
              console.log(infoRes)
            }
          });
        },
        fail: (err) => {
          console.error('授权登录失败：' + JSON.stringify(err));
        }
      });
    },
    toMain(userName) {
      this.login(userName);
      /**
       * 强制登录时使用reLaunch方式跳转过来
       * 返回首页也使用reLaunch方式
       *
       */

      if (true) {
        uni.reLaunch({
          url: '../main/main',
        });
      } else {
        uni.navigateBack();
      }

    }
  },
  onReady() {
    this.initPosition();
    this.initProvider();
  }
}
</script>

<style>
.content {
  background: url("../../static/img/wallhaven-0pzq7m.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content > view > .input-group > .input-row {
  padding: .5rem 0
}

.action-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.action-row > text {
  color: #fff
}

.action-row navigator {
  color: #fff;
  padding: 0 10px;
}

.oauth-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.oauth-image {
  width: 50px;
  height: 50px;
  border: 1px solid #dddddd;
  border-radius: 50px;
  margin: 0 20px;
  background-color: #ffffff;
}

.oauth-image image {
  width: 30px;
  height: 30px;
  margin: 10px;
}
</style>
