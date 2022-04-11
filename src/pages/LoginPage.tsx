import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Identification from "../components/Identification";
import { AuthProvider } from "../context/AuthProvider";

const LoginPage: NextPage = ({ children }) => {
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
        <Identification />
      </>
    </AuthProvider>
  );
};

export default LoginPage;
