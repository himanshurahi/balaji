<template>
	<div class="col-lg-6">
		<div class="basic-login mb-50">
			<h5>Login</h5>
			<form action="#">
				<label for="name">Username or email address <span>*</span></label>
				<input id="name" type="text" placeholder="Enter Username" />
				<label for="pass">Password <span>*</span></label>
				<input id="pass" type="password" placeholder="Enter password..." />
				<div class="login-action mb-10 fix">
					<span class="log-rem f-left">
						<input id="remember" type="checkbox" />
						<label for="remember">Remember me</label>
					</span>
					<span class="forgot-login f-right">
						<a href="#">Lost your password?</a>
					</span>
				</div>
				<a href="login.html" class="tp-in-btn w-100">log in</a>
			</form>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
