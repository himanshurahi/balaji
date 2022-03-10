<template>
	<Header />
	<slider />
	<features />
	<banner-area />
	<top-sell />
	<banner-area />
	<top-products />
	<sliding-text />
	<recommended-products />
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
		mounted() {
			console.log("Home mounted");
		},
	};
</script>
