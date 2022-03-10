<template>
	<vue-element-loading
		:active="loading"
		is-full-screen
		spinner="bar-fade-scale"
		text="Please Wait.."
		:size="70"
		background-color="white"
	/>
	<router-view />
</template>

<script>
	import VueElementLoading from "vue-element-loading";
	export default {
		components: {
			VueElementLoading,
		},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 4000);
		},
	};
</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
