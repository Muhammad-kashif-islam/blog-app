import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, Authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [loader, setLoader] = useState();

  useEffect(() => {
    if (Authentication && authStatus !== Authentication) {
      navigate("/login");
    } else if (!Authentication && authStatus !== Authentication) {
      navigate("/login");
    }
  }, [authStatus, navigate, Authentication]);

  return <div>Protected</div>;
}

export default Protected;
