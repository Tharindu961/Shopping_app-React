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
import image1 from "../images/image1.png";

function account() {
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

        <div class="account-page">
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <img src={image1} style={{width: "100%"}}/>
                    </div>

                    <div class="col-2">
                        <div class="row">
                            <div class="col-1" style={{marginRight: "300px"}}>
                        <div class="form-container">
                            <div class="form-btn">
                                <span>Register</span>
                            
                                <hr id="Indicator" />
                            </div>

                            <form>
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Register</button>
                            </form>

                        </div>
                        </div>
                        <div class="col-1">
                        <div class="form-container">
                            <div class="form-btn">
                                <span>Login</span>
                            
                                <hr id="Indicator" />
                            </div>
                            
                            <form >
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn">Login</button>
                                <a href="">Forgot Password</a>
                            </form>
                            </div>
                
                            </div>
                            </div>
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

 export default account;