import { NextPage } from "next";
import React from "react";
import Header from "../components/Header";
import Identification from "../components/Identification";
import { AuthProvider } from "../context/AuthProvider";

const LoginPage: NextPage = ({ children }) => {
  return (
    <AuthProvider>
      <>
        <Header />
        <Identification />
      </>
    </AuthProvider>
  );
};

export default LoginPage;
