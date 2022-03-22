import React from "react";
import { IconEnter } from "../../../../assets/images/IconEnter";
import * as S from "./styled";

export default function Login() {
  return (
    <S.Login>
      <S.FormLogin>
        <S.FormH2>JÁ TENHO CADASTRO</S.FormH2>
        <S.DivLogin>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input type="text" id="inputUserEmail"></S.Input>
                <S.Label htmlFor="inputUserEmail">E-mail</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input type="password" id="inputUserPassword"></S.Input>
                <S.Label htmlFor="inputUserPassword">Senha</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
        </S.DivLogin>

        <S.DivButton>
          <S.Button>
            <S.DivSvg>
              <IconEnter />
            </S.DivSvg>
            ENTRAR
          </S.Button>
        </S.DivButton>
      </S.FormLogin>
    </S.Login>
  );
}
