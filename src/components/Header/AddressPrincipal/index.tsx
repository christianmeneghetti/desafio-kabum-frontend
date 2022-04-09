import React from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import * as S from "./styled";

export default function AddressPrincipal() {
  return (
    <S.AdressPrincipal>
      <S.Shipping>Enviar para:</S.Shipping>
      <S.AddressPDiv>
        <S.AdressIDiv>
          <S.Adress>Rua das Hortências, 295 - Boa Vista - Limeira SP</S.Adress>
          <ArrowDown />
        </S.AdressIDiv>
        <S.AddressOpt>
          <S.OptionialAddress>
            Rua Fausto Francisco, 201 - Jardim Tarumã - Araras SP
          </S.OptionialAddress>
          <S.OptionialAddress>
            Rua Visconde do Rio Branco, 482 - Centro - Araras SP
          </S.OptionialAddress>
          <S.OptionialAddress>
            Rua das Hortências, 295 - Boa Vista - Limeira SP
          </S.OptionialAddress>
        </S.AddressOpt>
      </S.AddressPDiv>
    </S.AdressPrincipal>
  );
}
