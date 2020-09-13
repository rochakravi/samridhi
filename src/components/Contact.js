import React, { useState } from "react";

const Contact = () => {
  const [isAuth, setIsAuth] = useState(false);
  const changeState = () => {
    console.log("before testing =>", isAuth);
    setIsAuth({
      isAuth: true,
    });
    console.log("testing =>", isAuth);
  };
  return (
    <div>
      {isAuth ? <div>Welcome User</div> : <div>Welcome Guest</div>}

      <button onClick={() => changeState()}>Change State</button>
    </div>
  );
};

export default Contact;

//onClick={changeState}

//onClick={()=>changeState()}
