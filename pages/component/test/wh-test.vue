<template>
	<view class="container">
		<!-- <page-head :title="title"></page-head> -->
		<view class="ad-view">



			<!-- #ifndef MP-WEIXIN -->
			<view class="ad-tips">
				<text>我不是微信小程序</text>
			</view>
			<!-- #endif -->

			<!-- #ifndef MP-ALIPAY -->
			<view class="ad-tips">
				<text>我不是支付宝小程序</text>
			</view>
			<!-- #endif -->

			<!-- #ifdef MP-WEIXIN -->
			<view class="ad-tips">
				<text>我是微信小程序</text>
				
				<button type="primary" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">获取用户信息</button>
				
				<button style="width: 750rpx;height: 100rpx;" open-type="getUserInfo"/>
				
				
				<button open-type="getUserInfo">授权登录</button>
				
				<button open-type="openSetting">打开设置</button>
				
				<!--   <button class='authBtn' type='primary' open-type='getUserInfo' bindgetuserinfo='bindGetUserInfo'>授权登录</button> -->
			
			</view>
			<!-- #endif -->

			<!-- #ifdef MP-ALIPAY -->
			<view class="ad-tips">
				<text>我是支付宝小程序</text>
			</view>
			<!-- #endif -->
		</view>
		<uni-countdown class="countdown" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF"
		 border-color="#007AFF" />

		<!-- 注意： url前面要带一个斜线 -->
		<navigator class="navigator" url="/pages/component/test/wh-page" open-type="switchTab" hover-class="other-navigator-hover">
			<button type="default">跳转tab页面</button>
		</navigator>

		<view class="tips">
			<text class="tips-text">{{text}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "超级有趣的小程序"
			}
		},
		onShareAppMessage() {
			return {
				title: '欢迎体验uni-app',
				path: '/pages/component/test/wh-test'
			}
		},
		onLoad(option) {
			
			console.log("-----onLoad-----");
			console.log(option);


			//#ifdef MP-QQ
			//TODO
			//#endif
			
			// #ifdef MP-WEIXIN
			console.log("-----我是微信小程序--- ")
			// #endif
			// #ifdef MP-ALIPAY
			console.log("-----我是支付宝小程序--- ")
			// #endif
		},
		methods: {
			
			mpGetUserInfo(result) {
				console.log('mpGetUserInfo', result);
				if (result.detail.errMsg !== 'getUserInfo:ok') {
					uni.showModal({
						title: '获取用户信息失败',
						content: '错误原因' + result.detail.errMsg,
						showCancel: false
					});
					return;
				}
				this.hasUserInfo = true;
				this.userInfo = result.detail.userInfo;
			},
			
			adload() {
				this.isLoad = true;
			},
			aderror(e) {
				this.adMessage = e.detail.errMsg;
			},
			gotoapi() {
				uni.navigateTo({
					url: "/pages/API/rewarded-video-ad/rewarded-video-ad"
				})
			}
		}
	}
</script>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.ad-tips {
		/* height: 80rpx; */
		width: 750rpx;
		color: #576B95;
		font-size: 30rpx;
		text-align: center;
	}

	.countdown {
		text-align: center;
	}

	.tips {
		position: fixed;
		bottom: 30rpx;
	}

	.navigator {
		width: 750rpx;
		height: 100rpx;
		line-height: 100rpx;
		margin-top: 80rpx;
		text-align: center;
		background-color: #3F536E;
		color: #F0F0F0;
		font-size: 30sp;
		font-weight: 700;
	}
</style>
