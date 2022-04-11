import React from "react";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthProvider";

const Home: NextPage = ({ children }) => {
  const [offers, setOffers] = useState([]);
  const [favorite, setFavorite] = useState([] as any);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:5000/offers").then((response) => {
      setOffers(response.data);
    });
  }, []);

  const onAddFavorite = (id: string) => {
    if (localStorage.getItem("u") === "null") {
      router.push("/LoginPage");
    } else {
      setFavorite((previousFav: string[]): any => {
        if (previousFav.includes(id)) {
          return previousFav.filter((favedId) => favedId !== id);
        }
        return [...previousFav, id];
      });
    }
  };

  const onAddCart = (id: string) => {
    setCart((previousAdd: string[]): any => {
      return [...previousAdd, id];
    });
  };

  useEffect(() => {
    const cartLS = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const favoriteLS = JSON.parse(sessionStorage.getItem("favorite") || "[]");
    setCart(cartLS);
    setFavorite(favoriteLS);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("favorite", JSON.stringify(favorite));
  });

  return (
    <AuthProvider>
      <>
        <Header favoriteCount={favorite.length} cartCount={cart.length} />
        <Body
          ofertas={offers}
          favorite={favorite}
          onAddFavorite={onAddFavorite}
          onAddCart={onAddCart}
        />
      </>
    </AuthProvider>
  );
};

export default Home;
