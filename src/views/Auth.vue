<template>
	<Header />
	<div
		class="page-banner-area page-banner-height-2"
		data-background="assets/img/banner/page-banner-4.jpg"
	>
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="page-banner-content text-center">
						<h4 class="breadcrumb-title">My account</h4>
						<div class="breadcrumb-two">
							<nav>
								<nav class="breadcrumb-trail breadcrumbs">
									<ul class="breadcrumb-menu">
										<li class="breadcrumb-trail">
											<a href="index.html"><span>Home</span></a>
										</li>
										<li class="trail-item">
											<span>My account</span>
										</li>
									</ul>
								</nav>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="account-area mt-70 mb-70">
		<div class="container">
			<div class="row">
				<Login />
                <Register />
			
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
	import Header from "../components/Header/Header.vue";
	import Footer from "../components/Footer/Footer.vue";
	import Login from "../components/Auth/Login.vue";
	import Register from "../components/Auth/Register.vue";
	export default {
		components: {Header, Footer, Login, Register},
	};
</script>

<style></style>
