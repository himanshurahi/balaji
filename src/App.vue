<template>
	<vue-element-loading
		:active="loading"
		is-full-screen
		spinner="bar-fade-scale"
		text="Please Wait.."
		:size="70"
		background-color="white"
	/>
	<router-view v-if="!loading" />
</template>

<script>
	export default {
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
		transition: opacity 1s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
