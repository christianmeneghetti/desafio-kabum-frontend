import React, { useState } from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import * as S from "./styled";

export default function AddressPrincipal(props: any) {
  const { shipments } = props;
  const { address } = props;
  const { shipping, toggleAddres, onSelectShipping } = props;

  return (
    <S.AdressPrincipal>
      <S.Shipping>Enviar para:</S.Shipping>
      <S.AddressPDiv>
        <S.AdressIDiv onClick={toggleAddres}>
          <S.Adress>{address}</S.Adress>
          <ArrowDown />
        </S.AdressIDiv>

        {shipping && (
          <S.AddressOpt>
            {shipments.shipments.map((shipment: any, index: any) => {
              return (
                <S.OptionialAddress
                  key={index}
                  onClick={() => onSelectShipping(shipment.address)}
                >
                  {shipment.address}
                </S.OptionialAddress>
              );
            })}
          </S.AddressOpt>
        )}
      </S.AddressPDiv>
    </S.AdressPrincipal>
  );
}
