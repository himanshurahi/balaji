<template>
	<div class="offcanvas__area cart" :class="{opened: open}">
		<div class="offcanvas__wrapper">
			<div class="offcanvas__close">
				<button
					class="offcanvas__close-btn"
					id="offcanvas__close-btn"
					@click="closeSideCart"
				>
					<i class="fal fa-times"></i>
				</button>
			</div>
			<div class="offcanvas__content">
				<div class="offcanvas__logo mb-40">
					<a href="index.html">
						<img src="assets/img/logo/logo-white.png" alt="logo" />
					</a>
				</div>

				<div class="cart">
					<div class="">
						<ul>
							<li>
								<div class="cart__title">
									<h4>Your Cart</h4>
									<span>(1 Item in Cart)</span>
								</div>
							</li>
							<li>
								<div
									class="cart__item d-flex justify-content-between align-items-center"
									v-for="i in 3"
									:key="i"
								>
									<div class="cart__inner d-flex">
										<div class="cart__thumb">
											<a href="product-details.html">
												<img src="assets/img/cart/20.jpg" alt="" />
											</a>
										</div>
										<div class="cart__details">
											<h6>
												<a href="product-details.html"> Samsung C49J89: £875, Debenhams Plus </a>
											</h6>
											<div class="cart__price">
												<span>$255.00</span>
											</div>
										</div>
									</div>
									<div class="cart__del">
										<a href="#"><i class="fal fa-times"></i></a>
									</div>
								</div>
							</li>
							<li>
								<div class="cart__sub d-flex justify-content-between align-items-center">
									<h6>Subtotal</h6>
									<span class="cart__sub-total">$255.00</span>
								</div>
							</li>
							<li>
								<router-link :to="{name: 'Cart'}" @click="closeSideCart" class="wc-cart mb-10"
									>Checkout / View Cart</router-link
								>
								<!-- <a href="checkout.html" class="wc-checkout">Checkout</a> -->
							</li>
						</ul>
					</div>
				</div>

				<div class="offcanvas__action"></div>
			</div>
		</div>
	</div>
	<!-- <div class="body-overlay"></div> -->
</template>

<script>
	export default {
		props: ["open"],
		mounted() {
			// $(".wc-cart").on("click", function () {
			// 	$(".cart").removeClass("opened");
			// 	$(".body-overlay").removeClass("opened");
			// });
		},
		methods: {
			closeSideCart() {
				this.$emit("close");
			},
		},
	};
</script>

<style></style>
