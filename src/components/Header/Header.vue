<template>
	<header class="header d-blue-bg">
		<header-top />
		<header-mid />
		<header-bottom />
	</header>
</template>

<script>
	import HeaderTop from "./HeaderTop.vue";
	import HeaderBottom from "./HeaderBottom.vue";
	import HeaderMid from "./HeaderMid.vue";
	export default {
		components: {
			HeaderTop,
			HeaderBottom,
			HeaderMid,
		},
		mounted() {
			$("select").niceSelect();
		},
	};
</script>

<style></style>
