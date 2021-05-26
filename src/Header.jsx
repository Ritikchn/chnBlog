import React, { useContext, useState } from "react";
import LoginButton from "./Login/LoginButton";
import IsLoggedIn from "./Login/IsLoggedIn";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { userInfoContext } from "./ContextApi";

function Header(props) {
  const myStyle = {
    fontFamily: "font-family: 'Nanum Myeongjo', serif",
  };
  const [isLoggedin, setisLoggedin] = useState(false);
  const [UserData, setUserData] = useState({});
  const { setData } = useContext(userInfoContext);

  const onSuccess = (res) => {
    setUserData({ name: res.profileObj.name, img: res.profileObj.imageUrl });
    setData({ name: res.profileObj.name, img: res.profileObj.imageUrl });

    setisLoggedin(true);
  };

  const onSuccess2 = () => {
    console.log("Sucessfully Log Out");
    setisLoggedin(false);
    setData({});
    setUserData({});
  };
 
  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };
  const key ="950808696686-2a0tmdu6sc823b4f3uso2sp74meo4tta.apps.googleusercontent.com";

  return (
    <div className="Header-parent">
      <div className="social-handle">
        <a href="/not-available">
          <i class="fa fa-facebook fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/ritikchn/">
          <i class="fa fa-instagram fa-lg"></i>
        </a>
        <a href="https://twitter.com/RitikMisspellT">
          <i class="fa fa-twitter fa-lg"></i>
        </a>
      </div>
      <div className="heads">
        <a href="/">
          <h1 style={myStyle}>Chn</h1>
        </a>
      </div>
      <div className="login-status">
        {isLoggedin ? (
          <GoogleLogout
            clientId={key}
            buttonText="Log out"
            onLogoutSuccess={onSuccess2}
            render={(renderprops) => (
              <div onClick={renderprops.onClick}>
                <IsLoggedIn userwho={UserData.name} userdp={UserData.img} />
              </div>
            )}
          />
        ) : (
          <GoogleLogin
            clientId={key}
            buttonText="Log in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            render={(renderprops) => (
              <div onClick={renderprops.onClick}>
                <LoginButton />
              </div>
            )}
          />
        )}
      </div>
    </div>
  );
}
export default Header;
