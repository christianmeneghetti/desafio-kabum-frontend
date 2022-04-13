import React from "react";
import { IconAccount } from "../../../assets/images/IconAccount";
import { IconAttendence } from "../../../assets/images/IconAttendence";
import { IconCards } from "../../../assets/images/IconCard";
import { IconClose } from "../../../assets/images/IconClose";
import { IconDrop } from "../../../assets/images/IconDrop";
import { IconHamburguer } from "../../../assets/images/IconHamburguer";
import { IconHeart } from "../../../assets/images/IconHeart";
import { IconLogged } from "../../../assets/images/IconLogged";
import { IconOffers } from "../../../assets/images/IconOffers";
import { IconOrders } from "../../../assets/images/IconOrders";
import { IconPix } from "../../../assets/images/IconPix";
import { IconPrime } from "../../../assets/images/IconPrime";
import { IconSearch } from "../../../assets/images/IconSearch";
import * as S from "./styled";

export default function HamburguerMenu(props: any) {
  const { hamburguer, toggleHamburguer, onLogout } = props;

  return (
    <>
      <S.HamburguerMenu onClick={toggleHamburguer}>
        <IconHamburguer />
      </S.HamburguerMenu>
      {hamburguer && (
        <>
          <S.Open onClick={toggleHamburguer} />
          <S.Hamburguer>
            <S.Greeting>
              <S.Close onClick={toggleHamburguer}>
                <IconClose />
              </S.Close>
              <IconLogged />
              <S.Hello>Olá. Luis Henrique</S.Hello>
            </S.Greeting>
            <S.Content>
              <S.Items>
                <S.Item>
                  <IconAccount />
                  <S.ItemLink href="#">Minha conta</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconOrders />
                  <S.ItemLink href="#">Meus pedidos</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconHeart />
                  <S.ItemLink href="#">Favoritos</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconAttendence />
                  <S.ItemLink href="#">Atendimento</S.ItemLink>
                </S.Item>
              </S.Items>
              <S.Items>
                <S.Item>
                  <IconSearch />
                  <S.ItemLink href="#">Mais procurados</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconDrop />
                  <S.ItemLink href="#">Acabaram de chegar</S.ItemLink>
                </S.Item>
              </S.Items>
              <S.Items>
                <S.Item>
                  <IconOffers />
                  <S.ItemLink href="#">Oferta do dia</S.ItemLink>
                </S.Item>
              </S.Items>
              <S.Items>
                <S.Item>
                  <IconPrime />
                  <S.ItemLink href="#">Seja Prime Ninja</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconCards />
                  <S.ItemLink href="#">Cartão KaBuM!</S.ItemLink>
                </S.Item>
                <S.Item>
                  <IconPix />
                  <S.ItemLink href="#">PIX</S.ItemLink>
                </S.Item>
              </S.Items>
            </S.Content>
            <S.Out>
              <S.OutButton onClick={onLogout}>Sair</S.OutButton>
            </S.Out>
          </S.Hamburguer>
        </>
      )}
    </>
  );
}
