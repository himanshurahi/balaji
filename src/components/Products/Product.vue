<template>
	<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-3">
		<div class="product__item product__item-d">
			<div class="product__thumb fix">
				<div class="product-image w-img">
					<router-link :to="{name: 'ProductDetails', params: {slug: 'name'}}">
						<img src="assets/img/product/tp-2.jpg" alt="product" />
					</router-link>
				</div>
				<div class="product-action">
					<a
						href="#"
						class="icon-box icon-box-1"
						data-bs-toggle="modal"
						data-bs-target="#productModalId"
					>
						<i class="fal fa-eye"></i>
						<i class="fal fa-eye"></i>
					</a>
					<a href="#" class="icon-box icon-box-1">
						<i class="fal fa-heart"></i>
						<i class="fal fa-heart"></i>
					</a>
					<a href="#" class="icon-box icon-box-1">
						<i class="fal fa-layer-group"></i>
						<i class="fal fa-layer-group"></i>
					</a>
				</div>
			</div>
			<div class="product__content-3">
				<h6><a href="product-details.html">Men Size Yellow Basketball Jerseys</a></h6>
				<div class="rating mb-5">
					<ul>
						<li>
							<a href="#"><i class="fal fa-star"></i></a>
						</li>
						<li>
							<a href="#"><i class="fal fa-star"></i></a>
						</li>
						<li>
							<a href="#"><i class="fal fa-star"></i></a>
						</li>
						<li>
							<a href="#"><i class="fal fa-star"></i></a>
						</li>
						<li>
							<a href="#"><i class="fal fa-star"></i></a>
						</li>
					</ul>
					<span>(01 review)</span>
				</div>
				<div class="price mb-10">
					<span>$110-$150</span>
				</div>
			</div>
			<div class="product__add-cart-s text-center">
				<button
					type="button"
					class="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
				>
					Add to Cart
				</button>
				<button
					type="button"
					class="wc-checkout d-flex align-items-center justify-content-center w-100"
					data-bs-toggle="modal"
					data-bs-target="#productModalId"
				>
					Quick View
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
