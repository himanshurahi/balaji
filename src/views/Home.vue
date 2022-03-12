<template>
	<div style="height: 400px" v-if="loading">
		<vue-element-loading
			:active="true"
			spinner="bar-fade-scale"
			text="Please Wait.."
			:size="70"
			background-color="white"
		/>
	</div>
	<div v-if="!loading">
		<slider />
		<features />
		<banner-area />
		<top-sell />
		<banner-area />
		<top-products />
		<sliding-text />
		<recommended-products />
	</div>
	<Footer />
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from "@/components/HelloWorld.vue";
	import Header from "../components/Header/Header.vue";
	import Slider from "../components/Slider/Slider.vue";
	import Features from "../components/Features/Features.vue";
	import BannerArea from "../components/BannerArea/BannerArea.vue";
	import TopSell from "../components/TopSell/TopSell.vue";
	import TopProducts from "../components/TopProducts/TopProducts.vue";
	import SlidingText from "../components/Slider/SlidingText.vue";
	import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts.vue";
	import Footer from "../components/Footer/Footer.vue";
	export default {
		name: "Home",
		components: {
			HelloWorld,
			Header,
			Slider,
			Features,
			BannerArea,
			TopSell,
			TopProducts,
			SlidingText,
			RecommendedProducts,
			Footer,
		},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			console.log("Home mounted");
			setTimeout(() => {
				this.loading = false;
			}, 2000);
		},
	};
</script>
