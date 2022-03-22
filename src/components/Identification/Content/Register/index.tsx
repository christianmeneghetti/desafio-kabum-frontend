import React from "react";
import { IconRegister } from "../../../../assets/images/IconRegister";
import * as S from "./styled";

export default function Register() {
  return (
    <S.Register>
      <S.FormRegister>
        <S.FormH2>QUERO ME CADASTRAR</S.FormH2>
        <S.DivRegister>
          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input
                  type="text"
                  placeholder="chris333meneghetti@gmail.com"
                ></S.Input>
                <S.Label>E-mail</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>

          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input type="password"></S.Input>
                <S.Label>Crie sua senha *</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>

          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input type="password"></S.Input>
                <S.Label>Confirme sua senha *</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>

          <S.DivCamp>
            <S.DivInp>
              <S.DivForm>
                <S.Input type="text"></S.Input>
                <S.Label>Endereço *</S.Label>
              </S.DivForm>
            </S.DivInp>
          </S.DivCamp>
        </S.DivRegister>

        <S.DivButton>
          <S.Button>
            <S.DivSvg>
              <IconRegister />
            </S.DivSvg>
            Cadastrar
          </S.Button>
        </S.DivButton>
      </S.FormRegister>
    </S.Register>
  );
}
