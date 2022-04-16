import React from "react";
import { ArrowDown } from "../../../assets/images/IconArrowDown";
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
          <S.ArrowDown
            theme={
              shipping
                ? "transform: rotate(180deg);" + "transition: all 0.4s ease 0s;"
                : "transform: rotate(0deg);" + "transition: all 0.4s ease 0s;"
            }
          >
            <ArrowDown />
          </S.ArrowDown>
        </S.AdressIDiv>

        {shipping && (
          <S.AddressOpt>
            <S.Open onClick={toggleAddres} />
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
