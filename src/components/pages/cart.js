import '../../App.css';
import '../../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import imagecart from "../images/cart.png";
import imagelogo from "../images/logo.png";
import logoW from "../images/logo-white.png";
import logoPlay from "../images/play-store.png";
import logoApp from "../images/app-store.png";
import imagemenu from "../images/menu.png";

function cart() {
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
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>Product name</td>
                    <td><input type="number" value="1" /></td>
                    <td>Rs.50.00</td>
                </tr>
            </table>
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

 export default cart;