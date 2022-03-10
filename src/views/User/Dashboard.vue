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
	<div class="container user_dashboard">
		<div class="row">
			<div class="col-md-3">
				<!-- Tabs nav -->
				<div
					class="nav flex-column nav-pills nav-pills-custom"
					id="v-pills-tab"
					role="tablist"
					aria-orientation="vertical"
				>
					<a
						class="nav-link mb-3 p-3 shadow active"
						id="v-pills-home-tab"
						data-toggle="pill"
						role="tab"
						aria-controls="v-pills-home"
						aria-selected="true"
						@click="changeTab('dashboard')"
					>
						<i class="fa fa-box"></i>
						<span class="font-weight-bold small text-uppercase">Dashboard</span></a
					>
					<a
						class="nav-link mb-3 p-3 shadow"
						id="v-pills-profile-tab"
						data-toggle="pill"
						role="tab"
						aria-controls="v-pills-profile"
						aria-selected="false"
						@click="changeTab('personal_info')"
					>
						<i class="fa fa-user mr-2"></i>
						<span class="font-weight-bold small text-uppercase"
							>Personal Information</span
						></a
					>

					<a
						class="nav-link mb-3 p-3 shadow"
						id="v-pills-messages-tab"
						data-toggle="pill"
						role="tab"
						aria-controls="v-pills-messages"
						aria-selected="false"
						@click="changeTab('orders')"
					>
						<i class="fa fa-box mr-2"></i>
						<span class="font-weight-bold small text-uppercase">Orders</span></a
					>

					<a
						class="nav-link mb-3 p-3 shadow"
						id="v-pills-settings-tab"
						data-toggle="pill"
						role="tab"
						aria-controls="v-pills-settings"
						aria-selected="false"
					>
						<i class="fa fa-cross mr-2"></i>
						<span class="font-weight-bold small text-uppercase">Logout</span></a
					>
				</div>
			</div>

			<div class="col-md-9">
				<!-- Tabs content -->
				<div class="tab-content" id="v-pills-tabContent">
					<div
						class="tab-pane fade shadow rounded bg-white p-5"
						id="v-pills-home"
						role="tabpanel"
						aria-labelledby="v-pills-home-tab"
						:class="{'active show': activeTab == 'dashboard'}"
					>
						<h4 class="font-italic mb-4">Dashboard</h4>
						<p class="font-italic text-muted mb-2">Here you can manage your account</p>
					</div>

					<div
						class="tab-pane fade shadow rounded bg-white p-5"
						id="v-pills-profile"
						role="tabpanel"
						aria-labelledby="v-pills-profile-tab"
						:class="{'active show': activeTab == 'personal_info'}"
					>
						<h4 class="font-italic mb-4">Personal Information</h4>
						<div class="basic-login mb-50">
							<form action="#">
								<label for="name">Username</label>
								<input id="name" type="text" placeholder="Enter Username" />
								<label for="name">Email</label>
								<input id="name" type="email" placeholder="Enter Email" />
								<label for="pass">Password</label>
								<input id="pass" type="password" placeholder="Enter password..." />
								<!-- <div class="login-action mb-10 fix"></div> -->
								<a href="login.html" class="tp-in-btn w-100">Update Profile</a>
							</form>
						</div>
					</div>

					<div
						class="tab-pane fade shadow rounded bg-white p-5"
						id="v-pills-messages"
						role="tabpanel"
						aria-labelledby="v-pills-messages-tab"
						:class="{'active show': activeTab == 'orders'}"
					>
						<h4 class="font-italic mb-4">Orders</h4>
						<table class="table text-center">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Order ID</th>
									<th scope="col">Date</th>
									<th scope="col">Action</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>123</td>
									<td>12-12-22</td>
									<td>View</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div
						class="tab-pane fade shadow rounded bg-white p-5"
						id="v-pills-settings"
						role="tabpanel"
						aria-labelledby="v-pills-settings-tab"
					>
						<h4 class="font-italic mb-4">Confirm booking</h4>
						<p class="font-italic text-muted mb-2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
							fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</p>
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
		data() {
			return {
				activeTab: "dashboard",
			};
		},
		methods: {
			changeTab(tab) {
				this.activeTab = tab;
			},
		},
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
	}
	.fa {
		margin-right: 10px;
	}
	/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*/
	.nav-pills-custom .nav-link {
		color: white;
		background: #263c97;
		position: relative;
		cursor: pointer;
	}

	.nav-pills-custom .nav-link.active {
		color: white;
		background: #0f226b;
	}
	.nav-pills-custom .nav-link:hover {
		background: #0f226b;
	}

	/* Add indicator arrow for the active tab */
	@media (min-width: 992px) {
		.nav-pills-custom .nav-link::before {
			content: "";
			display: block;
			border-top: 8px solid transparent;
			border-left: 10px solid #fff;
			border-bottom: 8px solid transparent;
			position: absolute;
			top: 50%;
			right: -10px;
			transform: translateY(-50%);
			opacity: 0;
		}
	}

	.nav-pills-custom .nav-link.active::before {
		opacity: 1;
	}

	/*
*
* ==========================================
* FOR DEMO PURPOSE
* ==========================================
*/
</style>
