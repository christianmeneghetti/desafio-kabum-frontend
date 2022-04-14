import React from "react";
import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Body from "../components/Body";
import Header from "../components/Header";
import { AuthProvider } from "../context/AuthProvider";

const Home: NextPage = () => {
  const [offers, setOffers] = useState([]);
  const [shipments, setShipments] = useState([]);
  const [departaments, setDeparments] = useState([]);
  const [shipping, setShippingToggle] = useState(false);
  const [hamburguer, setHamburguerToggle] = useState(false);
  const [address, setAddress] = useState([
    "Selecione o seu endereço principal",
  ]);
  const [favorite, setFavorite] = useState([] as any);
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get("http://localhost:5000/offers").then((response) => {
      setOffers(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/shipments").then((response) => {
      setShipments(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/departaments").then((response) => {
      setDeparments(response.data);
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

  const onSelectShipping = (address: string) => {
    setAddress((): any => {
      return [address];
    });
    toggleAddres();
  };

  useEffect(() => {
    const cartLS = JSON.parse(sessionStorage.getItem("cart") || "[]");
    const favoriteLS = JSON.parse(sessionStorage.getItem("favorite") || "[]");

    setCart(cartLS);
    setFavorite(favoriteLS);

    if (sessionStorage.getItem("address") != null) {
      const addressLS = JSON.parse(sessionStorage.getItem("address") || "{}");
      console.log(addressLS);
      setAddress(addressLS);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    sessionStorage.setItem("favorite", JSON.stringify(favorite));
    sessionStorage.setItem("address", JSON.stringify(address));
  });

  function toggleAddres() {
    setShippingToggle(!shipping);
  }

  function toggleHamburguer() {
    setHamburguerToggle(!hamburguer);
  }

  return (
    <AuthProvider>
      <>
        <Header
          departaments={departaments}
          shipments={shipments}
          hamburguer={hamburguer}
          address={address}
          onSelectShipping={onSelectShipping}
          shipping={shipping}
          toggleAddres={toggleAddres}
          toggleHamburguer={toggleHamburguer}
          favoriteCount={favorite.length}
          cartCount={cart.length}
        />
        <Body
          offers={offers}
          favorite={favorite}
          onAddFavorite={onAddFavorite}
          onAddCart={onAddCart}
        />
      </>
    </AuthProvider>
  );
};

export default Home;
