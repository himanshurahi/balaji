<template>
	<Header />
	<section class="breadcrumb__area box-plr-75">
		<div class="container">
			<div class="row">
				<div class="col-xxl-12">
					<div class="breadcrumb__wrapper">
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><a href="index.html">Home</a></li>
								<li class="breadcrumb-item active" aria-current="page">Search</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="shop-area mb-20">
		<div style="height: 20rem" v-if="loading">
			<vue-element-loading
				:active="true"
				spinner="bar-fade-scale"
				text="Searching For Products"
				:size="70"
				:is-full-screen="false"
				background-color="rgba(255, 255, 255, .9)"
			/>
		</div>

		<div class="container" v-if="!loading">
			<div class="row">
				<Sidebar />
				<div class="col-xl-9 col-lg-8">
					<Topbar />
					<div class="tab-content" id="productGridTabContent" ref="products">
						<div
							class="tab-pane fade show active"
							id="FourCol"
							role="tabpanel"
							aria-labelledby="FourCol-tab"
						>
							<div class="tp-wrapper">
								<div class="row g-0">
									<Product v-for="i in 10" :key="i" />
								</div>
							</div>
						</div>
					</div>
					<div class="tp-pagination text-center">
						<div class="row">
							<div class="col-xl-12">
								<div class="basic-pagination pt-30 pb-30">
									<nav>
										<ul>
											<li>
												<a href="shop.html" class="active">1</a>
											</li>
											<li>
												<a href="shop.html">2</a>
											</li>
											<li>
												<a href="shop.html">3</a>
											</li>
											<li>
												<a href="shop.html">5</a>
											</li>
											<li>
												<a href="shop.html">6</a>
											</li>
											<li>
												<a href="shop.html">
													<i class="fal fa-angle-double-right"></i>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
	import Header from "../components/Header/Header.vue";
	import Sidebar from "../components/Products/Sidebar.vue";
	import Topbar from "../components/Products/Topbar.vue";
	import Product from "../components/Products/Product.vue";
	import Footer from "../components/Footer/Footer.vue";
	import {scrollToClass} from "../utils/common-function.js";
	export default {
		components: {Header, Sidebar, Topbar, Product, Footer},
		data() {
			return {
				loading: true,
			};
		},
		mounted() {
			setTimeout(() => {
				this.loading = false;
			}, 2000);
		},
	};
</script>

<style scoped></style>
