import React from "react";
const IsLoggedIn = (props) => {
  const style = {
    borderRadius: "40%",
    margin: "5px",
  };
  return (
    <div>
      <img
        src={props.userdp}
        style={style}
        width="50px"
        height="50px"
        alt="profile_dp"
      />
      {/* <div>
                <h4>{props.userwho}</h4>
            </div> */}
    </div>
  );
};
export default IsLoggedIn;
