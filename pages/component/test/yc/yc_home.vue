<template>
	<view class="container">
		<view class="title_view">


			<button class="auth_btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">
				<image class="title_avatar" :src="userInfo.avatarUrl"></image>
			</button>


			<view>
				<button class="auth_btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">
					<image src="../../../../static/yc/order.png"></image>
					<view>
						<text class="title_right">我的订单</text>
						<text v-show="pageData.shoporders>0" class="hint"></text>
					</view>

				</button>
				<button class="auth_btn" open-type="getUserInfo" @getuserinfo="mpGetUserInfo">
					<image style="margin-left: 56rpx;" src="../../../../static/yc/income.png"></image>
					<view>
						<text class="title_right">我的收益</text>
						<text v-show="pageData.incomeorders>0" class="hint"></text>
					</view>

				</button>

			</view>
		</view>
		<view class="content_view">
			<view class="content_driver" @click="gotoYongChe()">
				<text>司机出发</text>
				<view>
					<text class="content_car">奥迪A6 白色</text>
					<text class="content_car">京 K56784</text>
				</view>
			</view>

			<view>
				<view class="goods_view_1">

					<view class="goods_item" v-for="(item, index) in leftDataList" :key="index">
						<image class="goods_img" :src="item.thumb_image"></image>
						<text class="goods_title">{{item.shop_name}}</text>

						<view class="range_info">
							<text class="goods_range">{{item.remark}}</text>
							<view class="position">
								<image src="../../../../static/yc/position.png"></image>
								<text>{{item.distance}}米</text>
							</view>

						</view>
					</view>
				</view>

				<view class="goods_view_1">

					<view class="goods_item" v-for="(item, index) in rightDataList" :key="index">
						<image class="goods_img" :src="item.thumb_image"></image>
						<text class="goods_title">{{item.shop_name}}</text>

						<view class="range_info">
							<text class="goods_range">{{item.remark}}</text>
							<view class="position">
								<image src="../../../../static/yc/position.png"></image>
								<text>{{item.distance}}米</text>
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	var util = require('../../../../common/util.js');
	var formatLocation = util.formatLocation;

	export default {
		data() {
			return {

				userInfo: {
					nick: '',
					avatarUrl: '../../../../static/yc/icon_user.png'
				},
				location: {},
				leftDataList: [],
				rightDataList: [],

				pageData: {

					"shoporders": 0,
					"incomeorders": 1,
					"shoplist": [{
							"shop_id": 123,
							"shop_name": "东北烧烤王东北烧烤王东北烧烤王东北烧烤王东北烧烤王东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						},
						{
							"shop_id": 123,
							"shop_name": "东北烧烤王",
							"thumb_image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1288470221,1076376886&fm=26&gp=0.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "西单人气烧烤第一",
							"distance": "700"
						},
						{
							"shop_id": 13,
							"shop_name": "望京小腰",
							"thumb_image": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597140964732&di=5a12dd03fd25bb0f3e555b9db6fca475&imgtype=0&src=http%3A%2F%2Fimages4.c-ctrip.com%2Ftarget%2Fhotel%2F100000%2F99227%2F7c938ef25b134352a2e65515deb91ed6_550_412.jpg",
							"lng": "116.406568",
							"lat": "39.936625",
							"remark": "座无虚席",
							"distance": "3421"
						}
					]
				}
			}
		},
		onLoad() {
			this.tologin();
			let pageData = this.pageData;

			for (let i = 0; i < pageData.shoplist.length; i++) {
				if (i % 2 == 0) {
					this.leftDataList.push(pageData.shoplist[i]);
				} else {
					this.rightDataList.push(pageData.shoplist[i])
				}
			}
		},
		onShow() {
			this.getLocation();
		},

		onReachBottom() {
			console.log('--------onReachBottom-------')
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
				this.userInfo = result.detail.userInfo;
				console.log('1111', this.userInfo);
			},
			tologin() {
				uni.login({
					provider: 'weixin',

					success: (res) => {
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						// this.login('weixin');

						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log('用户昵称为：' + infoRes.userInfo.nickName);
							}
						});
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			},
			actionSheetTap() {
				let thisPage = this;
				uni.showModal({
					title: '获取位置失败',
					content: '请允许 易到生活 使用您的定位，以便更好地服务您',
					showCancel: false,
					success: function(res) {
						if (res.confirm) {
							thisPage.openSetting();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			async getLocation() {
				// #ifdef APP-PLUS
				let status = await this.checkPermission();
				if (status !== 1) {
					return;
				}
				// #endif
				// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-QQ
				let status = await this.getSetting();
				console.log('-----status------' + status)
				if (status === 2) {
					// this.openSetting();
					this.actionSheetTap();
					return;
				}
				// #endif

				this.doGetLocation();
			},
			doGetLocation() {
				uni.getLocation({
					success: (res) => {
						this.hasLocation = true;
						this.location = formatLocation(res.longitude, res.latitude);
						console.log(this.location)
					},
					fail: (err) => {
						// #ifdef MP-BAIDU
						if (err.errCode === 202 || err.errCode === 10003) { // 202模拟器 10003真机 user deny
							this.showConfirm();
						}
						// #endif
						// #ifndef MP-BAIDU
						if (err.errMsg.indexOf("auth deny") >= 0) {
							uni.showToast({
								title: "访问位置被拒绝"
							})
						} else {
							uni.showToast({
								title: err.errMsg
							})
						}
						// #endif
					}
				})
			},
			openSetting: function() {
				uni.openSetting({
					success: (res) => {
						if (res.authSetting && res.authSetting['scope.userLocation']) {
							this.doGetLocation();

							console.log("------openSetting success-------")
						}
					},
					fail: (err) => {
						console.log(err)
						console.log("------openSetting fail-------")
					}
				})
			},
			getSetting: function() {
				return new Promise((resolve, reject) => {
					uni.getSetting({
						success: (res) => {
							if (res.authSetting['scope.userLocation'] === undefined) {
								resolve(0);
								return;
							}
							if (res.authSetting['scope.userLocation']) {
								resolve(1);
							} else {
								resolve(2);
							}
						}
					});
				});
			},
			gotoYongChe() {
				console.log("---------gotoYongChe---------");
				uni.navigateToMiniProgram({
					appId: 'wx7587dec281a28995',
					path: '/pages/myJourney/myJourney',
					extraData: {
						'data1': 'test'
					},
					success(res) {
						// 打开成功
					}
				})
			}
		}
	}
</script>

<style>
	view {
		display: flex;
		box-sizing: border-box;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.content_view {
		flex-direction: column;
	}

	.title_view {
		width: 750rpx;
		padding: 20rpx;
		flex-direction: row;
		box-sizing: border-box;
		align-items: center;
		justify-content: space-between;
		border-bottom: #c8c8c8 solid 1rpx;
	}

	.title_view image {
		width: 40rpx;
		height: 40rpx;
	}

	.title_avatar {
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
	}

	.title_right {
		color: #909399;
		font-size: 20rpx;
	}

	.hint {
		width: 12rpx;
		height: 12rpx;
		margin-left: 2rpx;
		border-radius: 6rpx;
		background-color: #FF5252;
	}

	.content_view {
		padding: 16rpx;
		background-color: #F4F5FAA;
	}

	.content_driver {
		flex-direction: row;
		justify-content: space-between;
		width: 710rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
		color: #F0F0F0;
		background-color: #C0C0C0;
		padding: 20rpx;
		font-size: 24sp;
	}

	.content_car {
		font-size: 10sp;
	}

	.goods_view {
		width: 750rpx;
		flex-wrap: wrap;
	}

	.goods_item {
		width: 345rpx;
		/* height: 450rpx; */
		flex-direction: column;
		margin-top: 20rpx;
		padding-bottom: 20rpx;
		border-radius: 10rpx;

		background-color: #FFFFFF;
		box-shadow: 0 3rpx 12rpx 0 rgba(0, 0, 0, 0.08);
		border-radius: 40rpx;
		overflow: hidden;
	}

	.goods_img {
		width: 345rpx;
		height: 345rpx;
		background-color: #969799;
	}

	.goods_title {
		margin-top: 10rpx;
		margin-left: 24rpx;
		color: #323233;

		font-family: PingFangSC-Semibold;
		font-size: 26rpx;
		color: #323232;
		letter-spacing: 0;

		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.goods_range {

		display: inline-block;
		text-align: center;
		max-width: 200rpx;
		margin-left: 24rpx;

		font-family: PingFangSC-Regular;
		font-size: 18rpx;
		color: #FF5252;
		padding: 5rpx 10rpx;
		background: #FFEBEB;
		border-radius: 4rpx;
	}

	.goods_view_1 {
		width: 345rpx;
		margin-left: 20rpx;
		flex-direction: column;
	}

	.range_info {
		flex-direction: row;
		justify-content: space-between;
	}

	.position {
		display: flex;
		align-items: center;


		font-family: PingFangSC-Regular;
		margin-right: 20rpx;
		font-size: 20rpx;
		color: #888888;

	}

	.position image {
		width: 17rpx;
		height: 17rpx;
	}


	.auth_btn {
		display: flex;
		align-items: center;
		margin-left: 0;
		line-height: 86rpx;
	}

	.auth_btn::after {
		height: 50rpx;
		border: none;
	}
</style>
