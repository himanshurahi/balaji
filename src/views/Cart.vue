<template>
	<Header />
	<section class="checkout-area p-5">
		<div class="container">
			<form action="#">
				<div class="row">
					<div class="col-lg-6 col-sm-12">
						<div class="checkbox-form">
							<h3>Billing Details</h3>
							<div class="row">
								<div>
									<i class="fa fa-map"></i> Deliver to
									<div
										class="card shadow mt-3 address"
										:class="{active: i == address}"
										v-for="i in 3"
										:key="i"
										@click="selectAddress(i)"
									>
										<div class="card-body">
											<h5 class="card-title">Himanshu Rahi</h5>
											<p class="card-text">xxx-xxx--xxx DelhiS</p>
										</div>
									</div>
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-md-12">
									<div class="country-select">
										<label>Country <span class="required">*</span></label>
										<select style="display: none">
											<option value="volvo">bangladesh</option>
											<option value="saab">Algeria</option>
											<option value="mercedes">Afghanistan</option>
											<option value="audi">Ghana</option>
											<option value="audi2">Albania</option>
											<option value="audi3">Bahrain</option>
											<option value="audi4">Colombia</option>
											<option value="audi5">Dominican Republic</option>
										</select>
										<div class="nice-select" tabindex="0">
											<span class="current">bangladesh</span>
											<ul class="list">
												<li data-value="volvo" class="option selected">bangladesh</li>
												<li data-value="saab" class="option">Algeria</li>
												<li data-value="mercedes" class="option">Afghanistan</li>
												<li data-value="audi" class="option">Ghana</li>
												<li data-value="audi2" class="option">Albania</li>
												<li data-value="audi3" class="option">Bahrain</li>
												<li data-value="audi4" class="option">Colombia</li>
												<li data-value="audi5" class="option">Dominican Republic</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>First Name <span class="required">*</span></label>
										<input type="text" placeholder="" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Last Name <span class="required">*</span></label>
										<input type="text" placeholder="" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="checkout-form-list">
										<label>Company Name</label>
										<input type="text" placeholder="" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="checkout-form-list">
										<label>Address <span class="required">*</span></label>
										<input type="text" placeholder="Street address" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="checkout-form-list">
										<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
									</div>
								</div>
								<div class="col-md-12">
									<div class="checkout-form-list">
										<label>Town / City <span class="required">*</span></label>
										<input type="text" placeholder="Town / City" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>State / County <span class="required">*</span></label>
										<input type="text" placeholder="" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Postcode / Zip <span class="required">*</span></label>
										<input type="text" placeholder="Postcode / Zip" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Email Address <span class="required">*</span></label>
										<input type="email" placeholder="" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="checkout-form-list">
										<label>Phone <span class="required">*</span></label>
										<input type="text" placeholder="Postcode / Zip" />
									</div>
								</div>
							</div> -->
						</div>
					</div>
					<div class="col-lg-6">
						<div class="your-order mb-30">
							<h3>Your Cart</h3>
							<div class="your-order-table table-responsive">
								<table>
									<thead>
										<tr>
											<th class="product-name">Product</th>
											<th class="product-total">Total</th>
										</tr>
									</thead>
									<tbody>
										<tr class="cart_item">
											<td class="product-name">
												Vestibulum suscipit <strong class="product-quantity"> × 1</strong>
											</td>
											<td class="product-total">
												<span class="amount">$165.00</span>
											</td>
										</tr>
										<tr class="cart_item">
											<td class="product-name">
												Vestibulum dictum magna <strong class="product-quantity"> × 1</strong>
											</td>
											<td class="product-total">
												<span class="amount">$50.00</span>
											</td>
										</tr>
									</tbody>
									<tfoot>
										<tr class="cart-subtotal">
											<th>Cart Subtotal</th>
											<td><span class="amount">$215.00</span></td>
										</tr>
										<tr class="shipping">
											<th>Shipping</th>
											<td>
												<ul>
													<li>
														<input type="radio" name="shipping" />
														<label> Flat Rate: <span class="amount">$7.00</span> </label>
													</li>
													<li>
														<input type="radio" name="shipping" />
														<label>Free Shipping:</label>
													</li>
												</ul>
											</td>
										</tr>
										<tr class="order-total">
											<th>Order Total</th>
											<td>
												<strong><span class="amount">$215.00</span></strong>
											</td>
										</tr>
									</tfoot>
								</table>
							</div>

							<div class="payment-method">
								<div class="accordion" id="checkoutAccordion">
									<div class="accordion-item">
										<h2 class="accordion-header" id="checkoutOne">
											<button
												class="accordion-button"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#bankOne"
												aria-expanded="true"
												aria-controls="bankOne"
											>
												Direct Bank Transfer
											</button>
										</h2>
										<div
											id="bankOne"
											class="accordion-collapse collapse show"
											aria-labelledby="checkoutOne"
											data-bs-parent="#checkoutAccordion"
										>
											<div class="accordion-body">
												<p>
													Make your payment directly into our bank account. Please use your Order ID as
													the payment reference. Your order won’t be shipped until the funds have cleared
													in our account.
												</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="paymentTwo">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#payment"
												aria-expanded="false"
												aria-controls="payment"
											>
												Cheque Payment
											</button>
										</h2>
										<div
											id="payment"
											class="accordion-collapse collapse"
											aria-labelledby="paymentTwo"
											data-bs-parent="#checkoutAccordion"
										>
											<div class="accordion-body">
												<p>
													Please send your cheque to Store Name, Store Street, Store Town, Store State /
													County, Store Postcode.
												</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="paypalThree">
											<button
												class="accordion-button collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#paypal"
												aria-expanded="false"
												aria-controls="paypal"
											>
												PayPal
											</button>
										</h2>
										<div
											id="paypal"
											class="accordion-collapse collapse"
											aria-labelledby="paypalThree"
											data-bs-parent="#checkoutAccordion"
										>
											<div class="accordion-body">
												<p>
													Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
													account.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="order-button-payment mt-20">
									<button type="submit" class="tp-btn-h1">Place order</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
	<Footer />
</template>

<script>
	import Header from "../components/Header/Header.vue";
	import Footer from "../components/Footer/Footer.vue";
	export default {
		components: {Header, Footer},
		data() {
			return {
				address: 1,
			};
		},
		methods: {
			selectAddress(index) {
				this.address = index;
			},
		},
	};
</script>

<style scoped>
	.active {
		background-color: #263c97;
	}
	.active h5,
	.active p {
		color: white;
	}
	.address {
		cursor: pointer;
	}
</style>
