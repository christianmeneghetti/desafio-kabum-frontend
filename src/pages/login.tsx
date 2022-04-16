import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import User from "../components/User";
import { AuthProvider } from "../context/AuthProvider";

const Login: NextPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(sessionStorage.getItem("cart") || "[]");
    setCart(cartLS);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  });

  return (
    <AuthProvider>
      <>
        <Header cartCount={cart.length} />
        <User />
      </>
    </AuthProvider>
  );
};

export default Login;
