

const LoginForm = () => {
    return (
        <div className="fb-loginform">
            <div className="fb-login-wrapper">
                <div className="fb-login-card">
                    <h1 className="fb-login-title">Log in to Facebook</h1>
                    <form className="fb-login-form" action="#" method="post">
                        <input className="fb-input" type="text" name="email" placeholder="Email address or mobile number" required />
                        <input className="fb-input" type="password" name="password" placeholder="Password" required />
                        <button className="fb-login-btn" type="submit">Log in</button>
                    </form>
                    <a className="fb-forgot-link" href="#">Forgotten password?</a>
                    <button className="fb-create-btn" type="button">Create new account</button>
                    <p className="fb-footer">∞ Meta</p>
                </div>
            </div>
        </div>  
    );
}

export default LoginForm;