<template>
	<div class="slider-area">
		<div class="swiper-container slider__active">
			<div class="slider-wrapper swiper-wrapper">
				<div
					class="single-slider swiper-slide slider-height d-flex align-items-center"
					data-background="assets/img/slider/01-slide-1.jpg"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-5">
								<div class="slider-content">
									<div class="slider-top-btn" data-animation="fadeInLeft" data-delay="1.5s">
										<a href="product-details.html" class="st-btn b-radius">HOT DEALS</a>
									</div>
									<h2
										data-animation="fadeInLeft"
										data-delay="1.7s"
										class="pt-15 slider-title pb-5"
									>
										SALE 30% OFF <br />
										FUTURE FOOTBALL BOOTS
									</h2>
									<p class="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.9s">
										Discount 30% On Products & Free Shipping
									</p>
									<div class="slider-bottom-btn mt-75">
										<a
											data-animation="fadeInUp"
											data-delay="1.15s"
											href="shop.html"
											class="st-btn-b b-radius"
											>Discover now</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /single-slider -->
				<div
					class="single-slider swiper-slide slider-height d-flex align-items-center"
					data-background="assets/img/slider/01-slide-2.jpg"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-5">
								<div class="slider-content">
									<div class="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
										<a href="product-details.html" class="st-btn b-radius">New Arraivels</a>
									</div>
									<h2
										data-animation="fadeInLeft"
										data-delay="1.5s"
										class="pt-15 slider-title pb-5"
									>
										SALE 20% OFF<br />
										SAMSUNG GALAXY BUDS
									</h2>
									<p class="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.7s">
										Discount 30% On Products & Free Shipping
									</p>
									<div class="slider-bottom-btn mt-75">
										<a
											data-animation="fadeInUp"
											data-delay="1.9s"
											href="shop.html"
											class="st-btn-b b-radius"
											>Discover now</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /single-slider -->
				<div
					class="single-slider swiper-slide slider-height d-flex align-items-center"
					data-background="assets/img/slider/01-slide-3.jpg"
				>
					<div class="container">
						<div class="row">
							<div class="col-xl-5">
								<div class="slider-content">
									<div class="slider-top-btn" data-animation="fadeInLeft" data-delay="1s">
										<a href="product-details.html" class="st-btn b-radius">New DEALS</a>
									</div>
									<h2
										data-animation="fadeInLeft"
										data-delay="1.5s"
										class="pt-15 slider-title pb-5"
									>
										SALE 30% OFF <br />
										FUTURE FOOTBALL BOOTS
									</h2>
									<p class="pr-20 slider_text" data-animation="fadeInLeft" data-delay="1.8s">
										Discount 30% On Products & Free Shipping
									</p>
									<div class="slider-bottom-btn mt-75">
										<a
											data-animation="fadeInUp"
											data-delay="1.10s"
											href="shop.html"
											class="st-btn-b b-radius"
											>Discover now</a
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /single-slider -->
				<div class="main-slider-paginations"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			$("[data-background").each(function () {
				$(this).css(
					"background-image",
					"url( " + $(this).attr("data-background") + "  )"
				);
			});
			$("[data-width]").each(function () {
				$(this).css("width", $(this).attr("data-width"));
			});
			$("[data-bg-color]").each(function () {
				$(this).css("background-color", $(this).attr("data-bg-color"));
			});
			if (jQuery(".slider__active").length > 0) {
				let sliderActive1 = ".slider__active";
				let sliderInit1 = new Swiper(sliderActive1, {
					// Optional parameters
					slidesPerView: 1,
					slidesPerColumn: 1,
					paginationClickable: true,
					loop: true,
					effect: "fade",

					autoplay: {
						delay: 5000,
					},

					// If we need pagination
					pagination: {
						el: ".main-slider-paginations",
						// dynamicBullets: true,
						clickable: true,
					},

					// Navigation arrows
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					},

					a11y: false,
				});

				function animated_swiper(selector, init) {
					let animated = function animated() {
						$(selector + " [data-animation]").each(function () {
							let anim = $(this).data("animation");
							let delay = $(this).data("delay");
							let duration = $(this).data("duration");

							$(this)
								.removeClass("anim" + anim)
								.addClass(anim + " animated")
								.css({
									webkitAnimationDelay: delay,
									animationDelay: delay,
									webkitAnimationDuration: duration,
									animationDuration: duration,
								})
								.one(
									"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
									function () {
										$(this).removeClass(anim + " animated");
									}
								);
						});
					};
					animated();
					// Make animated when slide change
					init.on("slideChange", function () {
						$(sliderActive1 + " [data-animation]").removeClass("animated");
					});
					init.on("slideChange", animated);
				}

				animated_swiper(sliderActive1, sliderInit1);
			}
			var sliderr = new Swiper(".active-class", {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: ".testimonial-pagination-6",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<span class="' +
							className +
							'">' +
							"<button>" +
							(index + 1) +
							"</button>" +
							"</span>"
						);
					},
				},
				breakpoints: {
					1200: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 1,
					},
					0: {
						slidesPerView: 1,
					},
				},
			});
		},
	};
</script>

<style></style>
