import '../../App.css';
import '../../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import image1 from "../images/image1.png";
import imagecart from "../images/cart.png";
import imagelogo from "../images/logo.png";
import pro1 from "../images/product-1.jpg";
import pro2 from "../images/product-2.jpg";
import pro3 from "../images/product-3.jpg";
import pro4 from "../images/product-4.jpg";
import cat1 from "../images/category-1.jpg";
import cat2 from "../images/category-2.jpg";
import cat3 from "../images/category-3.jpg";
import pro5 from "../images/product-5.jpg";
import pro6 from "../images/product-6.jpg";
import pro7 from "../images/product-7.jpg";
import pro8 from "../images/product-8.jpg";
import pro9 from "../images/product-9.jpg";
import pro10 from "../images/product-10.jpg";
import pro11 from "../images/product-11.jpg";
import pro12 from "../images/product-12.jpg";
import exclusive from "../images/exclusive.png";
import user1 from "../images/user-1.png";
import user2 from "../images/user-2.png";
import user3 from "../images/user-3.png";
import logog1 from "../images/logo-godrej.png";
import logog2 from "../images/logo-oppo.png";
import logog3 from "../images/logo-coca-cola.png";
import logog4 from "../images/logo-paypal.png";
import logog5 from "../images/logo-philips.png";
import logoW from "../images/logo-white.png";
import logoPlay from "../images/play-store.png";
import logoApp from "../images/app-store.png";
import imagemenu from "../images/menu.png";
import Products from "./products";

function home() {
    return (
        <div class="body">
<div class="header">

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
	<div class="row">
		<div class="col-2">
			<h1>Give Your Workout A New Product!</h1>
			<p>Success isn't always about greatness. It's about consistency. Consistent<br />hard work gain sucess. Greatness will come.</p>
			<a href="" class="btn">Explore Now &#8594;</a>
		</div>
		<div class="col-2">
			<img src={image1} />
		</div>
	</div>
</div>
</div>
	<div class="categories">
		<div class="small-container">
		<div class="row">
			<div class="col-3">
				<img src={cat1}/>
			</div>
			<div class="col-3">
				<img src={cat2} />
			</div>
			<div class="col-3">
				<img src={cat3} />
			</div>
		</div>
		</div>
	</div>

	<div class="small-container">
		<h2 class="title">Featured Products</h2>
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
		<h2 class="title">Latest Products</h2>
		<div class="row">
			<div class="col-4">
				<img src={pro5}/>
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
				<img src={pro6} />
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
				<img src={pro7}/>
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
				<img src={pro8} />
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
		<div class="row">
			<div class="col-4">
				<img src={pro9} />
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
				<img src={pro10} />
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
				<img src={pro11} />
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
				<img src={pro12} />
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

	<div class="offer">
		<div class="small-container">
			<div class="row">
				<div class="col-2">
					<img src={exclusive} class="offer-img" />
				</div>
				<div class="col-2">
					<p>Exclusive Available on SobithaStore</p>
					<h1>Smart Band 4</h1>
					<small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear </small>
                    <a href="" class="btn">Buy Now &#8594;</a>
				</div>
			</div>
		</div>
	</div>

        <div class="testimonial">
            <div class="small-container">
                <div class="row">
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loream Ipsum has been the industry's standard dummy text ever</p>
                        <div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				        </div>
                        <img src={user1} />
                        <h3>Sean Parker</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loream Ipsum has been the industry's standard dummy text ever</p>
                        <div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				        </div>
                        <img src={user2} />
                        <h3>Sean Parker</h3>
                    </div>
                    <div class="col-3">
                        <i class="fa fa-quote-left"></i>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loream Ipsum has been the industry's standard dummy text ever</p>
                        <div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-o"></i>
				        </div>
                        <img src={user3} />
                        <h3>Sean Parker</h3>
                    </div>
                </div>
            </div>
        </div>

        <div class="brands">
            <div class="small-container">
                <div class="row">
                    <div class="column">
                        <img src={logog1} />
                    </div>
                    <div class="column">
                        <img src={logog2} />
                    </div>
                    <div class="column">
                        <img src={logog3} />
                    </div>
                    <div class="column">
                        <img src={logog4} />
                    </div>
                    <div class="column">
                        <img src={logog5} />
                    </div>
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

 export default home;