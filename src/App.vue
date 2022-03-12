<template>
	<Header />
	<vue-element-loading
		:active="loading"
		is-full-screen
		spinner="bar-fade-scale"
		text="Please Wait.."
		:size="70"
		background-color="white"
	/>
	<router-view v-slot="{Component}" v-if="!loading">
		<transition name="fade" mode="out-in">
			<div :key="$route.fullPath">
				<component :is="Component" />
			</div>
		</transition>
	</router-view>
	<!-- <router-view v-if="!loading" /> -->
</template>

<script>
	import Header from "./components/Header/Header.vue";
	export default {
		components: {Header},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 3000);
		},
	};
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
