import LoginForm from "../components/LoginForm";
import logo from "../assets/Facebook.png";
import loginimage1 from "../assets/frontimage.png";
import loginimage2 from "../assets/Facebook2.png";
import loginimage3 from "../assets/Facebook3.png";

const LoginPage = () => {
    const loginImages = [loginimage1, loginimage2, loginimage3];
    const loginimage = loginImages[Math.floor(Math.random() * loginImages.length)];

    return (
        <div className="Loginpage">
            <div className="Loginpage-topside">
                <div className="Loginpage-topside-leftside">
                    <div className="leftside-content1">
                        <div>
                            <img src={logo} alt="logo" className="logo" />
                        </div>
                        <div>
                            <p>Explore</p>
                            <p>the</p>
                            <p>things</p>
                            <p style={{ whiteSpace: 'nowrap' }} className="loveyou">you love.</p>
                        </div>

                    </div>
                    <div className="leftside-content2">
                        <img src={loginimage} alt="login-image" className="login-image" />
                    </div>
                </div>
                <hr className="horizontal-line" />
                <div className="Loginpage-topside-rightside">
                    <LoginForm />
                </div>
            </div>
            <div className="Loginpage-downside">
                <div className="footer-content">
                    <ul className="footer-langs">
                        <li>English (UK)</li>
                        <li>தமிழ்</li>
                        <li>తెలుగు</li>
                        <li>ಕನ್ನಡ</li>
                        <li>اردو</li>
                        <li>हिन्दी</li>
                        <li>മലയാളം</li>
                        <li>More languages...</li>
                    </ul>

                    <ul className="footer-links">
                        <li>Sign up</li>
                        <li>Log in</li>
                        <li>Messenger</li>
                        <li>Facebook Lite</li>
                        <li>Video</li>
                        <li>Meta Pay</li>
                        <li>Meta Store</li>
                        <li>Meta Quest</li>
                        <li>Ray-Ban Meta</li>
                        <li>Meta AI</li>
                        <li>Instagram</li>
                        <li>Threads</li>
                        <li>Privacy Policy</li>
                        <li>Privacy Centre</li>
                        <li>About</li>
                        <li>Create ad</li>
                        <li>Create Page</li>
                        <li>Developers</li>
                        <li>Careers</li>
                        <li>Cookies</li>
                        <li>AdChoices</li>
                        <li>Terms</li>
                        <li>Help</li>
                        <li>Contact uploading and non-users</li>
                    </ul>
                    <div className="footer-copyright">
                        Meta © 2026
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;