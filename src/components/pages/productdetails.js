import '../../App.css';
import '../../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import imagecart from "../images/cart.png";
import imagelogo from "../images/logo.png";
import pro1 from "../images/product-1.jpg";
import pro2 from "../images/product-2.jpg";
import pro3 from "../images/product-3.jpg";
import pro4 from "../images/product-4.jpg";
import logoW from "../images/logo-white.png";
import logoPlay from "../images/play-store.png";
import logoApp from "../images/app-store.png";
import imagemenu from "../images/menu.png";

function productdetails() {
    return (
        <div class="body">
<div class="container">
	<div class="navbar">
		<div class="logo">
			<img src={imagelogo} style={{width: "125px"}} />
		</div>
		<nav>
			<ul id="MenuItems">
				<li><a href="">Home</a></li>
				<li><a href="">Products</a></li>
				<li><a href="">About</a></li>
				<li><a href="">Contact</a></li>
				<li><a href="">Account</a></li>
			</ul>
		</nav>
		<img src={imagecart} style={{width: "30px", height: "30px", marginTop: "-23px"}} />
		<img src={imagemenu} style={{marginTop: "-18px"}} class="menu-icon" onClick="menutoggle()"/>
	</div>
</div>



	<div class="small-container">

		<div class="row">
			<div class="col-4">
				<img src={pro1} />
				<h4>Red Printed T-Shirt</h4>
				<div className="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>Rs50.00</p>
			</div>
			<div class="col-4">
				<img src={pro2} />
				<h4>Red Printed T-Shirt</h4>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>Rs50.00</p>
			</div>
			<div class="col-4">
				<img src={pro3} />
				<h4>Red Printed T-Shirt</h4>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>Rs50.00</p>
			</div>
			<div class="col-4">
				<img src={pro4} />
				<h4>Red Printed T-Shirt</h4>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>Rs50.00</p>
			</div>
		</div>
	</div>

		<div class="footer">
			<div class="container">
				<div class="row">
					<div class="footer-col-1">
						<h3>Doownload Our App</h3>
						<p>Download App for Android and ios mobile phone. </p>
					</div>
					<div class="footer=col-2">
						<img src={logoW}></img>
						<p>Our Purpose Is To Sustainably MAke the Please and Benefits of Sports Accessible to the Many. </p>
						<div class="app-logo">
							<img src={logoPlay} />
							<img src={logoApp} />
						</div>
					</div>
					<div class="footer-col-3">
						<h3>Useful Links</h3>
						<ul>
							<li>Coupans</li>
							<li>Blog Post</li>
							<li>Return Policy</li>
							<li>Join Affiliate</li>
						</ul>
					</div>
					<div class="footer-col-4">
						<h3>Follow us</h3>
						<ul>
							<li>Facebook</li>
							<li>Twitter</li>
							<li>Instagram</li>
							<li>YouTube</li>
						</ul>
					</div>
				</div>
				<hr></hr>
				<p class="copyright">Copyright 2021 - Sobitha PRoductions</p>
				
			</div>
		</div>
        </div>
);
	

};

 export default productdetails;