import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    
    function handleSubmit(event)
    {   
        event.preventDefault();
    }
    
    const [reg_no,setreg] = useState("");
    const [password,setpassword] = useState("");
    const [captcha,setcaptcha] = useState("");

    function change_reg(event)
    {
        setreg(event.target.value);
    }

    function change_password(event)
    {
        setpassword(event.target.value);
    }

    function change_captcha(event)
    {
        setcaptcha(event.target.value);
    }

    function showPassword()
    {
        var x = document.getElementById("pwd");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    return ( 
        <div className="Login_name">
            <div className="login_card" style={{backgroundColor : props.colour}}>
                <div className="login_card_content">
                    <div className="login_card_top">
                        <h3>{props.heading}</h3>
                    </div>
                    <div className="login_card_middle">
                        <form onSubmit={handleSubmit}>
                            <div className="input_div">
                                <input value={reg_no} onChange={change_reg} type="text" id="reg" name="reg" placeholder="Username" /><img className="user_icon"  src={"./images/user.png"} alt=""></img><br />
                            </div>
                            <div className="password_div">
                                <input value={password} onChange={change_password} type="password" id="pwd" name="pwd" placeholder="Password" /><img className="password_icon" onClick={showPassword} src={"./images/password.png"} alt=""></img>
                            </div>
                            <div className="captcha_div">
                                <img className="captcha_icon"  src={"./images/captcha.png"} alt=""></img>
                                <input value={captcha} onChange={change_captcha} type="text" id="captcha" name="captcha" placeholder="Captcha (CAPS & NUMBERS ONLY)" /><br />
                            </div>
                        </form> 
                    </div>
                    <div className="login_card_bottom">
                        <div className="login_forgot">
                        <Link to=""><p>Forgot Password</p></Link>
                        <Link to=""><p>Forgot UserID</p></Link>
                        </div>
                        <Link to="/HomePage">
                        <button className="login_card_submit_button" style={{
                            backgroundColor: props.colour,
                            borderColor: props.colour,
                            color: "#ffffff",
                            display: "inline-block",
                            marginTop: "10px",
                            fontWeight:" normal",
                            textAlign: "center",
                            verticalAlign: "middle",
                            touchAction: "manipulation",
                            cursor: "pointer",
                            border: "1px solid transparent",
                            whiteSpace: "nowrap",
                            padding: "6px 12px",
                            fontSize: "12px",
                            lineHeight: "1.42857143",
                            borderRadius: "4px",
                            userSelect: "none",
                            fontFamily: "'Roboto', sans-serif",
                            textTransform: "none"
                            }}>{props.login}</button></Link>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;