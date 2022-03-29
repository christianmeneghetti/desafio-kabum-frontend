import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useReducer, useState } from "react";
import Body from "../components/Body";
import Header from "../components/Header";

const Home: NextPage = ({ children }) => {
  const [offers, setOffers] = useState([]);
  const [favorite, setFavorite] = useState([] as any);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/offers").then((response) => {
      setOffers(response.data);
    });
  }, []);

  const onAddFavorite = (id: string) => {
    setFavorite((previousFav: string[]): any => {
      if (previousFav.includes(id)) {
        return previousFav.filter((favedId) => favedId !== id);
      }
      return [...previousFav, id];
    });
  };

  const onAddCart = (id: string) => {
    setCart((previousAdd: string[]): any => {
      return [...previousAdd, id];
    });
  };

  return (
    <>
      <Header favoriteCount={favorite.length} cartCount={cart.length} />
      <Body
        ofertas={offers}
        favorite={favorite}
        onAddFavorite={onAddFavorite}
        onAddCart={onAddCart}
      />
    </>
  );
};

export default Home;
