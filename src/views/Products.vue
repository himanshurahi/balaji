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
								<li class="breadcrumb-item active" aria-current="page">Shop</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</section>

	<div class="shop-area mb-20">
		<div class="container">
			<div class="row">
				<Sidebar />
				<div class="col-xl-9 col-lg-8">
					<div class="shop-banner mb-30">
						<div class="banner-image">
							<img class="banner-l" src="assets/img/banner/sl-banner.jpg" alt="" />
							<img class="banner-sm" src="assets/img/banner/sl-banner-sm.png" alt="" />
							<div class="banner-content text-center">
								<p class="banner-text mb-30">
									Hurry Up! <br />
									Free Shipping All Order Over $99
								</p>
								<a href="shop.html" class="st-btn-d b-radius">Discover now</a>
							</div>
						</div>
					</div>
					<Topbar />
					<div class="tab-content" id="productGridTabContent">
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
	export default {
		components: {Header, Sidebar, Topbar, Product, Footer},
	};
</script>

<style></style>
