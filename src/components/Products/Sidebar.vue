<template>
	<div class="col-xl-3 col-lg-4">
		<div class="product-widget mb-30">
			<h5 class="pt-title">Product categories</h5>
			<div class="widget-category-list mt-20">
				<form action="#">
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-1" name="cat-item" />
						<label for="cat-item-1">Clothing &amp; Apparel <span>(12)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-2" name="cat-item" />
						<label for="cat-item-2">Consumer Electrics <span>(60)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-3" name="cat-item" />
						<label for="cat-item-3">Computers &amp; Technologies <span>(41)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-4" name="cat-item" />
						<label for="cat-item-4">Phones &amp; Accessories <span>(28)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-5" name="cat-item" />
						<label for="cat-item-5">Babies &amp; Moms <span>(21)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-7" name="cat-item" />
						<label for="cat-item-7">Books &amp; Office <span>(62)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-8" name="cat-item" />
						<label for="cat-item-8">Sport &amp; Outdoo <span>(22)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-9" name="cat-item" />
						<label for="cat-item-9">Chairs &amp; Stools <span>(20)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-10" name="cat-item" />
						<label for="cat-item-10">Furniture &amp; Acessories <span>(06)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-11" name="cat-item" />
						<label for="cat-item-11">Kitchen &amp; Tableware <span>(30)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-12" name="cat-item" />
						<label for="cat-item-12">Lighting <span>(30)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="cat-item-13" name="cat-item" />
						<label for="cat-item-13">Armchairs &amp; Chaises <span>(30)</span></label>
					</div>
				</form>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Filter By Price</h5>
			<div class="price__slider mt-30">
				<div
					id="slider-range"
					class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
				>
					<div
						class="ui-slider-range ui-corner-all ui-widget-header"
						style="left: 0%; width: 100%"
					></div>
					<span
						tabindex="0"
						class="ui-slider-handle ui-corner-all ui-state-default"
						style="left: 0%"
					></span
					><span
						tabindex="0"
						class="ui-slider-handle ui-corner-all ui-state-default"
						style="left: 100%"
					></span>
				</div>
				<div>
					<form action="#" class="s-form mt-20">
						<input type="text" id="amount" readonly="" />
						<button type="submit" class="tp-btn-square-lg">Filter</button>
					</form>
				</div>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Choose Color</h5>
			<div class="product__color mt-20">
				<ul>
					<li>
						<a href="#" class="black"></a>
					</li>
					<li>
						<a href="#" class="blue"></a>
					</li>
					<li>
						<a href="#" class="red"></a>
					</li>
					<li>
						<a href="#" class="yellow"></a>
					</li>
					<li>
						<a href="#" class="pink"></a>
					</li>
					<li>
						<a href="#" class="brown"></a>
					</li>
					<li>
						<a href="#" class="green"></a>
					</li>
					<li>
						<a href="#" class="oragne"></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Choose Rating</h5>
			<div class="widget-category-list mt-20">
				<form action="#">
					<div class="single-widget-rating">
						<input type="checkbox" id="star-item-1" name="star-item" />
						<label for="star-item-1">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<span>(54)</span>
						</label>
					</div>
					<div class="single-widget-rating">
						<input type="checkbox" id="star-item-2" name="star-item" />
						<label for="star-item-2">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fal fa-star"></i>
							<span>(37)</span>
						</label>
					</div>
					<div class="single-widget-rating">
						<input type="checkbox" id="star-item-3" name="star-item" />
						<label for="star-item-3">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<span>(7)</span>
						</label>
					</div>
					<div class="single-widget-rating">
						<input type="checkbox" id="star-item-4" name="star-item" />
						<label for="star-item-4">
							<i class="fas fa-star"></i>
							<i class="fas fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<span>(5)</span>
						</label>
					</div>
					<div class="single-widget-rating">
						<input type="checkbox" id="star-item-5" name="star-item" />
						<label for="star-item-5">
							<i class="fas fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<i class="fal fa-star"></i>
							<span>(3)</span>
						</label>
					</div>
				</form>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Choose Size</h5>
			<div class="widget-category-list mt-20">
				<form action="#">
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-1" name="choose-item" />
						<label for="choose-item-1">S <span>(12)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-2" name="choose-item" />
						<label for="choose-item-2">L <span>(60)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-3" name="choose-item" />
						<label for="choose-item-3">M <span>(41)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-4" name="choose-item" />
						<label for="choose-item-4">XXL <span>(28)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-5" name="choose-item" />
						<label for="choose-item-5">2XL <span>(21)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="choose-item-7" name="choose-item" />
						<label for="choose-item-7">3XL <span>(62)</span></label>
					</div>
				</form>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Choose Brand</h5>
			<div class="widget-category-list mt-20">
				<form action="#">
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-1" name="brand-item" />
						<label for="brand-item-1">CarRentals <span>(12)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-2" name="brand-item" />
						<label for="brand-item-2">CarVoodoo <span>(60)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-3" name="brand-item" />
						<label for="brand-item-3">Creative <span>(41)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-4" name="brand-item" />
						<label for="brand-item-4">Impact <span>(28)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-5" name="brand-item" />
						<label for="brand-item-5">IQVia <span>(21)</span></label>
					</div>
					<div class="single-widget-category">
						<input type="checkbox" id="brand-item-7" name="brand-item" />
						<label for="brand-item-7">LeadsGreen <span>(62)</span></label>
					</div>
				</form>
			</div>
		</div>
		<div class="product-widget mb-30">
			<h5 class="pt-title">Special Offers</h5>
			<div class="product__sm mt-20">
				<ul>
					<li class="product__sm-item d-flex align-items-center">
						<div class="product__sm-thumb mr-20">
							<a href="product-details.html">
								<img src="assets/img/product/sm-1.jpg" alt="" />
							</a>
						</div>
						<div class="product__sm-content">
							<h5 class="product__sm-title">
								<a href="product-details.html">Classic Leather Backpack Daypack 2022</a>
							</h5>
							<div class="product__sm-price">
								<span class="price">$300.00</span>
							</div>
						</div>
					</li>
					<li class="product__sm-item d-flex align-items-center">
						<div class="product__sm-thumb mr-20">
							<a href="product-details.html">
								<img src="assets/img/product/sm-2.jpg" alt="" />
							</a>
						</div>
						<div class="product__sm-content">
							<h5 class="product__sm-title">
								<a href="product-details.html">Samsung Galaxy A12, 32GB, Black - (Locked)</a>
							</h5>
							<div class="product__sm-price">
								<span class="price">$150.00</span>
							</div>
						</div>
					</li>
					<li class="product__sm-item d-flex align-items-center">
						<div class="product__sm-thumb mr-20">
							<a href="product-details.html">
								<img src="assets/img/product/sm-3.jpg" alt="" />
							</a>
						</div>
						<div class="product__sm-content">
							<h5 class="product__sm-title">
								<a href="#">Coffee Maker AH240a Full Function</a>
							</h5>
							<div class="product__sm-price">
								<span class="price">$300.00</span>
							</div>
						</div>
					</li>
					<li class="product__sm-item d-flex align-items-center">
						<div class="product__sm-thumb mr-20">
							<a href="product-details.html">
								<img src="assets/img/product/sm-4.jpg" alt="" />
							</a>
						</div>
						<div class="product__sm-content">
							<h5 class="product__sm-title">
								<a href="product-details.html">Imported Wooden Felt Cushion Chair</a>
							</h5>
							<div class="product__sm-price">
								<span class="price">$120.00</span>
							</div>
						</div>
					</li>
					<li class="product__sm-item d-flex align-items-center">
						<div class="product__sm-thumb mr-20">
							<a href="product-details.html">
								<img src="assets/img/product/sm-5.jpg" alt="" />
							</a>
						</div>
						<div class="product__sm-content">
							<h5 class="product__sm-title">
								<a href="product-details.html">Sunhouse Decorative Lights - Imported</a>
							</h5>
							<div class="product__sm-price">
								<span class="price">$110.00</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
