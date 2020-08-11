<template>
	<view class="container">
		<view class="swiper-wrap">
			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">

				<swiper-item v-for="(item, index) in dataList" :key="index">
					<view class="swiper-item">
						<image class="image" :src="item.url" mode="aspectFill" />
						<text class="swiper-text">{{item.content}}</text>
					</view>
				</swiper-item>

			</swiper>
			<view class="count_view">
				<text>疯狂抢购中，还剩</text>
				<uni-countdown class="countdown" :day="1" :hour="2" :minute="30" :second="0" color="#FFFFFF" background-color="#007AFF"
				 border-color="#007AFF" />
			</view>

			<div class="cell-item" v-for="(item, index) in dataList" :key="index" @click=jump>
				<image class="cell-image" :src="item.url" mode="aspectFill" />
				<text>{{item.content}}</text>
			</div>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "超级有趣的小程序",
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,

				dataList: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
			}
		},
		onLoad() {},

		onPullDownRefresh() {
			console.log('refresh');
			
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},

		methods: {
			jump(){
				uni.navigateTo({
					url: './yc/yc_home'
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

	.swiper-wrap {
		width: 750rpx;
	}

	.swiper {
		/* height: 300rpx; */
		width: 750rpx;
		height: 498rpx;
	}

	.swiper-item {
		position: relative;
		display: block;
		text-align: center;
	}

	.swiper-text {
		position: absolute;
		top: 20rpx;
		left: 20rpx;
		color: #FFFFFF;
		font-weight: bold;
		font-size: 40rpx;
	}

	.image {
		width: 750rpx;
		height: 498rpx;
	}

	.count_view {
		padding: 20rpx;
		background-color: #ffffff;
	}

	.countdown {
		text-align: center;
	}

	.list {
		display: flex;
		flex-direction: column;
	}

	.cell-item {
		width: 750rpx;
		height: 240rpx;
		margin-top: 15rpx;
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		padding: 20rpx;
		background-color: #FFFFFF;
	}

	.cell-image {
		width: 200rpx;
		height: 200rpx;
		margin-right: 15rpx;
		object-fit: fill;
	}
</style>
