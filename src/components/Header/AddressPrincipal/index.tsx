import React, { useState } from "react";
import { ArrowDown } from "../../../assets/images/ArrowDown";
import * as S from "./styled";

export default function AddressPrincipal() {
  const [address, setAddress] = useState(
    "Rua das Hortências, 295 - Boa Vista - Limeira SP"
  );
  const [shipping, setShippingToggle] = useState(false);

  function toggleAddres() {
    setShippingToggle(!shipping);
  }

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
        )}
      </S.AddressPDiv>
    </S.AdressPrincipal>
  );
}
