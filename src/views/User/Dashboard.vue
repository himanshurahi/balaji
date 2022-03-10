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
	<div class="row">
		<div class="col-lg-12">
			<div class="container user_dashboard">
				<div class="row">
					<div class="col-lg-2 user-sidebar">
						<ul>
							<li>Dashboard</li>
							<li>Orders</li>
							<li>Address Book</li>
							<li>Logout</li>
						</ul>
					</div>
					<div class="col-lg-10">
						<table>
							<thead>
							
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Footer />
</template>

<script>
	import Header from "../../components/Header/Header.vue";
	import Footer from "../../components/Footer/Footer.vue";
	export default {
		components: {Header, Footer},
	};
</script>

<style scoped>
	.row {
		margin: 0px;
	}
	.user-sidebar ul li {
		padding: 10px;
		text-align: center;
		background-color: #263c97;
		color: white;
		cursor: pointer;
		margin: 5px;
		border-radius: 5px;
	}
	.user-sidebar ul li:hover {
		background-color: #122572;
	}
	.user_dashboard {
		padding: 30px;
	}
	.user_dashboard .row {
		padding: 10px;
		border: 1px solid #ccc;
	}
</style>
